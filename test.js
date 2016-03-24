// var request = require('request');
// var cheerio = require('cheerio');
var Nightmare = require('nightmare');
var fs = require('fs');
var http = require('http');


var night = new Nightmare()
  .goto("http://www.nextbus.com/customStopSelector/stopSelectorForIFrame.jsp?r=h_route&a=dc-streetcar&d=east&s=hunion")
  .evaluate(function () {
    return document.querySelector('title').text
  })
  .end()
  .then(function (result) {
    console.log(result);
  });
