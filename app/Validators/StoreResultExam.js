"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
Validator.extend("exists", existCustomRule);
class StoreResultExam {
  get name() {
    return "Solicitação de Exame";
  }
  get inputs() {
    return ["result","request_exam_id"];
  }
  rules() {
    return {
      result: "required",
      request_exam_id: "required|exists:request_exams,id",
    };
  }
  get messages() {
    return {
      "result.required": "O campo resultado é obrigatório.",
      "request_exam_id.required": " O campo requisição de exame é obrigatorio.",
      "request_exam_id.exists": "Requisição de exame não encontrado.",
    };
  }
}

module.exports = StoreResultExam;
