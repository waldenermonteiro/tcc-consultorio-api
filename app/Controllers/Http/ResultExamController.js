'use strict'
const ResultExam = use('App/Models/ResultExam')
const StoreResultExam = use('App/Validators/StoreResultExam')
const BaseController = use('App/Controllers/Http/BaseController')
const ResultExamRepository = use('App/Repositories/ResultExamRepository')
class ResultExamController extends BaseController {
  constructor() {
    super(ResultExam, StoreResultExam)
    this.ResultExamRepository = new ResultExamRepository(ResultExam, StoreResultExam)
  }
  async index({ request, response, params }) {
    return await this.ResultExamRepository.index({ request, response, params })
  }
}
module.exports = ResultExamController
