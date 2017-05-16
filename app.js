const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const session = require('express-session');

// Routes Variables
const index = require('./routes/index');
const api = require('./routes/api');

// Init App
const app = express();

// Trust proxy passes
app.set('trust_proxy', 1);

// If not in production log user interaction to the console.
if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'));
}

// The BODY of requests returned by users should be paresed JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Disable unnecessary etag HTTP header
app.disable('etag');

// View static files in public folder
app.use(express.static(path.join(__dirname, 'public')));
// Checks if User is Loggined in and is not on login page or google auth

// Routes
app.use('/api', api);
app.use('/', index);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      title: err.status,
      status: err.status,
      message: err.message,
      error: err,
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    title: err.status,
    status: err.status,
    message: err.message,
    error: {},
  });
});


module.exports = app;
