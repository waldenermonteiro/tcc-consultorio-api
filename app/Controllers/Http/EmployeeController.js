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
  async store({ auth, request, response }) {
    return await this.EmployeeRepository.store({ auth, request, response })
  }
}
module.exports = EmployeeController
