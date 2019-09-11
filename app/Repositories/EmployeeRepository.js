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
        const data = request.only(this.UserValidator.inputs)
        const validation = await validateAll(data, this.UserValidator.rules(), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            const user = await this.User.create({ username: data.username, email: data.email, password: data.password, profile_id: data.profile_id }, trx)
            user.save()
            const employee = await this.Model.create({ name: user.username, user_id: user.id }, trx)
            employee.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Funcionário ${user.username} cadastrado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidation(validation, response)
        }
    }
}
module.exports = EmployeeRepository