const express = require('express');
const path = require('path');

const router = express.Router();

// Route for react files to be send to the client for CLIENT SIDE rendering
router.use(express.static(path.resolve('./views')));

// Hand over control to React Router
router.get(['/', '/#*'], (req, res) => {
  res.sendFile(path.resolve('./views/index.html'));
});


module.exports = router;
