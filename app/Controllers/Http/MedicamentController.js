'use strict'
const Medicament = use('App/Models/Medicament')
const Medicament = use('App/Validators/Medicament')
const BaseController = use('App/Controllers/Http/BaseController')
class Medicament extends BaseController {
  constructor() {
    super(Medicament, Medicament)
  }
}
module.exports = Medicament
