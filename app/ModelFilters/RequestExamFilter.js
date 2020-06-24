"use strict";

const ModelFilter = use("ModelFilter");

class RequestExamFilter extends ModelFilter {
  status(status) {
    return this.where("status", status);
  }
  typeExam(id) {
    return this.where("type_exam_id", +id);
  }
  createdAt(date) {
    let newDateAddOneDay = new Date(date);
    date = new Date(date);
    newDateAddOneDay.setDate(newDateAddOneDay.getDate() + 1);
    return this.whereBetween("created_at", [date, newDateAddOneDay]);
  }
}

module.exports = RequestExamFilter;
