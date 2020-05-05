'use strict'
const ResultExam = use('App/Models/ResultExam')
const StoreResultExam = use('App/Validators/StoreResultExam')
const BaseController = use('App/Controllers/Http/BaseController')
class ResultExamController extends BaseController {
  constructor() {
    super(ResultExam, StoreResultExam)
  }
}
module.exports = ResultExamController
