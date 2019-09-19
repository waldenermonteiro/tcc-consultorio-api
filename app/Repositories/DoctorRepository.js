'use strict'
const { validateAll } = use('Validator')
const Database = use('Database')
const BaseRepository = use('App/Repositories/BaseRepository')
class DoctorRepository extends BaseRepository {
    constructor(Model, User, Validator, UserValidator) {
        super(Model, Validator)
        this.Model = Model
        this.User = User
        this.Validator = new Validator()
        this.UserValidator = new UserValidator()
    }
    async index({ response }) {
        const items = await this.Model.query().with('user').with('specialitie').fetch()
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
            const user = await this.User.create({ ...dataUser }, trx)
            user.save()
            const doctor = await this.Model.create({ ...data, user_id: user.id }, trx)
            doctor.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Doutor(a) ${doctor.name} cadastrado(a) com sucesso`
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
            const doctor = await this.Model.findByOrFail('id', params.id)
            await doctor.merge(data, trx)
            await doctor.save()
            const user = await this.User.findByOrFail('id', doctor.user_id)
            await user.merge(dataUser, trx)
            await user.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Doutor(a) ${doctor.name} atualizado(a) com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validationUser, validation], response)
        }
    }
}

module.exports = DoctorRepository