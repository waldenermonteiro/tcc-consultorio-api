'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const ResultExamFilter = use('App/ModelFilters/ResultExamFilter')
class ResultExam extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', ResultExamFilter)
    }
    static get dates() {
        return super.dates.concat(['deleted_at'])
    }
    requestExam() {
        return this.belongsTo('App/Models/RequestExam')
    }
    medicalSchedule() {
        return this.belongsTo('App/Models/MedicalSchedule')
    }

}

module.exports = ResultExam
