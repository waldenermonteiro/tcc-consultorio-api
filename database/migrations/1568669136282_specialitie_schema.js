'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecialitieSchema extends Schema {
  up () {
    this.create('specialities', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('specialities')
  }
}

module.exports = SpecialitieSchema
