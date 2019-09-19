'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicamentSchema extends Schema {
  up () {
    this.create('medicaments', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.string('factory', 50).notNullable()
      table.string('manufacturer', 50).notNullable()
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('medicaments')
  }
}

module.exports = MedicamentSchema
