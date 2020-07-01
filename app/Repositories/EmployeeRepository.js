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
        try {
            const requestParams = request.all();
            let items = await this.Model.query().filter(request.all()).with('user.profile').with('specialitie').fetch()
            if (requestParams.profile_id) {
                items = items.toJSON().filter((item) => item.user.profile_id === parseInt(requestParams.profile_id));
              }
            return response.ok({
                status: 200,
                data: items
            })
          } catch (error) {
            return this.messageNotExistItem(response);
          }
    }
    async indexOnlyTrashed({ request, response }) {
        const items = await this.Model.query().withTrashed().with('user').fetch()
        return response.ok({
            status: 200,
            data: items,
        })
    }
    async store({ request, response, params }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages)
        const dataUser = request.only(this.UserValidator.inputs)
        const validationUser = await validateAll(dataUser, this.UserValidator.rules(), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            if (validation.fails()) throw Error();
            const user = await this.User.create({ ...dataUser}, trx)
            user.save()
            const employee = await this.Model.create({ ...data, user_id: user.id }, trx)
            employee.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Funcionário(a) ${employee.name} cadastrado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validation, validationUser], response)
        }
    }
    async update({ request, response, params }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages)
        const dataUser = request.only(this.UserValidator.inputsUpdate)
        const validationUser = await validateAll(dataUser, this.UserValidator.rulesUpdate(data.user_id), this.UserValidator.messages)
        const trx = await Database.beginTransaction()
        try {
            if (validation.fails()) throw Error();
            const employee = await this.Model.findByOrFail('id', params.id)
            await employee.merge(data, trx)
            await employee.save()
            const user = await this.User.findByOrFail('id', employee.user_id)
            await user.merge(dataUser, trx)
            await user.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Funcionário(a) ${employee.name} atualizado com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return this.messagesValidations([validation, validationUser], response)
        }
    }
    async destroy({ request, response, params }) {
        const trx = await Database.beginTransaction()
        try {
            const employee = await this.Model.findByOrFail('id', params.id)
            await employee.delete(trx)
            await employee.save()
            const user = await this.User.findByOrFail('id', employee.user_id)
            await user.delete(trx)
            await user.save()
            await trx.commit()
            return response.ok({
                status: 200,
                message: `Funcionário(a) ${employee.name} excluído com sucesso`
            })
        } catch (error) {
            await trx.rollback()
            return "Não foi possível realizar a ação, por favor, tente mais tarde"
        }
    }
}
module.exports = EmployeeRepository