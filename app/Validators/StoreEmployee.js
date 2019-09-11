'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)

class StoreEmployees {
  get name() {
    return 'Funcionário'
  }
  get inputs() {
    return ['name', 'email', 'password', 'profile_id']
  }
  /*   rules (employeeId) {
      employeeId = employeeId || 0
      return {
        name: `required|unique:employees,name,id,${employeeId}`,
        user_id: `required|exists:users,id` 
      }
    }
    get messages () {
      return {
        'name.required': 'O campo nome é obrigatório.',
        'name.unique': 'Já existe um funcionário com esse nome, por favor, escolha outro.',
        'user_id.required' : 'O campo usuário é obrigatório',
        'user_id.exists' : 'Usuário inexistente, por favor, escolha outro.'
      }
    } */
}

module.exports = StoreEmployees
