"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
Validator.extend("exists", existCustomRule);
class StoreRequestExam {
  get name() {
    return "Solicitação de Exame";
  }
  get inputs() {
    return ["observation", "status", "type_exam_id", "medical_schedule_id"];
  }
  get inputsFinishConsult() {
    return ["requestExam"];
  }
  rules() {
    return {
      observation: `max:500`,
      status: "required",
      type_exam_id: "required|exists:type_exams,id",
      medical_schedule_id: "required|exists:medical_schedules,id",
    };
  }
  get messages() {
    return {
      "observation.max": "O campo observação da solicitação de exame aceita até 500 caracteres, por favor, tente novamente.",
      "status.required": "O campo status é obrigatório.",
      "type_exam_id.required": "O campo tipo de exame é obrigatório.",
      "type_exam_id.exists": "Tipo de exame não encontrado.",
      "medical_schedule_id.required": "O campo evento médico não encontrado.",
      "medical_schedule_id.exists": "Evento médico não encontrado.",
    };
  }
}

module.exports = StoreRequestExam;
