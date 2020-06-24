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
  async index({ request, response }) {
    try {
      const items = await this.Model.query().filter(request.all()).with("patient").with("employee.specialitie").orderBy("date_appointment", "desc").fetch();
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
    try {
      if (validation.fails()) throw Error();
      const item = await this.Model.create({ ...data, status: "Agendada" });
      return response.ok({
        status: 200,
        data: item,
        message: `${this.Validator.name} ${item.name} cadastrado(a) com sucesso`,
      });
    } catch (error) {
      return this.messagesValidation(validation, response);
    }
  }
  async alterStatus({ request, response, params }) {
    const data = request.only(this.Validator.inputsAlterStatus);
    const validation = await validateAll(data, this.Validator.rulesAlterStatus(), this.Validator.messages);
    try {
      if (validation.fails()) throw Error();
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
    const trx = await Database.beginTransaction();
    try {
      if (validation.fails()) throw Error();
      const medicalSchedule = await this.Model.findByOrFail("id", params.id);
      console.log(dataRequestExam)
      if (dataRequestExam.requestExam) {
        for (const rexam of dataRequestExam.requestExam) {
          console.log(rexam)
          const requestExam = await this.RequestExam.create({ ...rexam, medical_schedule_id: params.id, status: "Agendado" }, trx);
          console.log(requestExam)
          requestExam.save();
        }
      }
      await medicalSchedule.merge({ ...data.medicalSchedule, prescription_medicaments: JSON.stringify(data.medicalSchedule.prescription_medicaments), status: "Finalizada" }, trx);
      await medicalSchedule.save();
      await trx.commit();
      return response.ok({
        status: 200,
        message: `Consulta finalizada com sucesso`,
      });
    } catch (error) {
      console.log(error);
      await trx.rollback();
      return this.messagesValidation(validation, response);
    }
  }
}
module.exports = MedicalScheduleRepository;
