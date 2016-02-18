var express = require('express');

var app = express();


app.get('/', function (req, res) {
  res.send("Homepage");
});

app.get('/schedule', function (req, res) {
  res.send("Schedule");
});

app.get('/contact', function (req, res) {
  res.send("Contact");
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});