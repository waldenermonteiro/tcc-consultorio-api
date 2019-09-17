'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorsSchema extends Schema {
  up () {
    this.create('doctors', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.timestamps()
      table.timestamp('deleted_at')
      table.integer('specialitie_id').unsigned().notNullable().references('specialities.id').onDelete('cascade')
      table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('doctors')
  }
}

module.exports = DoctorsSchema
