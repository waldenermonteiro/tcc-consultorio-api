"use strict";

const ModelFilter = use("ModelFilter");

class ResultExamFilter extends ModelFilter {
  createdAt(date) {
    let newDateAddOneDay = new Date(date);
    date = new Date(date);
    newDateAddOneDay.setDate(newDateAddOneDay.getDate() + 1);
    return this.whereBetween("created_at", [date, newDateAddOneDay]);
  }
  medicalSchedule(id) {
    return this.where("medical_schedule_id", +id);
  }
}

module.exports = ResultExamFilter;
