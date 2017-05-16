function fetchFromTable({
  table,
  select,
  count,
  where,
  orderby,
  limit,
  join,
  connection,
}) {
  // Query variable to be passed to sql
  let query;
  // Check if count is defined otherwise use select
  if (typeof count !== 'undefined') {
    // Count the amount of col's from the table provided.
    query = `SELECT count(${count === '*' ? count : connection.escapeId(count)}) FROM ${connection.escapeId(table)}`;
  } else {
    // Select the col's from the table provided.
    query = `SELECT ${connection.escapeId(select)} FROM ${connection.escapeId(table)}`;
  }
  // Check if join is defined
  if (typeof join !== 'undefined') {
    // Loop over join and add to the query
    for (let i = 0; i < join.length; i += 1) {
      query += ` ${join[i].type} ${connection.escapeId(join[i].table)} ON ${connection.escapeId(join[i].col)} = ${connection.escapeId(join[i].value)}`;
    }
  }
  // Check if where is defined
  if (typeof where !== 'undefined') {
    // Add the first where to the query
    query += ` WHERE ${connection.escapeId(where[0].col)} LIKE ${connection.escape(where[0].value)}`;
    // Loop over the rest of the where's and add them to the where clause
    for (let i = 1; i < where.length; i += 1) {
      query += ` AND ${connection.escapeId(where[i].col)} LIKE ${connection.escape(where[i].value)}`;
    }
  }
  // Check if orderby is defined
  if (typeof orderby !== 'undefined') {
    // Add the first orderby to the query
    query += ` ORDER BY ${orderby[0].col} ${orderby[0].order}`;
    // Loop over the rest of the orderby's and add them to the orderby clause
    for (let i = 1; i < orderby.length; i += 1) {
      query += `, ${orderby[i].col} ${orderby[i].order}`;
    }
  }
  // Check if limit is defined and then add it to the query
  if (typeof limit !== 'undefined') {
    query += ` LIMIT ${connection.escape(limit.amount)} OFFSET ${connection.escape(limit.offset)}`;
  }
  return new Promise((resolve, reject) => {
    connection.query({
      sql: query,
      typeCast(field, next) {
        if (field.type === 'BIT' && field.length === 1) {
          const bit = field.string();
          return (bit === null) ? null : bit.charCodeAt(0);
        }
        return next();
      },
    }, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

module.exports = fetchFromTable;
