'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const ProfileFilter = use('App/ModelFilters/ProfileFilter')
class Profile extends Model {
    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', ProfileFilter)
        
    }
    static get dates () {
        return super.dates.concat(['deleted_at'])
      }
}

module.exports = Profile
