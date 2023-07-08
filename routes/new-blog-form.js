const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/pages/new-blog-form.html'));
});

router.get('/forms', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/pages/forms.json'));
});

router.post('/test', function(req, res) {
    var data = req.body;
    res.send("Data Received: " + JSON.stringify(data));
});

module.exports = router;