'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterRequiredPatientIdMedicalScheduleSchema extends Schema {
  up () {
    this.table('medical_schedules', (table) => {
      table.integer('patient_id').alter()
    })
  }

  down () {
    this.table('medical_schedules', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterRequiredPatientIdMedicalScheduleSchema
