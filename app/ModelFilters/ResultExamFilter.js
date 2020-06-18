"use strict";

const ModelFilter = use("ModelFilter");

class ResultExamFilter extends ModelFilter {
  medicalSchedule(id) {
    return this.where("medical_schedule_id", +id);
  }
}

module.exports = ResultExamFilter;
