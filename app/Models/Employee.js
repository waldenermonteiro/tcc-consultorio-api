'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const EmployeeFilter = use('App/ModelFilters/EmployeeFilter')
class Employee extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', EmployeeFilter)
    }
    static get dates () {
        return super.dates.concat(['deleted_at'])
      }
    specialitie() {
        return this.belongsTo('App/Models/Specialitie')
    }
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Employee
