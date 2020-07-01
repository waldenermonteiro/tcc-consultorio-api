'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)

class StoreMedicament {
  get name() {
    return 'Medicamento'
  }
  get inputs() {
    return ['name', 'factory', 'manufacturer']
  }
     rules (medicamentId) {
      medicamentId = medicamentId || 0
      return {
        name: `required|max:200`,
        factory: `required|max:100`,
        manufacturer: 'required|max:100'
      }
    }
    get messages () {
      return {
        'name.required': 'O campo nome é obrigatório.',
        'name.max': 'O campo nome aceita até 200 caracteres, por favor, tente novamente.',
        'factory.required': 'O campo fábrica é obrigatório.',
        'factory.max': 'O campo fábrica aceita até 100 caracteres, por favor, tente novamente.',
        'manufacturer.required': 'O campo fabricante é obrigatório.',
        'manufacturer.max': 'O campo fabricante aceita até 100 caracteres, por favor, tente novamente.'
      }
    } 
}

module.exports = StoreMedicament
