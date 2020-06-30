const Database = use("Database");
const uniqueCustom = async (data, field, message, args, get) => {
  const value = get(data, field);
  if (!value) {
    return;
  }
  const [table, column, id] = args;
  let row = "";
    row = await Database.table(table)
      .where({ id: id, [column]: value })
      .first();
    if (!row) {
      row = await Database.table(table)
        .where({ [column]: value })
        .first();
      if (row) {
        throw message;
      }
    }
};
module.exports = uniqueCustom;
