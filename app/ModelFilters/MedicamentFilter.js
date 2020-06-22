"use strict";

const ModelFilter = use("ModelFilter");

class MedicamentFilter extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
}

module.exports = MedicamentFilter;
