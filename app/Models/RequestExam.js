'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const RequestExamFilter = use('App/ModelFilters/RequestExamFilter')
class RequestExam extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', RequestExamFilter)
    }
    static get dates() {
        return super.dates.concat(['deleted_at'])
    }
    typeExam() {
        return this.belongsTo('App/Models/TypeExam')
    }
    medicalSchedule() {
        return this.belongsTo('App/Models/MedicalSchedule')
    }

}

module.exports = RequestExam
