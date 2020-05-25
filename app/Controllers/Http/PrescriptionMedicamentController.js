'use strict'
const PrescriptionMedicament = use('App/Models/PrescriptionMedicament')
const StorePrescriptionMedicament = use('App/Validators/StorePrescriptionMedicament')
const BaseController = use('App/Controllers/Http/BaseController')
class PrescriptionMedicamentController extends BaseController {
  constructor() {
    super(PrescriptionMedicament, StorePrescriptionMedicament)
  }
}
module.exports = PrescriptionMedicamentController
