"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
const whereIfEmptyRule = use("App/Validators/Customs/WhereIfEmpty");
Validator.extend("exists", existCustomRule);
Validator.extend("whereIfEmpty", whereIfEmptyRule);
class StoreDoctor {
  get name() {
    return "Consulta médica";
  }
  get inputs() {
    return ["name", "date_appointment", "observation", "prescription_medicaments", "employee_id", "patient_id"];
  }
  get inputsAlterStatus() {
    return ["status"];
  }
  get inputsFinishConsult() {
    return ["medicalSchedule"];
  }
  rules(medicalScheduleId) {
    medicalScheduleId = medicalScheduleId || 0
    return {
      name: `required|unique:medical_schedules,name,id,${medicalScheduleId}`,
      date_appointment: `required|whereIfEmpty:medical_schedules`,
      observation: `max:500`,
      patient_id: 'required|exists:patients,id',
      employee_id: "required|exists:employees,id",
    };
  }
  rulesAlterStatus() {
    return {
      status: "required",
    };
  }
  rulesFinishConsult() {
    return {
      observation: `max:500`,
      prescription_medicaments: `max:2000`
    };
  }
  get messages() {
    return {
      "name.required": "O campo nome é obrigatório.",
      "name.unique": "Já existe uma consulta médica com esse nome, por favor, escolha outro.",
      "date_appointment.required": "O campo data da consulta é obrigatório.",
      "date_appointment.whereIfEmpty": "Já possui uma consulta neste dia e horário, por favor, escolha outro.",
      "observation.max": "O campo observação da consulta aceita até 500 caracteres, por favor, tente novamente.",
      "status.required": "O campo status é obrigatório.",
      'patient_id.required': 'O campo paciente é obrigatório.',
      'patient_id.exists' :'Paciente não encontrado.',
      "employee_id.required": "O campo médico é obrigatório.",
      "employee_id.exists": "Médico não encontrado.",
    };
  }
}

module.exports = StoreDoctor;
