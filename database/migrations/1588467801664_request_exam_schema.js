'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestExamSchema extends Schema {
  up () {
    this.create('request_exams', (table) => {
      table.increments()
      table.timestamps()
      table.timestamp('deleted_at')
      table.enu('status', ['Agendado', 'Em andamento', 'Finalizado', 'Cancelado']).notNullable()
      table.integer('type_exam_id').unsigned().notNullable().references('type_exams.id').onDelete('cascade')
      table.integer('medical_schedule_id').unsigned().notNullable().references('medical_schedules.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('request_exams')
  }
}
  
module.exports = RequestExamSchema
