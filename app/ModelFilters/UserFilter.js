"use strict";

const ModelFilter = use("ModelFilter");

class UserFilter extends ModelFilter {
  email(email) {
    return this.where("email", "LIKE", `%${email}%`);
  }
  profile(id) {
    return this.where("profile_id", +id);
  }
}

module.exports = UserFilter;
