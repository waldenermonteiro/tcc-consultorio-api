'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Medicament extends Model {
    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/SoftDeletes')
    }
    static get dates() {
        return super.dates.concat(['deleted_at'])
    }
}

module.exports = Medicament
