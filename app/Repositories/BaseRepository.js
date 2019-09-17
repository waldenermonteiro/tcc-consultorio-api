'use strict'
const { validateAll } = use('Validator')
class BaseRepository {
    constructor(Model, Validator) {
        this.Model = Model
        this.Validator = new Validator()
    }
    async index({ request, response }) {
        const items = await this.Model.query().fetch()
        return response.ok({
            status: 200,
            data: items
        })
    }
    async indexOnlyTrashed({ request, response }) {
        const items = await this.Model.query().withTrashed().fetch()
        return response.ok({
            status: 200,
            data: items,
        })
    }
    async show({ request, response, params }) {
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
    async store({ request, response }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        try {
            const item = await this.Model.create(data)
            return response.ok({
                status: 200,
                data: item,
                message: `${this.Validator.name} ${item.name} cadastrado(a) com sucesso`
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
                message: `${this.Validator.name} ${item.name} atualizado(a) com sucesso`
            })
        } catch (error) {
            return this.messagesValidation(validation, response)
        }
    }
    async destroy({ request, response, params }) {
        try {
            const item = await this.Model.findBy('id', params.id)
            await item.delete()
            return await response.ok({
                status: 200,
                message:  `${this.Validator.name} excluído(a) com sucesso`
            })
        } catch (error) {
            return this.messageNotExistItem(response)
        }
    }
    async messageNotExistItem(response) {
        return await response.badRequest({ status: 400, errors: [{ message: `${this.Validator.name} não encontrado(a)` }] })
    }
    async messagesValidation(validation, response) {
        return await response.badRequest({
            status: 400,
            errors: validation.messages()
        })
    }
    async messagesValidations(validations, response) {
        const errorsMessages = []
        validations.map( validation => {
            const arrayMessages = validation.messages() || []
            arrayMessages.map(message => {
                errorsMessages.push(message)
            })
        })
        return await response.badRequest({
            status: 400,
            errors: errorsMessages
        })
    }
}
module.exports = BaseRepository
