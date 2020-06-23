'use strict'
const TypeExam = use('App/Models/TypeExam')
const StoreTypeExam = use('App/Validators/StoreTypeExam')
const BaseController = use('App/Controllers/Http/BaseController')
const TypeExamRepository = use("App/Repositories/TypeExamRepository");
class TypeExamController extends BaseController {
  constructor() {
    super(TypeExam, StoreTypeExam)
    this.TypeExamRepository = new TypeExamRepository(TypeExam, StoreTypeExam);
  }
  async destroy({ request, response, params }) {
    return await this.TypeExamRepository.destroy({ request, response, params });
  }
}
module.exports = TypeExamController