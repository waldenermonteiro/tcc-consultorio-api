const Database = use("Database");

const notExistsFn = async (data, field, message, args, get) => {
  const value = get(data, field);
  if (!value) {
    /**
     * skip validation if value is not defined. `required` rule
     * should take care of it.
     */
    return;
  }

  const [table, column] = args;
  const row = await Database.table(table)
    .where({ [column]: value })
    .andWhere("deleted_at", null)
    .first();
  if (row) {
    throw message;
  }
};
module.exports = notExistsFn;
