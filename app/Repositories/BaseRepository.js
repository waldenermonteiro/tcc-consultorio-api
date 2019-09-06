'use strict'
const { validateAll } = use('Validator')
class BaseRepository {
    constructor(Model, Validator) {
        this.Model = Model
        this.Validator = new Validator()
    }
    async list({ request, response }) {
        const items = await this.Model.withTrashed().fetch()
        return response.ok({
            status: 200,
            data: items
        })
    }
    async getBydId({ request, response, params }) {
        try {
            const item = await this.Model.findByOrFail('id', params.id)
            return response.ok({
                status: 200,
                data: item
            })
        } catch (error) {
            return this.messageNotExistItem(response)
        }
    }
    async create({ request, response }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        try {
            const item = await this.Model.create(data)
            return response.ok({
                status: 200,
                data: item,
                message: `${this.Validator.name} ${item.name} cadastrado com sucesso`
            })
        } catch (error) {
            return this.messagesValidation(validation, response)
        }
    }
    async update({ request, response, params }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages)
        try {
            const item = await this.Model.findByOrFail('id', params.id)
            await item.merge(data)
            await item.save()
            return response.ok({
                status: 200,
                data: item,
                message: `${this.Validator.name} ${item.name} atualizado com sucesso`
            })
        } catch (error) {
            return this.messagesValidation(validation, response)
        }
    }
    async remove({ request, response, params }) {
        try {
            const item = await this.Model.findBy('id', params.id)
            return await item.delete()
        } catch (error) {
            return this.messageNotExistItem(response)
        }
    }
    messageNotExistItem(response) {
        return response.badRequest({ status: 400, errors: [{ message: `${this.Validator.name} não encontrado(a)` }] })
    }
    messagesValidation(validation, response) {
        return response.badRequest({
            status: 400,
            errors: validation.messages()
        })
    }
}
module.exports = BaseRepository
