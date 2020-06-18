"use strict";
const BaseRepository = use("App/Repositories/BaseRepository");
const { validateAll } = use("Validator");
class RequestExamRepository extends BaseRepository {
  constructor(Model, Validator) {
    super(Model, Validator);
    this.Model = Model;
    this.Validator = new Validator();
  }
  async index({ request, response, params }) {
    try {
      const items = await this.Model.query().with("typeExam").with("medicalSchedule.patient").with("medicalSchedule.employee").fetch();
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
    const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages);
    try {
      const item = await this.Model.findByOrFail("id", params.id);
      const dataDefinitived = { ...item.$attributes, status: data.status };
      await item.merge(dataDefinitived);
      await item.save();
      return response.ok({
        status: 200,
        data: item,
        message: `Status da ${this.Validator.name} atualizado(a) com sucesso`,
      });
    } catch (error) {
      return this.messagesValidation(validation, response);
    }
  }
}
module.exports = RequestExamRepository;
