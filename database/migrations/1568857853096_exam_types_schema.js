'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExamTypesSchema extends Schema {
  up () {
    this.create('exam_types', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('exam_types')
  }
}

module.exports = ExamTypesSchema
