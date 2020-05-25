"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
Validator.extend("exists", existCustomRule);
class StoreResultExam {
  get name() {
    return "Solicitação de Exame";
  }
  get inputs() {
    return ["result", "status", "request_exam_id"];
  }
  rules(doctorId) {
    doctorId = doctorId || 0;
    return {
      result: "required",
      status: "required",
      request_exam_id: "required|exists:request_exams,id",
    };
  }
  get messages() {
    return {
      "result.required": "O campo resultado é obrigatório.",
      "status.required": "O campo status é obrigatório.",
      "request_exam_id.required": " O campo requisição de exame é obrigatorio.",
      "request_exam_id.exists": "Requisição de exame não encontrado.",
    };
  }
}

module.exports = StoreResultExam;
