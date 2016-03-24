var Station = require('../models/station.js');

var nameLocMap = {
  benokwest: [-76.96976, 38.89775],
  ben19west: [-76.97603, 38.89884],
  ben15west: [-76.98306, 38.90006],
  h13west: [-76.98816, 38.90026],
  h8west: [-76.99488, 38.90026],
  h5west: [-76.99931, 38.90026],
  h3west: [-77.00164, 38.90026],
  hunion: [-77.00520, 38.90021],
  h3east: [-77.00110, 38.90016],
  h5east: [-76.99980, 38.90016],
  h8east: [-76.99515, 38.90016],
  h13east: [-76.98852, 38.90016],
  ben19east: [-76.97603, 38.89884],
  ben15east: [-76.98306, 38.90006]
}

function buildStations(stationArray){
  var rArray = [];
  stationArray.forEach((e,i) => {
    console.log(e)
    console.log(nameLocMap[e][0]);
    var station = new Station({name: e, sequence: i+1, lat: nameLocMap[e][0], long: nameLocMap[e][1] });
    rArray.push(station);
  });
  return rArray.sort(compareNums)
}

function compareNums(a, b){
  return a.sequence-b.sequence;
}

module.exports = {
  buildStations: buildStations
}
