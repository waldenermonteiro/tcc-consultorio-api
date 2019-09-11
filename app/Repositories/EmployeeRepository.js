'use strict'
const { validateAll } = use('Validator')
const BaseRepository = use('App/Repositories/BaseRepository')
const Database = use('Database')
class EmployeeRepository extends BaseRepository {
    constructor(Model, Validator) {
        super(Model, Validator)
        this.Model = Model
        this.Validator = new Validator()
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
        try {
            await Database.transaction(async (trx) => {
                await trx.insert({ username: data.name, email: data.email, password: data.password, profile_id: data.profile_id }).into('users')
                const user = await trx.from('users').where({ email: data.email }).first()
                await trx.insert({ name: user.username, user_id: user.id }).into('employees')
            })
            return response.ok({
                status: 200,
                message: 'cadastrado com sucesso'
            })
        } catch (error) {

        }
    }
}
module.exports = EmployeeRepository