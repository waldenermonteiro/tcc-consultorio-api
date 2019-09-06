'use strict'

class StoreEmployees {
  get name(){
    return 'Employee'
  }
  get inputs(){
    return ['name', 'profile_id']
  }
  rules (employeeId) {
    employeeId = employeeId || 0
    return {
      name: `required|unique:employees,name,id,${employeeId}`,
      profile_id: `required`  
    }
  }
  get messages () {
    return {
      'name.required': 'Field name is required',
      'name.unique': 'Already have a user with this title, please choose another',
      'profile_id.required': 'Field profile_id is required',
    }
  }
}

module.exports = StoreEmployees
