"use strict";

const ModelFilter = use("ModelFilter");

class ProfileFilter extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
}

module.exports = ProfileFilter;
