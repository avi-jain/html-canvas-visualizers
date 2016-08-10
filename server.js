var express = require('express');
var bodyParser = require('body-parser');



var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override,Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET,OPTIONS");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


app.listen(6060);
