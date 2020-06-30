"use strict";
const BaseRepository = use("App/Repositories/BaseRepository");
const Database = use("Database");
const { validateAll } = use("Validator");
class ResultExamRepository extends BaseRepository {
  constructor(Model, RequestExam, Validator) {
    super(Model, Validator);
    this.Model = Model;
    this.RequestExam = RequestExam;
    this.Validator = new Validator();
  }
  async index({ request, response }) {
    try {
      const requestParams = request.all();
      let items = await this.Model.query()
        .orderBy("created_at", "desc")
        .filter(request.all())
        .with("requestExam")
        .with("medicalSchedule.employee")
        .with("medicalSchedule.patient")
        .with("requestExam.typeExam")
        .fetch();
      if (requestParams.patient_id) {
        items = items.toJSON().filter((item) => item.medicalSchedule.patient_id === parseInt(requestParams.patient_id));
      }
      if (requestParams.employee_id) {
        items = items.toJSON().filter((item) => item.medicalSchedule.employee_id === parseInt(requestParams.employee_id));
      }
      return response.ok({
        status: 200,
        data: items,
      });
    } catch (error) {
      return this.messageNotExistItem(response);
    }
  }
  async store({ request, response }) {
    const data = request.only(this.Validator.inputs);
    const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages);
    const trx = await Database.beginTransaction();
    try {
      if (validation.fails()) throw Error();
      const resultExam = await this.Model.create(data, trx);
      resultExam.save();
      const requestExam = await this.RequestExam.findByOrFail("id", data.request_exam_id);
      const requestExamAlteredStatus = { ...requestExam.$attributes, status: "Finalizado" };
      await requestExam.merge(requestExamAlteredStatus, trx);
      await requestExam.save();
      await trx.commit();
      return response.ok({
        status: 200,
        message: `${this.Validator.name} cadastrado(a) com sucesso`,
      });
    } catch (error) {
      return this.messagesValidation(validation, response);
    }
  }
}
module.exports = ResultExamRepository;
