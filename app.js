// required external modules
const express = require('express');
const path = require("path");

// app variables
var app = express();
const port = 3000;
const home_router = require('./routes/home-page');
const new_form_router = require('./routes/new-blog-form');

// static files
app.use(express.static('public'));

// routes
app.use('/', home_router);
app.use('/form', new_form_router);

// error 404 Route
app.get('*', function(req, res){
  res.status(404).send('error 404: page not found');
});

// start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})