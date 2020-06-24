'use strict'
const Validator = use("Validator");
const notExistsRule = use("App/Validators/Customs/NotExists");
Validator.extend("notExists", notExistsRule);
class StoreProfile {
  get name(){
    return 'Perfil'
  }
  get inputs(){
    return ['id','name']
  }
  rules (profileId) {
    profileId = profileId || 0
    return {
      id: 'notExists:users,profile_id',
      name: `required|unique:profiles,name,id,${profileId}|max:30`

    }
  }
  rulesDestroy () {
    return {
      id: 'notExists:users,profile_id',

    }
  }
  get messages () {
    return {
      'id.notExists': 'Este perfil está sendo utilizado, por favor, resolva as pendências.',
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe um perfil com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 30 caracteres, por favor, tente novamente.',
    }
  }
}

module.exports = StoreProfile
