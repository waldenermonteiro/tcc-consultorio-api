'use strict'
const Profile = use('App/Models/Profile')
const StoreProfile = use('App/Validators/StoreProfile')
const BaseController = use('App/Controllers/Http/BaseController')
const ProfileRepository = use("App/Repositories/ProfileRepository");
class ProfileController extends BaseController {
  constructor() {
    super(Profile, StoreProfile)
    this.ProfileRepository = new ProfileRepository(Profile, StoreProfile);
  }
  async destroy({ request, response, params }) {
    return await this.ProfileRepository.destroy({ request, response, params });
  }
}
module.exports = ProfileController
