"use strict";

const ModelFilter = use("ModelFilter");

class MedicalScheduleFilter extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
  employee(id) {
    return this.where("employee_id", +id);
  }
  dateAppointment(date) {
    let newDateAddOneDay = new Date(date);
    newDateAddOneDay.setDate(newDateAddOneDay.getDate() + 1);
    return this.whereBetween("date_appointment", [date, newDateAddOneDay]);
  }
  patient(id) {
    return this.where("patient_id", +id);
  }
}

module.exports = MedicalScheduleFilter;
