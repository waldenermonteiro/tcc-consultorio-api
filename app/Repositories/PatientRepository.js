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
    async index({ request, response }) {
        const items = await this.Model.query().with('user').fetch()
        return response.ok({
            status: 200,
            data: items
        })
    }
    async store({ request, response }) {
        const data = request.only(this.Validator.inputs)
        const dataUser = request.only(this.UserValidator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        const validationUser = await validateAll(dataUser, this.UserValidator.rules(), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            const user = await this.User.create({ email: dataUser.email, password: dataUser.password, profile_id: dataUser.profile_id }, trx)
            user.save()
            const patient = await this.Model.create({ name: data.name, birth_date: data.birth_date, address: data.address, city: data.city, state: data.state, sex: data.sex, user_id: user.id }, trx)
            patient.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Paciente ${patient.name} cadastrado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validationUser, validation], response)
        }
    }
    async update({ request, response, params }) {
        const data = request.only(this.Validator.inputs)
        const dataUser = request.only(this.UserValidator.inputsUpdate)
        const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages)
        const validationUser = await validateAll(dataUser, this.UserValidator.rulesUpdate(params.user_id), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            const patient = await this.Model.findByOrFail('id', params.id)
            await patient.merge(data, trx)
            await patient.save()
            const user = await this.User.findByOrFail('id', patient.user_id)
            await user.merge(dataUser, trx)
            await user.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Paciente ${patient.name} atualiado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validationUser, validation], response)
        }
    }
}
module.exports = PatientRepository
