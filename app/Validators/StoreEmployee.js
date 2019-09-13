'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)

class StoreEmployees {
  get name() {
    return 'Funcionário'
  }
  get inputs() {
    return ['name']
  }
     rules (employeeId) {
      employeeId = employeeId || 0
      return {
        name: `required|unique:employees,name,id,${employeeId}|max:250`
      }
    }
    get messages () {
      return {
        'name.required': 'O campo nome é obrigatório.',
        'name.unique': 'Já existe um funcionário com esse nome, por favor, escolha outro.',
        'name.max': 'O campo nome aceita até 250 caracteres, por favor, tente novamente.'
      }
    } 
}

module.exports = StoreEmployees
