'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicalScheduleSchema extends Schema {
  up () {
    this.create('medical_schedules', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.datetime('date_appointment').notNullable()
      table.enu('status', ['Agendada', 'Em andamento', 'Finalizada', 'Cancelada']).notNullable()
      table.timestamps()
      table.timestamp('deleted_at')
      table.integer('patient_id').unsigned().notNullable().references('patients.id')
      table.integer('employee_id').unsigned().notNullable().references('employees.id')
    })
  }

  down () {
    this.drop('medical_schedules')
  }
}

module.exports = MedicalScheduleSchema
