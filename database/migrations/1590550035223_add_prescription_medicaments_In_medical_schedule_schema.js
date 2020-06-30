"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddPrescriptionMedicamentsInMedicalSchedule extends Schema {
  up() {
    this.table("medical_schedules", (table) => {
      table.json("prescription_medicaments");
    });
  }

  down() {
    this.alter("medical_schedules", (table) => {
      table.dropColumn("prescription_medicaments");
    });
  }
}

module.exports = AddPrescriptionMedicamentsInMedicalSchedule;
