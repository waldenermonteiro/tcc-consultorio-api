'use strict'
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
      name: `required|unique:specialities,name,id,${specialitieId}|max:50`
    }
  }
  get messages () {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe uma especialidade com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 50 caracteres, por favor, tente novamente.',
    }
  }
}

module.exports = StoreSpecialitie
