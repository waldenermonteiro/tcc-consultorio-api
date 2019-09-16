'use strict'
const Specialitie = use('App/Models/Specialitie')
const StoreSpecialitie = use('App/Validators/StoreSpecialitie')
const BaseController = use('App/Controllers/Http/BaseController')
class SpecialitieController extends BaseController {
  constructor() {
    super(Specialitie, StoreSpecialitie)
  }
}
module.exports = SpecialitieController
