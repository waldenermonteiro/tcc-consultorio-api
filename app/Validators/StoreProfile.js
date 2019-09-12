'use strict'
class StoreProfile {
  get name(){
    return 'Perfil'
  }
  get inputs(){
    return ['name']
  }
  rules (profileId) {
    profileId = profileId || 0
    return {
      name: `required|unique:profiles,name,id,${profileId}|max:30`
    }
  }
  get messages () {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe um perfil com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 30 caracteres, por favor, tente novamente.',
    }
  }
}

module.exports = StoreProfile
