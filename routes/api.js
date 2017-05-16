const express = require('express');
const tools = require('./../helpers/tools');
const core = require('./../helpers/core');


const router = express.Router();

// Return infomation about ACMS versions and last commit. Mainly for testing that API is working
router.get('/', (req, res) => {
  core.api.returnJSON(res, {
    info: {
      version: tools.version.getVersionNumber(),
      latestCommit: tools.version.getCommitSHA(),
    }
  });
});

module.exports = router;
