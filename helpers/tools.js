const npmPackage = require('./../package.json');
const childProcess = require('child_process');

const tools = {
  version: {
    getVersionNumber: () => npmPackage.version, // Version number from package.json
    getCommitSHA: () => childProcess.execSync('git rev-parse --short HEAD').toString().trim(), // Latest git commit short SHA
  },
};

module.exports = tools;
