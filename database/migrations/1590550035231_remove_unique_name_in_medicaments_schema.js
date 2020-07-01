'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemoveUniqueNameInMedicaments extends Schema {
  up () {
    this.table('medicaments', (table) => {
        table.dropUnique('name')
  })
}

  down () {
    this.table('medicaments', (table) => {
        table.string('name', 100).notNullable().alter()
    })
  }
}

module.exports = RemoveUniqueNameInMedicaments
