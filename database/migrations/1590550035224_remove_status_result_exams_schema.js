"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RemoveStatusResultExams extends Schema {
  up() {
    this.table("result_exams", (table) => {
      table.dropColumn("status");
    });
  }

  down() {
    this.alter("result_exams", (table) => {
      table.enu('status', ['Agendado', 'Em andamento', 'Finalizado', 'Cancelado']).notNullable()
    });
  }
}

module.exports = RemoveStatusResultExams;
