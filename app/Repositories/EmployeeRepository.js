'use strict'
const { validateAll } = use('Validator')
const Database = use('Database')
const BaseRepository = use('App/Repositories/BaseRepository')
class EmployeeRepository extends BaseRepository {
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
    async indexOnlyTrashed({ request, response }) {
        const items = await this.Model.query().withTrashed().with('user').fetch()
        return response.ok({
            status: 200,
            data: items,
        })
    }
    async store({ request, response, params }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages)
        const dataUser = request.only(this.UserValidator.inputs)
        const validationUser = await validateAll(dataUser, this.UserValidator.rules(), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            const user = await this.User.create({ ...dataUser}, trx)
            user.save()
            const employee = await this.Model.create({ ...data, user_id: user.id }, trx)
            employee.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Funcionário(a) ${employee.name} cadastrado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validation, validationUser], response)
        }
    }
    async update({ request, response, params }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages)
        const dataUser = request.only(this.UserValidator.inputsUpdate)
        const validationUser = await validateAll(dataUser, this.UserValidator.rulesUpdate(params.user_id), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            const employee = await this.Model.findByOrFail('id', params.id)
            await employee.merge(data, trx)
            await employee.save()
            const user = await this.User.findByOrFail('id', employee.user_id)
            await user.merge(dataUser, trx)
            await user.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Funcionário(a) ${employee.name} atualizado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validation, validationUser], response)
        }
    }
}
module.exports = EmployeeRepository