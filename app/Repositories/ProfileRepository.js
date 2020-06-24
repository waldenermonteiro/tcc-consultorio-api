"use strict";
const BaseRepository = use("App/Repositories/BaseRepository");
const { validateAll } = use('Validator')
class ProfileRepository extends BaseRepository {
  constructor(Model, Validator) {
    super(Model, Validator);
    this.Model = Model;
    this.Validator = new Validator();
  }
  async destroy({ request, response, params }) {
    const data = { id: params.id }
    const validation = await validateAll(data, this.Validator.rulesDestroy(params.id), this.Validator.messages)
    try {
        if(validation.fails()) throw Error()
        const item = await this.Model.findBy('id', params.id)
        await item.delete()
        return await response.ok({
            status: 200,
            message:  `${this.Validator.name} excluído(a) com sucesso`
        })
    } catch (error) {
        // return this.messageNotExistItem(response)
        return this.messagesValidation(validation, response)
    }
}
}
module.exports = ProfileRepository
