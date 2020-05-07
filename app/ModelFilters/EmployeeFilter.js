"use strict";

const ModelFilter = use("ModelFilter");

class EmployeeFilter extends ModelFilter {
  specialitie(id) {
    return this.where("specialitie_id", +id);
  }
}

module.exports = EmployeeFilter;
