"use strict";
const User = use("App/Models/User");
const Patient = use("App/Models/Patient");
const Employee = use("App/Models/Employee");
const StoreUser = use("App/Validators/StoreUser");
const BaseController = use("App/Controllers/Http/BaseController");
const UserRepository = use("App/Repositories/UserRepository");

class UserController extends BaseController {
  constructor() {
    super(User, StoreUser);
    this.UserRepository = new UserRepository(User, StoreUser, Patient, Employee);
  }
  async login({ auth, request, response, params }) {
    return await this.UserRepository.login({ auth, request, response, params });
  }
  async auth({ auth, request, response, params }) {
    const user = await User.find(params.id);
    const token = await auth.generate(user, true);
    return token;
  }
  async index({ request, response }) {
    return await this.UserRepository.index({ request, response });
  }
  async store({ auth, request, response }) {
    return await this.UserRepository.store({ auth, request, response });
  }
  async alterPassword({ request, response, params }) {
    return await this.UserRepository.alterPassword({ request, response, params });
  }
}

module.exports = UserController;
