'use strict'
const MedicalSchedule = use('App/Models/MedicalSchedule')
const RequestExam = use('App/Models/RequestExam')
const StoreMedicalSchedule = use('App/Validators/StoreMedicalSchedule')
const StoreRequestExam = use('App/Validators/StoreRequestExam')
const BaseController = use('App/Controllers/Http/BaseController')
const MedicalScheduleRepository = use('App/Repositories/MedicalScheduleRepository')
class MedicalScheduleController extends BaseController {
  constructor() {
    super(MedicalSchedule, StoreMedicalSchedule)
    this.MedicalScheduleRepository = new MedicalScheduleRepository(MedicalSchedule, RequestExam, StoreMedicalSchedule, StoreRequestExam)
  }
  async index({ request, response, params }) {
    return await this.MedicalScheduleRepository.index({ request, response, params })
  }
  async alterStatus({ request, response, params }) {
    return await this.MedicalScheduleRepository.alterStatus({ request, response, params })
  }
  async finishConsult({ request, response, params }) {
    return await this.MedicalScheduleRepository.finishConsult({ request, response, params })
  }
}
module.exports = MedicalScheduleController
