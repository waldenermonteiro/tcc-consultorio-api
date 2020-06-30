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
      table.integer('specialitie_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.foreign('specialitie_id').references('specialities.id');
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeesSchema
