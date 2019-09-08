'use strict'
const Employee = use('App/Models/Employee')
const StoreEmployee = use('App/Validators/StoreEmployee')
const BaseController = use('App/Controllers/Http/BaseController')
const EmployeeRepository = use('App/Repositories/EmployeeRepository')

class EmployeeController extends BaseController {
  constructor() {
    super(Employee, StoreEmployee)
    this.EmployeeRepository = new EmployeeRepository(Employee, StoreEmployee)
  }

}
module.exports = EmployeeController
