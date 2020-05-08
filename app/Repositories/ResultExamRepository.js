'use strict'
const BaseRepository = use('App/Repositories/BaseRepository')
class ResultExamRepository extends BaseRepository {
    constructor(Model, Validator) {
        super(Model, Validator)
        this.Model = Model
        this.Validator = new Validator()
    }
    async index({ request, response, params }) {
        try {
            const items = await this.Model.query().with('requestExam').fetch()
            return response.ok({
                status: 200,
                data: items
            })
        } catch (error) {
            return this.messageNotExistItem(response)
        }
    }

}
module.exports = ResultExamRepository