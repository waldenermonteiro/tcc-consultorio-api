'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
class StoreDoctor {
  get name() {
    return 'Solicitação de Exame'
  }
  get inputs() {
    return ['status', 'type_exam_id', 'medical_schedule_id']
  }
  rules(doctorId) {
    doctorId = doctorId || 0
    return {
      status: 'required',
      type_exam_id: 'required|exists:type_exams,id',
      medical_schedule_id: 'required|exists:medical_schedules,id'
    }
  }
  get messages() {
    return {
      'status.required': 'O campo status é obrigatório.',
      'type_exam_id.required': 'O campo tipo de exame é obrigatório.',
      'type_exam_id.exists' :'Tipo de exame não encontrado.',
      'medical_schedule_id.required': ' o campo evento médico não encontrado.',
      'medical_schedule_id.exists': 'Evento médico não encontrado.'
    }
  }
}

module.exports = StoreDoctor
