"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RemoveCascadeInAll extends Schema {
  up() {
    // this.table("users", (table) => {
    //   table.integer("profile_id").references("profiles.id").alter();
    // });
    // this.table("employees", (table) => {
    //   table.integer("specialitie_id").references("specialities.id").alter();
    // });
    // this.table("medical_schedules", (table) => {
    //   table.integer("patient_id").alter();
    //   table.integer("employee_id").notNullable().alter();
    // });
    // this.table("request_exams", (table) => {
    //   table.integer("type_exam_id").notNullable().alter();
    //   table.integer("medical_schedule_id").notNullable().alter();
    // });
    // this.table("result_exams", (table) => {
    //   table.integer("request_exam_id").notNullable().alter();
    // });
  }

  down() {
    // this.table("users", (table) => {
    //   table.integer("profile_id").references("profiles.id").onDelete("cascade").alter();
    // });
    // this.table("employees", (table) => {
    //   table.integer("specialitie_id").references("specialities.id").onDelete("cascade").alter();
    // });
    // this.table("medical_schedules", (table) => {
    //   table.integer("patient_id").unsigned().notNullable().references("patients.id").onDelete("cascade").alter();
    //   table.integer("employee_id").unsigned().notNullable().references("employees.id").onDelete("cascade").alter();
    // });
    // this.table("request_exams", (table) => {
    //   table.integer("type_exam_id").unsigned().notNullable().references("type_exams.id").onDelete("cascade").alter();
    //   table.integer("medical_schedule_id").unsigned().notNullable().references("medical_schedules.id").onDelete("cascade").alter();
    // });
    // this.table("result_exams", (table) => {
    //   table.integer("request_exam_id").unsigned().notNullable().references("request_exams.id").onDelete("cascade").alter();
    // });
  }
}

module.exports = RemoveCascadeInAll;
