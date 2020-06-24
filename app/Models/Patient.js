'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const PatientFilter = use('App/ModelFilters/PatientFilter')
class Patient extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', PatientFilter)
    }
    static get dates () {
        return super.dates.concat(['deleted_at'])
      }
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Patient
