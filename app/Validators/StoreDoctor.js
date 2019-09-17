'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
class StoreDoctor {
  get name() {
    return 'Doutor'
  }
  get inputs() {
    return ['name', 'specialitie_id']
  }
  rules(doctorId) {
    doctorId = doctorId || 0
    return {
      name: `required|unique:doctors,name,id,${doctorId}|max:100`,
      specialitie_id: 'required|exists:specialities,id'
    }
  }
  get messages() {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe um doutor com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 250 caracteres, por favor, tente novamente.',
      'specialitie_id.required': 'O campo especialidade é obrigatório.'
    }
  }
}

module.exports = StoreDoctor
