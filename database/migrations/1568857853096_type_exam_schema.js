'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExamTypesSchema extends Schema {
  up () {
    this.create('type_exams', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_exams')
  }
}

module.exports = ExamTypesSchema
