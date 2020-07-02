'use strict'
const Validator = use("Validator");
const notExistsRule = use("App/Validators/Customs/NotExists");
Validator.extend("notExists", notExistsRule);
const updateUniqueCustomRule = use("App/Validators/Customs/UpdateUnique");
Validator.extend("updateUnique", updateUniqueCustomRule);
class StoreSpecialitie {
  get name(){
    return 'Especialidade'
  }
  get inputs(){
    return ['name']
  }
  rules (specialitieId) {
    specialitieId = specialitieId || 0
    return {
      name: `required|updateUnique:specialities,name,${specialitieId}|max:50`
    }
  }
  rulesDestroy () {
    return {
      id: 'notExists:employees,specialitie_id',

    }
  }
  get messages () {
    return {
      'id.notExists': 'Esta especialidade está sendo utilizada, por favor, resolva as pendências.',
      'name.required': 'O campo nome é obrigatório.',
      'name.updateUnique': 'Já existe uma especialidade com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 50 caracteres, por favor, tente novamente.',
    }
  }
}

module.exports = StoreSpecialitie
