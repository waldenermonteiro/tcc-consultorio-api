'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const SpecialitieFilter = use('App/ModelFilters/SpecialitieFilter')
class Specialitie extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', SpecialitieFilter)
    }
    static get dates () {
        return super.dates.concat(['deleted_at'])
      }
}

module.exports = Specialitie
