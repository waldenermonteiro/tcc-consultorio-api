"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterAllRequiredPatientSchema extends Schema {
  up() {
    this.table("patients", (table) => {
      table.string("name", 100).alter();
      table.date("birth_date").alter();
      table.string("rg", 8).alter();
      table.string("address", 250).alter();
      table.string("city", 50).alter();
      table.string("state", 30).alter();
      table.string("sex", 10).alter();
    });
  }

  down() {
    this.table("patients", (table) => {
      table.string("name", 100).notNullable().alter();
      table.date("birth_date").notNullable().alter();
      table.string("rg", 8).notNullable().alter();
      table.string("address", 250).notNullable().alter();
      table.string("city", 50).notNullable().alter();
      table.string("state", 30).notNullable().alter();
      table.string("sex", 10).notNullable().alter();
    });
  }
}

module.exports = AlterAllRequiredPatientSchema;
