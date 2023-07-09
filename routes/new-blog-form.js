const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/pages/new-blog-form.html'));
});

router.get('/forms', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/pages/forms.json'));
});

router.post('/test', function(req, res) {
    var data = JSON.stringify(req.body);

    fs.writeFileSync(path.join(__dirname, '/pages/forms.json'), data);

    res.send("Data Received: " + data);
});

module.exports = router;