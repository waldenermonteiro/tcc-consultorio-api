"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddMedicalSchedulesIdInResultExams extends Schema {
  up() {
    this.table("result_exams", (table) => {
     table.integer('medical_schedule_id').unsigned().notNullable().references('medical_schedules.id').onDelete('cascade')
    });
  }

  down() {
    this.alter("result_exams", (table) => {
      table.dropColumn("medical_schedule_id");
    });
  }
}

module.exports = AddMedicalSchedulesIdInResultExams;
