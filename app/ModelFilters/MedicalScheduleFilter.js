"use strict";

const ModelFilter = use("ModelFilter");

class MedicalScheduleFilter extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
  employee(id) {
    return this.where("employee_id", +id);
  }
  patient(id) {
    return this.where("patient_id", +id);
  }
}

module.exports = MedicalScheduleFilter;
