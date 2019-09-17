'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Doctor extends Model {
    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/SoftDeletes')
    }
    static get dates() {
        return super.dates.concat(['deleted_at'])
    }
    specialitie() {
        return this.belongsTo('App/Models/Specialitie')
    }
    user() {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Doctor
