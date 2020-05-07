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
      table.integer('patient_id').unsigned().notNullable().references('patients.id').onDelete('cascade')
      table.integer('prescription_medicament_id').unsigned().references('prescription_medicaments.id').onDelete('cascade')
      table.integer('employee_id').unsigned().notNullable().references('employees.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('medical_schedules')
  }
}

module.exports = MedicalScheduleSchema
