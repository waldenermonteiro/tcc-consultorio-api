'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemoveUniqueNameInMedicalSchedules extends Schema {
  up () {
    this.table('medical_schedules', (table) => {
        table.dropUnique('name')
  })
}

  down () {
    this.table('medical_schedules', (table) => {
        table.string('name', 100).notNullable().alter()
    })
  }
}

module.exports = RemoveUniqueNameInMedicalSchedules
