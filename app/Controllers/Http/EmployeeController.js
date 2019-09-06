'use strict'

const Employee = use('App/Models/Employee')
const StoreEmployee = use('App/Validators/StoreEmployee')
const BaseController = use('App/Controllers/Http/BaseController')
class EmployeeController extends BaseController {
  constructor() {
    super(Employee, StoreEmployee)
  }
}
module.exports = EmployeeController
