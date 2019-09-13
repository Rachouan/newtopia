//Make Connection
var socket = io.connect("http://localhost:4000");

//Qurey Dom
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');


//EMIT EVENTS
/*btn.addEventListener('click',function (e) {
  e.preventDefault();
  socket.emit('chat',{
    message: message.value,
    handle:handle.value
  });
});*/

socket.on('chat', function(data) {
  console.log(data);
  output.innerHMTL += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

$(function() {
  $(document)
    .on("mousemove", ".country", function(event) {

      /**
       * Half of the `ItemCard` width
       * @type {integer}
       */
      var halfW = ($(this).width() / 2);

      /**
       * Half of the `ItemCard` height
       * @type {integer}
       */
      var halfH = ($(this).height() / 2);

      /**
       * Mouse cursor X coordinate
       * @type {integer}
       */
      var coorX = (halfW - (event.pageX -  $(this).offset().left));

      /**
       * Mouse cursor Y coordinate
       * @type {integer}
       */
      var coorY = (halfH - (event.pageY - $(this).offset().top));

      /**
       * X Rotation degree of `ItemCard`
       * @type {integer}
       */
      var degX = ((coorY / halfH) * 10) + 'deg'; // max. degree = 10

      /**
       * Y Rotation degree of `ItemCard`
       * @type {integer}
       */
      var degY = ((coorX / halfW) * -10) + 'deg'; // max. degree = 10

      /**
       * Add the inline styles
       */

      $(this).css('transform', function() {
          return 'perspective( 1000px ) translate3d( 0, 0 , 0px ) scale(1.1) rotateX(' + degX + ') rotateY(' + degY + ')';
        });

      /*$(this).find('.country-summary')
        .css('transform', function() {
          return 'perspective( 800px ) translate3d( -50%, -50% , 30px )  rotateX(' + degX + ') rotateY(' + degY + ')';
        });*/
      $(this).find('.country-bg')
        .css('transform', function() {
          return 'perspective( 800px ) translate3d( 0, 0 , -2px ) scale(0.9) rotateX(' + degX + ') rotateY(' + degY + ')';
        });
    })
    .on("mouseout", ".country", function() {
      $(this).removeAttr('style')
        .find('.country-summary')
        .removeAttr('style');
      $(this).find('.country-bg')
        .css('transform', function() {
          return 'perspective( 800px ) translate3d( 0, 0 , -2px ) scale(1) rotateX(0) rotateY(0)';
        });
    });
});
