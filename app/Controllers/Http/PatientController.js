'use strict'
const Patient = use('App/Models/Patient')
const StorePatient = use('App/Validators/StorePatient')
const BaseController = use('App/Controllers/Http/BaseController')
class PatientController extends BaseController {
  constructor() {
    super(Patient, StorePatient)
  }
}
module.exports = PatientController
