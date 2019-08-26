'use strict'
class StoreProfile {
  get name(){
    return 'Profile'
  }
  get inputs(){
    return ['name']
  }
  rules (profileId) {
    profileId = profileId || 0
    return {
      name: `required|unique:profiles,name,id,${profileId}`
    }
  }
  get messages () {
    return {
      'name.required': 'Field title is required',
      'name.unique': 'Already have a user with this title, please choose another',
    }
  }
}

module.exports = StoreProfile
