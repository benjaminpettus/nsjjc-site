var express = require('express');

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/schedule', function (req, res) {
  res.render('schedule');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});