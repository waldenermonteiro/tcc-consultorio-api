'use strict'
const { validateAll } = use('Validator')
const Database = use('Database')
const BaseRepository = use('App/Repositories/BaseRepository')
class PatientRepository extends BaseRepository {
    constructor(Model, User, Validator, UserValidator) {
        super(Model, Validator)
        this.Model = Model
        this.User = User
        this.Validator = new Validator()
        this.UserValidator = new UserValidator()
    }
    async store({ request, response }) {
        const data = request.only(this.Validator.inputs)
        const dataUser = request.only(this.UserValidator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        const validationUser = await validateAll(dataUser, this.UserValidator.rules(), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            const user = await this.User.create({ username: dataUser.username, email: dataUser.email, password: dataUser.password, profile_id: dataUser.profile_id }, trx)
            user.save()
            const patient = await this.Model.create({ name: user.username, birth_date: data.birth_date, address: data.address, city: data.city, state: data.state, sex: data.sex, user_id: user.id }, trx)
            patient.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Paciente ${user.username} cadastrado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validationUser, validation], response)
        }
    }
}
module.exports = PatientRepository
