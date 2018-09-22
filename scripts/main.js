$(document).ready(function() {
  var event1 = new Event();
  var magnifier1 = new Magnifier(event1);

  magnifier1.attach({
    thumb: '#js-thumb-options',
    large: 'images/large_image.jpg',
    largeWrapper: 'js-large-wrapper-options',
    zoomable: true,
    onthumbenter: function(event) {
      console.log('\n onthumbenter ...');
    },
    onthumbmove: function(event) {
      console.log('\n onthumbmove ...');
      
    },
    onthumbleave: function(event) {
      console.log('\n onthumbleave ...');
    },
    onzoom: function(event) {
      console.log('\n onzoom ...');

      // all callback can access properties below
      console.log('thum: ', event.thumb);
      console.log('lens: ', event.lens);
      console.log('large: ', event.large);
      console.log('x: ', event.x);
      console.log('y: ', event.y);

      // only onzoom callback can access properties below
      console.log('zoom: ', event.zoom);
      console.log('w: ', event.w);
      console.log('h: ', event.h);
    }
  });

  var event2 = new Event();
  var magnifier2 = new Magnifier(event2);

  magnifier2.attach({
    thumb: '#js-thumb-data-attributes'
  });
});
