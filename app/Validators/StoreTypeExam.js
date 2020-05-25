'use strict'
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
      name: `required|unique:type_exams,name,id,${typeExameId}|max:30`
    }
  }
  get messages () {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe um tipo de exame com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 30 caracteres, por favor, tente novamente.',
    }
  }
}

module.exports = StoreSpecialitie
