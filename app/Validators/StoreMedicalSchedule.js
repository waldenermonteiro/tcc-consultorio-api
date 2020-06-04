"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
Validator.extend("exists", existCustomRule);
class StoreDoctor {
  get name() {
    return "Consulta médica";
  }
  get inputs() {
    return ["name", "date_appointment", "observation", "prescription_medicaments", "status", "employee_id", "patient_id"];
  }
  get inputsAlterStatus() {
    return ["status"];
  }
  get inputsFinishConsult() {
    return ["medicalSchedule"];
  }
  rules(medicalScheduleId) {
    medicalScheduleId = medicalScheduleId || 0;
    return {
      name: `required|unique:medical_schedules,name,id,${medicalScheduleId}`,
      date_appointment: `required`,
      observation: `max:500`,
      status: "required",
      // patient_id: 'required|exists:patients,id',
      employee_id: "required|exists:employees,id",
    };
  }
  rulesFinishConsult() {
    return {
      observation: `max:500`,
      prescription_medicaments: `max:2000`,
      // status: "required",
    };
  }
  get messages() {
    return {
      "name.required": "O campo nome é obrigatório.",
      "name.unique": "Já existe uma consulta médica com esse nome, por favor, escolha outro.",
      "date_appointment.required": "O campo data da consulta é obrigatório.",
      "observation.max": "O campo observação da consulta aceita até 500 caracteres, por favor, tente novamente.",
      "status.required": "O campo status é obrigatório.",
      // 'patient_id.required': 'O campo paciente é obrigatório.',
      // 'patient_id.exists' :'Paciente não encontrado.',
      "employee_id.required": "O campo médico é obrigatório.",
      "employee_id.exists": "Médico não encontrado.",
    };
  }
}

module.exports = StoreDoctor;
