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
            await this.verifyValidation(validation)
            const params = { auth, request, response, self: this }
            return await this.getUser(params)
        } catch (error) {
            return this.messagesValidation(validation, response)
        }
    }
    async getUser(params) {
        try {
            const user = await this.Model.findBy({ email: params.request.body.email })
            return await this.validateUser({ ...params, user: user })
        } catch (error) {
            return params.response.badRequest({ status: 400, errors: [{ message: `Email ou senha inválidos` }] })
        }
    }
    async validateUser(params) {
        const password = params.request.body.password
        const hashedPassword = params.user.password
        try {
            await this.verifyPassword(password, hashedPassword)
            return await this.userLogger(params)
        } catch (error) {
            return params.response.badRequest({ status: 400, errors: [{ message: `Email ou senha inválidos` }] })
        }
    }
    async userLogger(params) {
        let token = await params.auth.generate(params.user, true)
        return params.response.ok({
            status: 200,
            data: { user: params.user, token }
        })
    }
    async verifyValidation(validation) {
        if (validation.errorMessages !== null) throw 'Error'
    }
    async verifyPassword(password, hashedPassword) {
        const ifPasswordsEquals = await Hash.verify(password, hashedPassword)
        if (!ifPasswordsEquals) throw 'Error'
    }
    async store({ auth, request, response }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        try {
            const user = await this.Model.create(data)
            const token = await auth.generate(user)
            return response.ok({
                status: 200,
                data: { user, token },
                message: `${this.Validator.name} ${user.email} cadastrado com sucesso`
            })
        } catch (error) {
            return this.messagesValidation(validation, response)
        }
    }
}
module.exports = UserRepository
