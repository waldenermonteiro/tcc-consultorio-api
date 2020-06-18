"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
Validator.extend("exists", existCustomRule);
class StoreResultExam {
  get name() {
    return "Resultado de Exame";
  }
  get inputs() {
    return ["result","request_exam_id", "medical_schedule_id"];
  }
  rules() {
    return {
      result: "required",
      request_exam_id: "required|exists:request_exams,id",
      medical_schedule_id: "required|exists:medical_schedules,id"
    };
  }
  get messages() {
    return {
      "result.required": "O campo resultado é obrigatório.",
      "request_exam_id.required": " O campo requisição de exame é obrigatorio.",
      "request_exam_id.exists": "Requisição de exame não encontrado.",
      "medical_schedule_id.required": " O campo consulta da requisição do de exame é obrigatorio.",
      "medical_schedule_id.exists": "Consulta da requisição de exame não encontrada.",
    };
  }
}

module.exports = StoreResultExam;
