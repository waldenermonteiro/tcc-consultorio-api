"use strict";
const BaseRepository = use("App/Repositories/BaseRepository");
const Database = use("Database");
const { validateAll } = use("Validator");
class MedicalScheduleRepository extends BaseRepository {
  constructor(Model, RequestExam, Validator, RequestExamValidator) {
    super(Model, Validator);
    this.Model = Model;
    this.RequestExam = RequestExam;
    this.Validator = new Validator();
    this.RequestExamValidator = new RequestExamValidator();
  }
  async index({ request, response, params }) {
    try {
      const items = await this.Model.query().filter(request.all()).with("patient").with("employee.specialitie").fetch();
      return response.ok({
        status: 200,
        data: items,
      });
    } catch (error) {
      return this.messageNotExistItem(response);
    }
  }
  async alterStatus({ request, response, params }) {
    const data = request.only(this.Validator.inputsAlterStatus);
    const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages);
    try {
      const item = await this.Model.findByOrFail("id", params.id);
      const dataDefinitived = { ...item.$attributes, status: data.status };
      await item.merge(dataDefinitived);
      await item.save();
      return response.ok({
        status: 200,
        data: item,
        message: `Status da ${this.Validator.name} ${item.name} atualizado(a) com sucesso`,
      });
    } catch (error) {
      return this.messagesValidation(validation, response);
    }
  }
  async finishConsult({ request, response, params }) {
    const data = request.only(this.Validator.inputsFinishConsult);
    const dataRequestExam = request.only(this.RequestExamValidator.inputsFinishConsult);
    const validation = await validateAll(data.medicalSchedule, this.Validator.rulesFinishConsult(), this.Validator.messages);
    const validationRequestExam = await validateAll(dataRequestExam.requestExam, this.RequestExamValidator.rules(), this.RequestExamValidator.messages);
    const trx = await Database.beginTransaction();
    try {
      const medicalSchedule = await this.Model.findByOrFail("id", params.id);
      await medicalSchedule.merge({ ...data.medicalSchedule, prescription_medicaments: JSON.stringify(data.medicalSchedule.prescription_medicaments), status: "Finalizada" }, trx);
      await medicalSchedule.save();
      if (dataRequestExam.requestExam) {
        for (const rexam of dataRequestExam.requestExam) {
          const requestExam = await this.RequestExam.create({ ...rexam, medical_schedule_id: params.id, status: "Agendado" }, trx);
          requestExam.save();
        }
      }
      await trx.commit();
      return response.ok({
        status: 200,
        message: `Consulta finalizada com sucesso`,
      });
    } catch (error) {
      await trx.rollback();
      return dataRequestExam.requestExam ? this.messagesValidations([validationRequestExam, validation], response) : this.messagesValidations(validation, response);
    }
  }
}
module.exports = MedicalScheduleRepository;
