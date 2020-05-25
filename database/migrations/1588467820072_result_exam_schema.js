'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResultExamSchema extends Schema {
  up () {
    this.create('result_exams', (table) => {
      table.increments()
      table.json('result').notNullable()
      table.timestamps()
      table.timestamp('deleted_at')
      table.enu('status', ['Agendado', 'Em andamento', 'Finalizado', 'Cancelado']).notNullable()
      table.integer('request_exam_id').unsigned().notNullable().references('request_exams.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('result_exams')
  }
}

module.exports = ResultExamSchema
