function removeFromTable({
    table,
    where,
    connection,
  }) {
  const query = `DELETE FROM ${connection.escapeId(table)} WHERE ?`;
    // query += ` WHERE ${connection.escapeId(where[0][0])} = ${connection.escape(where[0][1])}`;
    // for (let i = 1; i < where.length; i++) {
    //     query += ` AND ${connection.escapeId(where[i][0])} = ${connection.escape(where[i][1])}`;
    // }
  return new Promise((resolve, reject) => {
    connection.query(query, where, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
module.exports = removeFromTable;
