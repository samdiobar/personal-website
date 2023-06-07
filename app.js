var express = require('express');

//init app object
var app = express();
const port = 3000;

//routers
var home_page_router = require('./routes/home-page');

app.use('/', home_page_router);

//static files
app.use('/public', express.static('public'));

//The 404 Route
app.get('*', function(req, res){
  res.status(404).send('error 404: page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})