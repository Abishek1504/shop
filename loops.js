const { Image } = require('image-js');


Image.load('scaled.png').then(function (image) {
    var grey = image.getValueXY(0,0,1);
    console.log(grey); 
  });



  console.log("hello world");