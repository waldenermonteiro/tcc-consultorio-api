'use strict'
const ResultExam = use('App/Models/ResultExam')
const RequestExam = use('App/Models/RequestExam')
const StoreResultExam = use('App/Validators/StoreResultExam')
const BaseController = use('App/Controllers/Http/BaseController')
const ResultExamRepository = use('App/Repositories/ResultExamRepository')
class ResultExamController extends BaseController {
  constructor() {
    super(ResultExam, StoreResultExam)
    this.ResultExamRepository = new ResultExamRepository(ResultExam, RequestExam, StoreResultExam)
  }
  async index({ request, response, params }) {
    return await this.ResultExamRepository.index({ request, response, params })
  }
  async store({ request, response }) {
    return await this.ResultExamRepository.store({ request, response })
  }
}
module.exports = ResultExamController
