'use strict'
const MedicalSchedule = use('App/Models/MedicalSchedule')
const StoreMedicalSchedule = use('App/Validators/StoreMedicalSchedule')
const BaseController = use('App/Controllers/Http/BaseController')
const MedicalScheduleRepository = use('App/Repositories/MedicalScheduleRepository')
class MedicalScheduleController extends BaseController {
  constructor() {
    super(MedicalSchedule, StoreMedicalSchedule)
    this.MedicalScheduleRepository = new MedicalScheduleRepository(MedicalSchedule, StoreMedicalSchedule)
  }
  async index({ request, response, params }) {
    return await this.MedicalScheduleRepository.index({ request, response, params })
  }
}
module.exports = MedicalScheduleController
