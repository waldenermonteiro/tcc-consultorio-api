"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterMaxValueInMedicaments extends Schema {
  up() {
    this.table("medicaments", (table) => {
      table.string("name", 200).notNullable().alter();
      table.string("factory", 100).notNullable().alter();
      table.string("manufacturer", 100).notNullable().alter();
    });
  }

  down() {
    this.table("medicaments", (table) => {
      table.string("name", 100).notNullable();
      table.string("factory", 50).notNullable();
      table.string("manufacturer", 50).notNullable();
    });
  }
}

module.exports = AlterMaxValueInMedicaments;
