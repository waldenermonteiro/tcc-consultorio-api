'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemoveRequiredPropInNameMedicalScheduleSchema extends Schema {
  up () {
    this.table('medical_schedules', (table) => {
        table.string('name', 100).notNullable().alter()
    })
  }

  down () {
    this.table('medical_schedules', (table) => {
        table.string('name', 100).notNullable().unique().alter()
    })
  }
}

module.exports = RemoveRequiredPropInNameMedicalScheduleSchema
