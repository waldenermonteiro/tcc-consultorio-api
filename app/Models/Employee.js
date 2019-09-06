'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {
    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/SoftDeletes')
    }
    profile () {
        return this.belongsTo('App/Models/Profile')
      }
}

module.exports = Employee
