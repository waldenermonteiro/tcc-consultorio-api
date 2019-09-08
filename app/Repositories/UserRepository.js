'use strict'
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')
const { validateAll } = use('Validator')
const BaseRepository = use('App/Repositories/BaseRepository')
class UserRepository extends BaseRepository {
    constructor(Model, Validator) {
        super(Model, Validator)
        this.Model = Model
        this.Validator = new Validator()
    }
    async login({ auth, request, response }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rulesLogin, this.Validator.messages)
        try {
            const params = { auth, request, response, self: this }
            return await this.getUser(params, this.validateUser)
        } catch (error) {
            return this.messagesValidation(validation, response)
        }
    }
    async getUser(params, callback) {
        try {
            const user = await this.Model.findBy({ email: params.request.body.email })
            return await callback({ ...params, user: user })
        } catch (error) {
            return params.response.badRequest({ status: 400, errors: [{ message: `Email ou senha inválidos` }] })
        }
    }
    async validateUser(params) {
        return await params.self.verifyPassword(params, params.user.password, params.self.userLogger)
    }
    async verifyPassword(params, hashedPassword, callback) {
        const isSame = await Hash.verify(params.request.body.password, hashedPassword)
        if (isSame) {
            return callback(params)
        }
        return params.response.badRequest({ status: 400, errors: [{ message: `Email ou senha inválidos` }] })
    }
    async userLogger(params) {
        let token = await params.auth.generate(params.user, true)
        return params.response.ok({
            status: 200,
            data: { user: params.user, token }
        })
    }
    async store({ request, response }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        try {
            const user = await this.Model.create(data)
            const token = await auth.generate(user)
            return response.ok({
                status: 200,
                data: { user, token },
                message: `${this.Validator.name} ${item.username} cadastrado com sucesso`
            })
        } catch (error) {
            return this.messagesValidation(validation, response)
        }
    }
}
module.exports = UserRepository
