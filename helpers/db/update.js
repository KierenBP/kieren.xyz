function updateTableValue({
    table,
    values,
    where,
    connection,
  }) {
  const query = `UPDATE ${connection.escapeId(table)} SET ? WHERE ?`;
  return new Promise((resolve, reject) => {
    connection.query(query, [values, where], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

module.exports = updateTableValue;
