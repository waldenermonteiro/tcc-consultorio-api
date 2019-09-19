'use strict'
const Medicament = use('App/Models/Medicament')
const StoreMedicament = use('App/Validators/StoreMedicament')
const BaseController = use('App/Controllers/Http/BaseController')
class MedicamentController extends BaseController {
  constructor() {
    super(Medicament, StoreMedicament)
  }
}
module.exports = MedicamentController
