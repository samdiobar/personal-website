// required external modules
const express = require('express');
const path = require("path");

// app variables
var app = express();
const port = 3000;
const home_page_router = require('./routes/home-page');

// static files
app.use('/public', express.static('public'));

// routes
app.use('/', home_page_router);

// error 404 Route
app.get('*', function(req, res){
  res.status(404).send('error 404: page not found');
});

// start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})