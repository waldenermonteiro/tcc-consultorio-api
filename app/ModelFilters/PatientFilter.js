"use strict";

const ModelFilter = use("ModelFilter");

class PatientFilter extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
  rg(rg) {
    return this.where("rg", "LIKE", `%${rg}%`);
  }
  cpf(cpf) {
    return this.where("cpf", "LIKE", `%${cpf}%`);
  }
}

module.exports = PatientFilter;
