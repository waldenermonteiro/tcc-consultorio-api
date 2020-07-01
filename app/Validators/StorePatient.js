"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
const notExistsRule = use("App/Validators/Customs/NotExists");
const updateUniqueCustomRule = use("App/Validators/Customs/UpdateUnique");
Validator.extend("exists", existCustomRule);
Validator.extend("notExists", notExistsRule);
Validator.extend("updateUnique", updateUniqueCustomRule);
class StorePatient {
  get name() {
    return "Paciente";
  }
  get inputs() {
    return ["name", "birth_date", "rg", "cpf","cep", "district", "complement", "address", "city", "state", "sex", "user_id"];
  }
  rules(patientId) {
    patientId = patientId || 0;
    return {
      name: `required|updateUnique:patients,name,${patientId}|max:100`,
      birth_date: "required|date",
      rg: `required|updateUnique:patients,rg,${patientId}|max:8`,
      cpf: `updateUnique:patients,cpf,${patientId}|max:11`,
      cep: "required|max:8",
      district: "required|max:30",
      complement: "required|max:30",
      address: "required|max:250",
      city: "required|max:50",
      state: "required|max:30",
      sex: "required",
    };
  }
  rulesDestroy () {
    return {
      id: 'notExists:medical_schedules,patient_id',

    }
  }
  get messages() {
    return {
      'id.notExists': 'Este paciente está sendo utilizado, por favor, resolva as pendências.',
      "name.required": "O campo nome é obrigatório.",
      "name.unique": "Já existe um paciente com esse nome, por favor, tente novamente.",
      "name.updateUnique": "Já existe um paciente com esse nome, por favor, tente novamente.",
      "name.max": "O campo nome aceita até 100 caracteres, por favor, tente novamente.",
      "birth_date.required": "O campo data de nascimento é obrigatório.",
      "birth_date.date": "O campo data está em um formato inválido, por favor, tente novamente.",
      "rg.required": "O campo rg é obrigatório.",
      "rg.unique": "Já existe um paciente com esse rg, por favor, tente novamente.",
      "rg.updateUnique": "Já existe um paciente com esse rg, por favor, tente novamente.",
      "rg.max": "O campo rg aceita até 8 caracteres, por favor, tente novamente.",
      "cpf.unique": "Já existe um paciente com esse cpf, por favor, tente novamente.",
      "cpf.updateUnique": "Já existe um paciente com esse cpf, por favor, tente novamente.",
      "cpf.max": "O campo cpf aceita até 11 caracteres, por favor, tente novamente.",
      "cep.required": "O campo cep é obrigatório.",
      "cep.max": "O campo cep aceita até 8 caracteres, por favor, tente novamente.",
      "district.required": "O campo bairro é obrigatório.",
      "district.max": "O campo bairro aceita até 30 caracteres, por favor, tente novamente.",
      "complement.required": "O campo complemento é obrigatório.",
      "complement.max": "O campo complemento aceita até 30 caracteres, por favor, tente novamente.",
      "address.required": "O campo data de nascimento é obrigatório.",
      "address.max": "O campo endereço aceita até 250 caracteres, por favor, tente novamente.",
      "city.required": "O campo cidade é obrigatório.",
      "city.max": "O campo cidade aceita até 50 caracteres, por favor, tente novamente.",
      "state.required": "O campo estado é obrigatório.",
      "state.max": "O campo estado aceita até 30 caracteres, por favor, tente novamente.",
      "sex.required": "O campo data de nascimento é obrigatório.",
    };
  }
}

module.exports = StorePatient;
