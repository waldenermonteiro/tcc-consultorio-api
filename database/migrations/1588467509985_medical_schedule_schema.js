'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicalScheduleSchema extends Schema {
  up () {
    this.create('medical_schedules', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.datetime('date_appointment').notNullable()
      table.boolean('status').notNullable()
      table.timestamps()
      table.timestamp('deleted_at')
      table.integer('patient_id').unsigned().notNullable().references('patients.id').onDelete('cascade')
      table.integer('prescription_medicament_id').unsigned().notNullable().references('prescription_medicaments.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('medical_schedules')
  }
}

module.exports = MedicalScheduleSchema
