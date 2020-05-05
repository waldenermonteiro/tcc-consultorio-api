'use strict'
const RequestExam = use('App/Models/RequestExam')
const StoreRequestExam = use('App/Validators/StoreRequestExam')
const BaseController = use('App/Controllers/Http/BaseController')
class RequestExamController extends BaseController {
  constructor() {
    super(RequestExam, StoreRequestExam)
  }
}
module.exports = RequestExamController
