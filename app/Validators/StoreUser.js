'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
const updateUniqueCustomRule = use("App/Validators/Customs/UpdateUnique");
Validator.extend("updateUnique", updateUniqueCustomRule);
class StoreUser {
  get name() {
    return 'Usuário'
  }
  get inputs() {
    return ['email', 'password', 'profile_id']
  }
  get inputsUpdate() {
    return ['email', 'password', 'profile_id']
  }
  get inputsLogin() {
    return ['email', 'password']
  }
  get inputsPatient() {
    return ['email']
  }
  get inputsAlterPassword() {
    return ['password']
  }
  rules(userId) {
    userId = userId || 0
    return {
      email: `required|unique:users,email,id,${userId}|max:250`,
      password: 'required|max:60',
      profile_id: 'required|exists:profiles,id'
    }
  }
  rulesUpdate(userId) {
    userId = userId || 0
    return {
      email: `required|updateUnique:users,email,${userId}|max:250`,
    }
  }
  get rulesLogin() {
    return {
      email: `required`,
      password: 'required'
    }
  }
  get rulesPatient() {
    return {
      email: `required`
    }
  }
  get rulesAlterPassword() {
    return {
      password: 'required'
    }
  }
  get messages() {
    return {
      'email.required': 'O campo email é obrigatório.',
      'email.unique': 'Já existe um usuário com esse email, por favor, escolha outro.',
      'email.updateUnique': 'Já existe um usuário com esse email, por favor, escolha outro.',
      'email.max': 'O campo email aceita até 250 caracteres, por favor, tente novamente.',
      'password.required': 'O campo senha é obrigatório.',
      'password.max': 'O campo senha aceita até 60 caracteres, por favor, tente novamente.',
      'profile_id.required': 'O campo perfil é obrigatório.',
      'profile_id.exists': 'Perfil inexistente, por favor, escolha outro.'
    }
  }
}

module.exports = StoreUser
