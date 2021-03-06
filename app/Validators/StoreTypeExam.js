'use strict'
const Validator = use("Validator");
const notExistsRule = use("App/Validators/Customs/NotExists");
Validator.extend("notExists", notExistsRule);
const updateUniqueCustomRule = use("App/Validators/Customs/UpdateUnique");
Validator.extend("updateUnique", updateUniqueCustomRule);
class StoreSpecialitie {
  get name(){
    return 'Tipo de Exame'
  }
  get inputs(){
    return ['name']
  }
  rules (typeExameId) {
    typeExameId = typeExameId || 0
    return {
      name: `required|updateUnique:type_exams,name,${typeExameId}|max:30`
    }
  }
  rulesDestroy () {
    return {
      id: 'notExists:request_exams,type_exam_id',

    }
  }
  get messages () {
    return {
      'id.notExists': 'Este tipo de exame está sendo utilizado, por favor, resolva as pendências.',
      'name.required': 'O campo nome é obrigatório.',
      'name.updateUnique': 'Já existe um tipo de exame com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 30 caracteres, por favor, tente novamente.',
    }
  }
}

module.exports = StoreSpecialitie
