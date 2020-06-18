"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddCepInPatientsSchema extends Schema {
  up() {
    this.table("patients", (table) => {
      table.string("cep", 9)
      table.string("district", 30)
      table.string("complement", 30)
    });
  }

  down() {
    this.alter("patients", (table) => {
      table.dropColumn("cep");
      table.dropColumn("district");
      table.dropColumn("complement");
    });
  }
}

module.exports = AddCepInPatientsSchema;
