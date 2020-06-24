"use strict";
const Medicament = use("App/Models/Medicament");
const StoreMedicament = use("App/Validators/StoreMedicament");
const BaseController = use("App/Controllers/Http/BaseController");
const MedicamentRepository = use("App/Repositories/MedicamentRepository");
class MedicamentController extends BaseController {
  constructor() {
    super(Medicament, StoreMedicament);
    this.MedicamentRepository = new MedicamentRepository(Medicament, StoreMedicament);
  }
  async index({ request, response }) {
    return await this.MedicamentRepository.index({ request, response });
  }
}
module.exports = MedicamentController;
