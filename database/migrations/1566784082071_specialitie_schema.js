'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecialitieSchema extends Schema {
  up () {
    this.create('specialities', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.timestamp('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('specialities')
  }
}

module.exports = SpecialitieSchema
