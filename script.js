var express = require('express');
var request = require('request');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
  res.json({state:"bored"});
})

app.listen(app.get('port'), function(){
  console.log("Listening on port "+app.get('port'));
})
