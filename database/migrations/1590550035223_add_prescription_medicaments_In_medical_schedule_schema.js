"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddPrescriptionMedicamentsInMedicalSchedule extends Schema {
  up() {
    this.table("medical_schedules", (table) => {
      table.json("prescription_medicaments");
      table.dropColumn("prescription_medicament_id");
    });
  }

  down() {
    this.alter("medical_schedules", (table) => {
      table.dropColumn("prescription_medicaments");
      table.integer('prescription_medicament_id').unsigned().references('prescription_medicaments.id').onDelete('cascade')
    });
  }
}

module.exports = AddPrescriptionMedicamentsInMedicalSchedule;
