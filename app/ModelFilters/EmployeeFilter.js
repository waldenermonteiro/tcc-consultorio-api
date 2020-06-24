"use strict";

const ModelFilter = use("ModelFilter");

class EmployeeFilter extends ModelFilter {
  id(id) {
    return this.where("id", +id);
  }
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
  specialitie(id) {
    return this.where("specialitie_id", +id);
  }
}

module.exports = EmployeeFilter;
