var express = require('express');

var app = express();
var morgan = require('morgan');


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
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