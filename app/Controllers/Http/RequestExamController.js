'use strict'
const RequestExam = use('App/Models/RequestExam')
const StoreRequestExam = use('App/Validators/StoreRequestExam')
const BaseController = use('App/Controllers/Http/BaseController')
const RequestExamRepository = use('App/Repositories/RequestExamRepository')
class RequestExamController extends BaseController {
  constructor() {
    super(RequestExam, StoreRequestExam)
    this.RequestExamRepository = new RequestExamRepository(RequestExam, StoreRequestExam)
  }
  async index({ request, response, params }) {
    return await this.RequestExamRepository.index({ request, response, params })
  }
  async alterStatus({ request, response, params }) {
    return await this.RequestExamRepository.alterStatus({ request, response, params })
  }
}
module.exports = RequestExamController
