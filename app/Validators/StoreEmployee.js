"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
Validator.extend("exists", existCustomRule);
const updateUniqueCustomRule = use("App/Validators/Customs/UpdateUnique");
Validator.extend("updateUnique", updateUniqueCustomRule);

class StoreEmployees {
  get name() {
    return "Funcionário";
  }
  get inputs() {
    return ["name", "user_id", "specialitie_id"];
  }
  rules(employeeId) {
    employeeId = employeeId || 0;
    return {
      name: `required|updateUnique:employees,name,${employeeId}|max:250`,
      specialitie_id: "required|exists:specialities,id",
    };
  }
  get messages() {
    return {
      "name.required": "O campo nome é obrigatório.",
      "name.updateUnique": "Já existe um funcionário com esse nome, por favor, escolha outro.",
      "name.max": "O campo nome aceita até 250 caracteres, por favor, tente novamente.",
      "specialitie_id.required": "O campo especialidade é obrigatório.",
      "specialitie_id.exists": "Especialidade não encontrada.",
    };
  }
}

module.exports = StoreEmployees;
