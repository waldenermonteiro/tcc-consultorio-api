'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const MedicalScheduleFilter = use('App/ModelFilters/MedicalScheduleFilter')
class MedicalSchedule extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', MedicalScheduleFilter)
    }
    static get dates() {
        return super.dates.concat(['deleted_at'])
    }
    pacient() {
        return this.belongsTo('App/Models/Pacient')
    }
    prescriptionMedicament() {
        return this.belongsTo('App/Models/PrescriptionMedicament')
    }
    employee() {
        return this.belongsTo('App/Models/Employee')
    }

}

module.exports = MedicalSchedule
