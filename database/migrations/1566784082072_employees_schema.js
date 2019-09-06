'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeesSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.timestamp('deleted_at')
      table.timestamps()
      table.integer('profile_id').unsigned();
      table.foreign('profile_id').references('profiles.id').onDelete('cascade');
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeesSchema
