"use strict";

const ModelFilter = use("ModelFilter");

class SpecialitieFilter extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
}

module.exports = SpecialitieFilter;
