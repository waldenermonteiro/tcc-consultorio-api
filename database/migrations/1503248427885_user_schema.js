'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
      table.timestamp('deleted_at')
      table.integer('profile_id').unsigned().notNullable().references('profiles.id');
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
