'use strict'
class StorePrescriptionMedicament {
  get name(){
    return 'Prescrição Médica'
  }
  get inputs(){
    return ['prescription']
  }
  rules () {
    return {
      prescription: `required`
    }
  }
  get messages () {
    return {
      'prescription.required': 'O campo prescrição é obrigatório.',
    }
  }
}

module.exports = StorePrescriptionMedicament
