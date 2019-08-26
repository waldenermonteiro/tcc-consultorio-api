'use strict'
const Profile = use('App/Models/Profile')
const StoreProfile = use('App/Validators/StoreProfile')
const BaseController = use('App/Controllers/Http/BaseController')
class ProfileController extends BaseController {
  constructor() {
    super(Profile, StoreProfile)
  }
}
module.exports = ProfileController
