const mysql = require('mysql');
// eslint-disable-next-line 
const config = require('./../../config');


const fetch = require('./fetch');
const insert = require('./insert');
const update = require('./update');
const remove = require('./remove');

const db = {};
const connection = mysql.createConnection({
  host: config.mysqlConnection.host,
  port: config.mysqlConnection.port,
  user: config.mysqlConnection.username,
  password: config.mysqlConnection.password,
  dateStrings: 'date',
});

connection.query(`USE ${config.mysqlConnection.database}`);

// Database Fetch Function

db.fetch = ({
  table,
  select,
  count,
  where,
  orderby,
  limit,
  join,
}) => fetch({ table, select, count, where, orderby, limit, join, connection });

// Database Insert Function

db.insert = ({
  table,
  values,
}) => insert({ table, values, connection });

// Database Update Function

db.update = ({
  table,
  values,
  where,
}) => update({ table, values, where, connection });

// Database Remove Function
db.remove = ({
  table,
  where,
}) => remove({ table, where, connection });

module.exports = db;
