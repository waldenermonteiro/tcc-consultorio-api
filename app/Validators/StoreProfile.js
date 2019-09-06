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
      name: `required|unique:profiles,name,id,${profileId}`
    }
  }
  get messages () {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe um perfil com esse nome, por favor, escolha outro.',
    }
  }
}

module.exports = StoreProfile
