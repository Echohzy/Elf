'use strict';
var https = require('https');
var fs = require('fs');
var required = ["imageUrl", "imagePath"];

module.exports = function(options){
  options&&required.forEach(function(item){
    if(!options[item]){
      throw "can\'t find " + item;
      return;
    }
  });
  https.get(options.imageUrl, function(res){
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

