'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MedicalSchedule extends Model {
    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/SoftDeletes')
    }
    static get dates() {
        return super.dates.concat(['deleted_at'])
    }
    pacient() {
        return this.belongsTo('App/Models/Pacient')
    }
    prescriptionMedicament() {
        return this.belongsTo('App/Models/prescriptionMedicament')
    }

}

module.exports = MedicalSchedule
