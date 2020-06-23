"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RemoveCascadeInEmployees extends Schema {
  up() {
    this.table("employees", (table) => {
      table.integer("user_id").alter();
    });
  }

  down() {
    this.table("employees", (table) => {
      table.foreign("user_id").references("users.id").onDelete("cascade").alter();
    });
  }
}

module.exports = RemoveCascadeInEmployees;
