const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/pages/home-page.html'));
});

router.get('/hey', function(req, res, next) {
  res.send('Heeeeeyyy')
});

module.exports = router;
