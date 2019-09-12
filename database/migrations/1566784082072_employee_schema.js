'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeesSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.timestamps()
      table.timestamp('deleted_at')
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('cascade');
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeesSchema
