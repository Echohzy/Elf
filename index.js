'use strict';
var http = require('http');
var fs = require('fs');
var requiredAttr = ["imageUrl", "imagePath"];

module.exports = function(options){
  options&&required.forEach(function(item){
    if(!options[item]){
      throw "can\'t find " + item;
      return;
    }
  });
  http.get(options.imageUrl, function(res){
      var img = "";
      res.setEncoding("binary");
      res.on("data", function(chunk){
          img+=chunk;
      });
      res.on("end", function(){
          fs.writeFile(options.imagePath, img, "binary", function(err){
              if(err){
                  console.log(err);
              }
          });
      });
  });
}

