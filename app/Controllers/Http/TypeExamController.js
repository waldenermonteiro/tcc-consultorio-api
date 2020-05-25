'use strict'
const TypeExam = use('App/Models/TypeExam')
const StoreTypeExam = use('App/Validators/StoreTypeExam')
const BaseController = use('App/Controllers/Http/BaseController')
class TypeExamController extends BaseController {
  constructor() {
    super(TypeExam, StoreTypeExam)
  }
}
module.exports = TypeExamController