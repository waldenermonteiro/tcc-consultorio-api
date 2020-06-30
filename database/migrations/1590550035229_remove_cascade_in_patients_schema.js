"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RemoveCascadeInPatients extends Schema {
  up() {
    // this.table("patients", (table) => {
    //   table.integer("user_id").alter();
    // });
  }

  down() {
    // this.table("patients", (table) => {
    //   table.foreign("user_id").references("users.id").onDelete("cascade").alter();
    // });
  }
}

module.exports = RemoveCascadeInPatients;
