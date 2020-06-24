'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const MedicamentFilter = use('App/ModelFilters/MedicamentFilter')
class Medicament extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', MedicamentFilter)
    }
    static get dates() {
        return super.dates.concat(['deleted_at'])
    }
}

module.exports = Medicament
