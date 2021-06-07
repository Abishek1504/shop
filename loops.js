const { Image } = require('image-js');

// Loading an image is asynchronous and will return a Promise.
Image.load('IMG-20190906-WA0031.jpg').then(function (image) {
  console.log('Width', image.width);
  console.log('Height', image.height);
  console.log('colorModel', image.colorModel);
  console.log('components', image.components);
  console.log('alpha', image.alpha);
  console.log('channels', image.channels);
  console.log('bitDepth', image.bitDepth);
  var grey = image.grey();
  grey.save('cat-grey.jpg');
  var components = image.split();
  components[0].save('cat-red.jpg');
  components[1].save('cat-green.jpg');
  components[2].save('cat-blur.jpg');
});

Image.load('scaled.png').then(function (image) {
    var grey = image.getValueXY(0,0,1);
    console.log(grey); 
  });