'use strict'
const { validateAll } = use('Validator')
const BaseRepository = use('App/Repositories/BaseRepository')
class PatientRepository extends BaseRepository {
    constructor(Model, Validator) {
        super(Model, Validator)
        this.Model = Model
        this.Validator = new Validator()
    }
}
module.exports = PatientRepository
