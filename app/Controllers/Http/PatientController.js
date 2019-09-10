'use strict'
const Patient = use('App/Models/Patient')
const StorePatient = use('App/Validators/StorePatient')
const BaseController = use('App/Controllers/Http/BaseController')
const PatientRepository = use('App/Repositories/PatientRepository')
class PatientController extends BaseController {
  constructor() {
    super(Patient, StorePatient)
    this.PatientRepository = new PatientRepository(Patient, StorePatient)
  }
}
module.exports = PatientController
