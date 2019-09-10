'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
class StorePatient {
  get name() {
    return 'Paciente'
  }
  get inputs() {
    return ['name', 'birth_date', 'address', 'city', 'state', 'sex', 'user_id']
  }
  rules(patientId) {
    patientId = patientId || 0
    return {
      name: `required|unique:patients,name,id,${patientId}|max:100`,
      birth_date: 'required|date',
      address: 'required',
      city: 'required',
      state: 'required',
      sex: 'required',
      user_id: 'required|exists:users,id'
    }
  }
  // get messages() {
  //   return {
  //     'name.required': 'O campo nome é obrigatório.',
  //     'name.unique': 'Já existe um paciente com esse nome, por favor, tente novamente.',
  //     'name.unique': 'O campo nome aceita até 100 caracteres, por favor, tente novamente.',
  //     'birth_date.required': 'O campo data de nascimento é obrigatório.',
  //     'birth_date.date': 'O campo data está em um formato inválido, por favor, tente novamente.',
  //     'address.required': 'O campo data de nascimento é obrigatório.',
  //     'sex.required': 'O campo data de nascimento é obrigatório.'
  //   }
  // }
}

module.exports = StorePatient
