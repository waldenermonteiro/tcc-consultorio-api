"use strict";

const ModelFilter = use("ModelFilter");

class TypeExam extends ModelFilter {
  name(name) {
    return this.where("name", "LIKE", `%${name}%`);
  }
}

module.exports = TypeExam;
