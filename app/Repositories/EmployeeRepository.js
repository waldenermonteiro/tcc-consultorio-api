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
    async store({ request, response }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        const dataUser = request.only(this.UserValidator.inputs)
        const validationUser = await validateAll(data, this.UserValidator.rules(), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            const user = await this.User.create({ email: dataUser.email, password: dataUser.password, profile_id: dataUser.profile_id }, trx)
            user.save()
            const employee = await this.Model.create({ name: data.name, user_id: user.id }, trx)
            employee.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Funcionário(a) ${employee.name} cadastrado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validationUser, validation], response)
        }
    }
}
module.exports = EmployeeRepository