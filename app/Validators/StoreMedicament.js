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
        name: `required|unique:medicaments,name,id,${medicamentId}|max:100`,
        factory: `required|max:50`,
        manufacturer: 'required|max:50'
      }
    }
    get messages () {
      return {
        'name.required': 'O campo nome é obrigatório.',
        'name.unique': 'Já existe um medicamento com esse nome, por favor, escolha outro.',
        'name.max': 'O campo nome aceita até 100 caracteres, por favor, tente novamente.',
        'factory.required': 'O campo fábrica é obrigatório.',
        'factory.max': 'O campo fábrica aceita até 50 caracteres, por favor, tente novamente.',
        'manufacturer.required': 'O campo fabricante é obrigatório.',
        'manufacturer.max': 'O campo fabricante aceita até 50 caracteres, por favor, tente novamente.'
      }
    } 
}

module.exports = StoreMedicament
