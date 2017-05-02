'use strict';
var https = require('https');
var fs = require('fs');
var request = require('request');
var required = ["imageUrl", "imagePath"];
var message="";

module.exports = function(options){
  
  if(!options){
    console.log("can\' find imageUrl and imagePath");
    return;
  }
  if(!options.imageUrl){
    console.log("can\' find imageUrl");
    return;
  }
  if(!options.imagePath){
    console.log("can\' find imagePath");
    return;
  }
  request(options.imageUrl)
  .on('response', function(response) {
    if(response.statusCode===200){
      response.pipe(fs.createWriteStream(options.imagePath));
    }else{
      console.log(options.imageUrl + " " +response.statusMessage);
    }
  });
}

