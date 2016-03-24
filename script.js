var express = require('express');
var scraper = require('./functionLibrary/scraper.js');
var stationLib = require('./functionLibrary/stationsLib.js');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
  scraper.iterStops(scraper.eastStops, "east").then((d) => {
    res.json(d);
  });
});

app.get('/stations', function(req, res){
  var eastStations = [];
  var westStations = [];
  stationLib.buildStations(scraper.eastStops).forEach((e) => {
    eastStations.push(e.spill());
  });
  stationLib.buildStations(scraper.westStops).forEach((e) => {
    westStations.push(e.spill());
  });
  res.json({eastStations: eastStations, westStations: westStations});
});

app.listen(app.get('port'), function(){
  console.log("Listening on port "+app.get('port'));
});
