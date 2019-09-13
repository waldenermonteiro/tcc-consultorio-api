'use strict'
const Patient = use('App/Models/Patient')
const User = use('App/Models/User')
const StorePatient = use('App/Validators/StorePatient')
const StoreUser = use('App/Validators/StoreUser')
const BaseController = use('App/Controllers/Http/BaseController')
const PatientRepository = use('App/Repositories/PatientRepository')
class PatientController extends BaseController {
  constructor() {
    super(Patient, StorePatient)
    this.PatientRepository = new PatientRepository(Patient, User, StorePatient, StoreUser)
  }
  async index({ request, response }) {
    return await this.PatientRepository.index({ request, response })
  }
  async store({ request, response }) {
    return await this.PatientRepository.store({ request, response })
  }
  async update({ request, response, params }) {
    return await this.PatientRepository.update({ request, response, params })
  }
}
module.exports = PatientController
