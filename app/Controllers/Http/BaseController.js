'use strict'
const BaseRepository = use('App/Repositories/BaseRepository')
class BaseController {
    constructor(Model, Validator) {
        this.Model = Model
        this.BaseRepository = new BaseRepository(Model, Validator)
    }
    async index({ request, response }) {
        return await this.BaseRepository.index({ response })
    }
    async show({ request, response, params }) {
        return await this.BaseRepository.show({ response, params })
    }
    async store({ request, response }) {
        return await this.BaseRepository.store({ request, response })
    }
    async update({ request, response, params, }) {
        return await this.BaseRepository.update({ request, response, params })
    }
    async destroy({ request, response, params }) {
        return await this.BaseRepository.destroy({ request, response, params })
    }
}
module.exports = BaseController
