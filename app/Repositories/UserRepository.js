"use strict";
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");
const { validateAll } = use("Validator");
const BaseRepository = use("App/Repositories/BaseRepository");
class UserRepository extends BaseRepository {
  constructor(Model, Validator, Patient, Employee) {
    super(Model, Validator);
    this.Model = Model;
    this.Validator = new Validator();
    this.Patient = Patient;
    this.Employee = Employee;
  }
  async login({ auth, request, response }) {
    const data = request.only(this.Validator.inputs);
    const validation = await validateAll(data, this.Validator.rulesLogin, this.Validator.messages);
    try {
      const params = { auth, request, response, self: this };
      return await this.getUser(params);
    } catch (error) {
      return this.messagesValidation(validation, response);
    }
  }
  async index({ request, response }) {
    const items = await this.Model.query().with("profile").fetch();
    return response.ok({
      status: 200,
      data: items,
    });
  }
  async getUser(params) {
    try {
      const user = await this.Model.findByOrFail({ email: params.request.body.email });
      return await this.validateUser({ ...params, user: user });
    } catch (error) {
      return params.response.badRequest({ status: 400, errors: [{ message: `Email ou senha inválidos` }] });
    }
  }
  async validateUser(params) {
    const password = params.request.body.password;
    const hashedPassword = params.user.password;
    try {
      await this.verifyPassword(password, hashedPassword);
      return await this.userLogger(params);
    } catch (error) {
      return params.response.badRequest({ status: 400, errors: [{ message: `Email ou senha inválidos` }] });
    }
  }
  async userLogger(params) {
    const employee = await this.Employee.findBy("user_id", params.user.id);
    let user = {};
    if (employee !== null) {
      user = await this.Employee.query().where("user_id", params.user.id).with("user.profile").first();
    } else {
      const patient = await this.Patient.findBy("user_id", params.user.id);
      user = await this.Patient.query().where("user_id", params.user.id).with("user.profile").first();
    }
    const userById = await this.Model.findBy("id", params.user.id);
    const token = await params.auth.generate(userById, true);
    user = await params.auth.generate(user, true);
    return params.response.ok({
      status: 200,
      data: { user, token },
    });
  }
  async verifyPassword(password, hashedPassword) {
    const ifPasswordsEquals = await Hash.verify(password, hashedPassword);
    if (!ifPasswordsEquals) throw "Error";
  }
  async store({ auth, request, response }) {
    const data = request.only(this.Validator.inputs);
    const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages);
    try {
      const user = await this.Model.create(data);
      const token = await auth.generate(user);
      return response.ok({
        status: 200,
        data: { user, token },
        message: `${this.Validator.name} ${user.email} cadastrado com sucesso`,
      });
    } catch (error) {
      return this.messagesValidation(validation, response);
    }
  }
  async alterPassword({ request, response, params }) {
    const data = request.only(this.Validator.inputsAlterPassword);
    const validation = await validateAll(data, this.Validator.rulesAlterPassword, this.Validator.messages);
    try {
      console.log(params);
      const item = await this.Model.findByOrFail("id", params.id);
      const dataDefinitived = { ...item.$attributes, password: data.password };
      await item.merge(dataDefinitived);
      await item.save();
      return response.ok({
        status: 200,
        data: item,
        message: `Senha atualizada com sucesso`,
      });
    } catch (error) {
      console.log(error);
      return this.messagesValidation(validation, response);
    }
  }
}
module.exports = UserRepository;
