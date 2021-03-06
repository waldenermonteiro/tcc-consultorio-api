const Database = use("Database");

const whereIfEmpty = async (data, field, message, args, get) => {
  const value = get(data, field);
  if (!value) {
    /**
     * skip validation if value is not defined. `required` rule
     * should take care of it.
     */
    return;
  }

  const [table, id] = args;
  let row = "";
  row = await Database.table(table).where({ id: id, status: "Agendada", date_appointment: data.date_appointment }).first();
  if (!row) {
    const result = await Database.table(table).where({ employee_id: data.employee_id, status: "Agendada", date_appointment: data.date_appointment });
    if (result.length !== 0) {
      throw message;
    }
  }
};
module.exports = whereIfEmpty;
