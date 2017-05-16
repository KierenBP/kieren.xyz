function insertIntoTable({
    table,
    values,
    connection,
}) {
  const query = `INSERT INTO ${connection.escapeId(table)} SET ?`;
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
}

module.exports = insertIntoTable;
