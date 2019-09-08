'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilesSchema extends Schema {
  up() {
    this.create('profiles', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down() {
    this.drop('profiles')
  }
}

module.exports = ProfilesSchema
