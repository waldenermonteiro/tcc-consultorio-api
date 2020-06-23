'use strict'
const Specialitie = use('App/Models/Specialitie')
const StoreSpecialitie = use('App/Validators/StoreSpecialitie')
const BaseController = use('App/Controllers/Http/BaseController')
const SpecialitieRepository = use("App/Repositories/SpecialitieRepository");
class SpecialitieController extends BaseController {
  constructor() {
    super(Specialitie, StoreSpecialitie)
    this.SpecialitieRepository = new SpecialitieRepository(Specialitie, StoreSpecialitie);
  }
  async destroy({ request, response, params }) {
    return await this.SpecialitieRepository.destroy({ request, response, params });
  }
}
module.exports = SpecialitieController
