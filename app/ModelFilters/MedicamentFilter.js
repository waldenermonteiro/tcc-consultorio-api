"use strict";

const ModelFilter = use("ModelFilter");

class MedicamentFilter extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
  factory(factory) {
    return this.where("factory", "LIKE", `%${factory}%`);
  }
  manufacturer(manufacturer) {
    return this.where("manufacturer", "LIKE", `%${manufacturer}%`);
  }
}

module.exports = MedicamentFilter;
