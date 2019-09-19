'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
class StorePatient {
  get name() {
    return 'Paciente'
  }
  get inputs() {
    return ['name', 'birth_date', 'rg', 'cpf', 'address', 'city', 'state', 'sex']
  }
  rules(patientId) {
    patientId = patientId || 0
    return {
      name: `required|unique:patients,name,id,${patientId}|max:100`,
      birth_date: 'required|date',
      rg: `required|unique:patients,rg,id,${patientId}|max:8`,
      cpf: `unique:patients,cpf,id,${patientId}|max:11`,
      address: 'required|max:250',
      city: 'required|max:50',
      state: 'required|max:30',
      sex: 'required'
    }
  }
  get messages() {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe um paciente com esse nome, por favor, tente novamente.',
      'name.max': 'O campo nome aceita até 100 caracteres, por favor, tente novamente.',
      'birth_date.required': 'O campo data de nascimento é obrigatório.',
      'birth_date.date': 'O campo data está em um formato inválido, por favor, tente novamente.',
      'rg.required': 'O campo rg é obrigatório.',
      'rg.unique': 'Já existe um paciente com esse rg, por favor, tente novamente.',
      'rg.max': 'O campo rg aceita até 8 caracteres, por favor, tente novamente.',
      'cpf.unique': 'Já existe um paciente com esse cpf, por favor, tente novamente.',
      'cpf.max': 'O campo cpf aceita até 11 caracteres, por favor, tente novamente.',
      'address.required': 'O campo data de nascimento é obrigatório.',
      'address.max': 'O campo endereço aceita até 250 caracteres, por favor, tente novamente.',
      'city.required': 'O campo cidade é obrigatório.',
      'city.max': 'O campo cidade aceita até 50 caracteres, por favor, tente novamente.',
      'state.required': 'O campo estado é obrigatório.',
      'state.max': 'O campo estado aceita até 30 caracteres, por favor, tente novamente.',
      'sex.required': 'O campo data de nascimento é obrigatório.'
    }
  }
}

module.exports = StorePatient
