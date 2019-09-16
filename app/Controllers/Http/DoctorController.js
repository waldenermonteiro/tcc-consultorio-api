'use strict'
const Doctor = use('App/Models/Doctor')
const User = use('App/Models/User')
const StoreDoctor = use('App/Validators/StoreDoctor')
const StoreUser = use('App/Validators/StoreUser')
const BaseController = use('App/Controllers/Http/BaseController')
const DoctorRepository = use('App/Repositories/DoctorRepository')
class DoctorController extends BaseController {
  constructor() {
    super(Doctor, StoreDoctor)
    this.DoctorRepository = new DoctorRepository(Doctor, User, StoreDoctor, StoreUser)
  }
  async index({ request, response }) {
    return await this.DoctorRepository.index({ request, response })
  }
  async store({ request, response }) {
    return await this.DoctorRepository.store({ request, response })
  }
  async update({ request, response, params }) {
    return await this.DoctorRepository.update({ request, response, params })
  }
}
module.exports = DoctorController
