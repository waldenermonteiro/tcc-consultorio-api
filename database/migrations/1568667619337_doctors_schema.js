'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorsSchema extends Schema {
  up () {
    this.create('doctors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('doctors')
  }
}

module.exports = DoctorsSchema
