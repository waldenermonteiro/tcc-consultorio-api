'use strict'
const { validateAll } = use('Validator')
const BaseRepository = use('App/Repositories/BaseRepository')
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
}
module.exports = EmployeeRepository