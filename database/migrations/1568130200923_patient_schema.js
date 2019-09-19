'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.date('birth_date').notNullable()
      table.string('rg', 8).notNullable().unique()
      table.string('cpf', 11).unique()
      table.string('address', 250).notNullable()
      table.string('city', 50).notNullable()
      table.string('state', 30).notNullable()
      table.enu('sex', ['Masculino', 'Feminino']).notNullable()
      table.timestamps()
      table.timestamp('deleted_at')
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id').onDelete('cascade');
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
