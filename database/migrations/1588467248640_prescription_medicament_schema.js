'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrescriptionMedicamentSchema extends Schema {
  up () {
    this.create('prescription_medicaments', (table) => {
      table.increments()
      table.json('prescription').notNullable()
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('prescription_medicaments')
  }
}

module.exports = PrescriptionMedicamentSchema
