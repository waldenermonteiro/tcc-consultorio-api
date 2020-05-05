'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
class StoreDoctor {
  get name() {
    return 'Agenda Médica'
  }
  get inputs() {
    return ['name', 'date_appointment', 'status', 'patient_id', 'prescription_medicament_id']
  }
  rules(doctorId) {
    doctorId = doctorId || 0
    return {
      name: `required`,
      date_appointment: 'required',
      status: 'required',
      patient_id: 'required|exists:patients,id',
      prescription_medicament_id: 'exists:prescription_medicaments,id'
    }
  }
  get messages() {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'date_appointment.required': 'O campo data da consulta é obrigatório.',
      'status.required': 'O campo status é obrigatório.',
      'patient_id.required': 'O campo paciente é obrigatório.',
      'patient_id.exists' :'Paciente não encontrado.',
      'prescription_medicament_id.exists': 'Prescrição médica não encontrada.'
    }
  }
}

module.exports = StoreDoctor
