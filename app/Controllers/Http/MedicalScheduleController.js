'use strict'
const MedicalSchedule = use('App/Models/MedicalSchedule')
const StoreMedicalSchedule = use('App/Validators/StoreMedicalSchedule')
const BaseController = use('App/Controllers/Http/BaseController')
class MedicalScheduleController extends BaseController {
  constructor() {
    super(MedicalSchedule, StoreMedicalSchedule)
  }
}
module.exports = MedicalScheduleController
