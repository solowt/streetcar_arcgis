var request = require('request');
var Nightmare = require('nightmare');
var baseURL = "http://www.nextbus.com/customStopSelector/stopSelectorForIFrame.jsp?r=h_route&a=dc-streetcar"

var validEastStops = ["hunion","h3east","h5east","h8east","h13east","ben15east","ben19east"];
var validWestStops = ["benokwest","ben19west","ben15west","h13west","h8west","h5west","h3west"]
var validDirections = ["east","west"];

function addDirection(dir){
  return baseURL+"&d="+dir;
}

// then pass in the url with the direction added and add the stop
function addStop(stop, url){
  return url+"&s="+stop;
}

function makeClient(){
  return new Nightmare();
}

// pass in a completed url to this function to get data back
// data will be in the form of 3 numbers in an array (always ascending)
// i.e. [2,15,23]
function ping(url,client){
  return new Promise(function(resolve, reject){
    client.goto(url)
      .evaluate(function () {
        return document.querySelector('title').text
      })
      .end()
      .then(function (result) {
        var digits = result.match(/\d{1,2}/g);
        resolve(digits);
      });
  });
}

// iterates through an array of stops (strings) and
// performs a ping function on each one based on the
// url construction specified above
function iterStops(array, dir){
  var counter = 0;
  var returnArray = [];
  return new Promise((resolve, reject) =>{
    array.forEach((e,i) => {
      var url = addStop(e, addDirection(dir));
      ping(url, makeClient()).then((timesArr) => {
        returnArray.push({station: e, times: timesArr});
        console.log(i);
        if (++counter === validEastStops.length){
          resolve(returnArray);
        }
      });
    });
  });
}

module.exports = {
  iterStops: iterStops,
  eastStops: validEastStops,
  westStops: validWestStops
}
