const tools = require('./tools');

const version = tools.version.getVersionNumber();

const core = {
  api: {
    returnJSON: (res, data) => {
      res.set({
        Auth: 'allow',
        Version: version,
        'X-Powered-By': 'A lot of coffee', // ☕️
        'Access-Control-Allow-Origin': '*',
      });
      res.json(data);
    },
    returnError: (res, status, error, auth) => {
      res.status(status);
      // eslint-disable-next-line
      console.warn('Error: ', error);
      res.set({
        Auth: auth.toString().toLowerCase(),
        Version: version,
        'X-Powered-By': 'A lot of crying', // 😭
        'Access-Control-Allow-Origin': '*',
      });
      res.json({
        error,
      });
    },
  },
};

module.exports = core;
