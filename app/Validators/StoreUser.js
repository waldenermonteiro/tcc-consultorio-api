'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
class StoreUser {
  get name() {
    return 'Usuário'
  }
  get inputs() {
    return ['username', 'email', 'password', 'profile_id']
  }
  get inputsLogin() {
    return ['email', 'password']
  }
  rules(userId) {
    userId = userId || 0
    return {
      username: `required|unique:users,username,id,${userId}`,
      email: `required|unique:users,email,id,${userId}`,
      password: 'required',
      profile_id: 'required|exists:profiles,id'
    }
  }
  get rulesLogin() {
    return {
      email: `required`,
      password: 'required'
    }
  }
  get messages() {
    return {
      'username.required': 'O campo nome é obrigatório.',
      'username.unique': 'Já existe um usuário com esse nome, por favor, escolha outro.',
      'email.required': 'O campo email é obrigatório.',
      'email.unique': 'Já existe um usuário com esse email, por favor, escolha outro.',
      'password.required': 'O campo senha é obrigatório.',
      'profile_id.required': 'O campo perfil é obrigatório.',
      'profile_id.exists': 'Perfil inexistente, por favor, escolha outro.'
    }
  }
}

module.exports = StoreUser
