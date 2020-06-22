"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const TypeExamFilter = use("App/ModelFilters/TypeExamFilter");
class TypeExam extends Model {
  static boot() {
    super.boot();
    // this.addTrait('@provider:Lucid/SoftDeletes')
    this.addTrait("@provider:Filterable", TypeExamFilter);
  }
  // static get dates () {
  //   return super.dates.concat(['deleted_at'])
  // }
}

module.exports = TypeExam;
