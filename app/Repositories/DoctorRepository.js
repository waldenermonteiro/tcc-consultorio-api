'use strict'
const { validateAll } = use('Validator')
const Database = use('Database')
const BaseRepository = use('App/Repositories/BaseRepository')
class EDoctorepository extends BaseRepository {
    constructor(Model, User, Validator, UserValidator) {
        super(Model, Validator)
        this.Model = Model
        this.User = User
        this.Validator = new Validator()
        this.UserValidator = new UserValidator()
    }
}

module.exports = DoctorRepository