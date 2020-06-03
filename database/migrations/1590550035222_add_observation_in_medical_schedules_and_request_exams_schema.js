"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddObservationInMedicalSchedulesAndRequestExams extends Schema {
  up() {
    this.table("medical_schedules", (table) => {
      table.string("observation", 500);
    });
    this.table("request_exams", (table) => {
      table.string("observation", 500);
    });
  }

  down() {
    this.alter("medical_schedules", (table) => {
      table.dropColumn("observation");
    });
    this.alter("request_exams", (table) => {
      table.dropColumn("observation");
    });
  }
}

module.exports = AddObservationInMedicalSchedulesAndRequestExams;
