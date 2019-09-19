'use strict'
const Employee = use('App/Models/Employee')
const User = use('App/Models/User')
const StoreEmployee = use('App/Validators/StoreEmployee')
const StoreUser = use('App/Validators/StoreUser')
const BaseController = use('App/Controllers/Http/BaseController')
const EmployeeRepository = use('App/Repositories/EmployeeRepository')
class EmployeeController extends BaseController {
  constructor() {
    super(Employee, StoreEmployee)
    this.EmployeeRepository = new EmployeeRepository(Employee, User, StoreEmployee, StoreUser)
  }
  async index({ request, response }) {
    return await this.EmployeeRepository.index({ request, response })
  }
  async store({ request, response, params }) {
    return await this.EmployeeRepository.store({ request, response, params })
  }
  async update({ request, response, params }) {
    return await this.EmployeeRepository.update({ request, response, params })
  }
}
module.exports = EmployeeController
