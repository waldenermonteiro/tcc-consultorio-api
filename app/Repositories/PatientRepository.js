"use strict";
const { validateAll } = use("Validator");
const Database = use("Database");
const BaseRepository = use("App/Repositories/BaseRepository");
class PatientRepository extends BaseRepository {
  constructor(Model, User, Profile, Validator, UserValidator) {
    super(Model, Validator);
    this.Model = Model;
    this.User = User;
    this.Profile = Profile
    this.Validator = new Validator();
    this.UserValidator = new UserValidator();
  }
  async index({ request, response }) {
    const items = await this.Model.query().filter(request.all()).with("user").fetch();
    return response.ok({
      status: 200,
      data: items,
    });
  }
  async getProfilesAndFiltered() {
    let items = await this.Profile.query().fetch()
    items = items.toJSON().filter((profile) => profile.name.toLowerCase() === 'paciente')
    return items[0]
  }
  async store({ request, response }) {
    const data = request.only(this.Validator.inputs);
    const dataUser = request.only(this.UserValidator.inputsPatient);
    const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages);
    const validationUser = await validateAll(dataUser, this.UserValidator.rulesPatient, this.UserValidator.messages);
    const trx = await Database.beginTransaction();
    try {
      if (validation.fails()) throw Error();
      const profilePatient = await this.getProfilesAndFiltered()
      const user = await this.User.create({ ...dataUser, profile_id: profilePatient.id, password: "passwordNotDefined" }, trx);
      user.save();
      const patient = await this.Model.create({ ...data, user_id: user.id }, trx);
      patient.save();
      await trx.commit();
      return response.ok({
        status: 200,
        data: patient,
        message: `Paciente ${patient.name} cadastrado(a) com sucesso`,
      });
    } catch (error) {
      await trx.rollback();
      return this.messagesValidations([validationUser, validation], response);
    }
  }
  async update({ request, response, params }) {
    const data = request.only(this.Validator.inputs);
    const dataUser = request.only(this.UserValidator.inputsUpdate);
    const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages);
    const validationUser = await validateAll(dataUser, this.UserValidator.rulesUpdate(params.user_id), this.UserValidator.messages);
    const trx = await Database.beginTransaction();
    try {
      const patient = await this.Model.findByOrFail("id", params.id);
      await patient.merge(data, trx);
      await patient.save();
      const user = await this.User.findByOrFail("id", patient.user_id);
      await user.merge(dataUser, trx);
      await user.save();
      await trx.commit();
      return response.ok({
        status: 200,
        message: `Paciente ${patient.name} atualizado(a) com sucesso`,
      });
    } catch (error) {
      await trx.rollback();
      return this.messagesValidations([validationUser, validation], response);
    }
  }
  async destroy({ request, response, params }) {
    const trx = await Database.beginTransaction();
    try {
      const patient = await this.Model.findByOrFail("id", params.id);
      await patient.delete(trx);
      await patient.save();
      const user = await this.User.findByOrFail("id", patient.user_id);
      await user.delete(trx);
      await user.save();
      await trx.commit();
      return response.ok({
        status: 200,
        message: `Paciente(a) ${patient.name} excluído com sucesso`,
      });
    } catch (error) {
      await trx.rollback();
      return "Não foi possível realizar a ação, por favor, tente mais tarde";
    }
  }
}
module.exports = PatientRepository;
