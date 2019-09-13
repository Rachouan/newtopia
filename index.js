var express = require('express');
var socket = require('socket.io');

//App express
var app = express();

var server = app.listen(4000,function () {
  console.log("PORT 4000");
});

//Static Files
app.use(express.static('public'));

//Socket Setup
var io = socket(server);

io.on("connection",function (socket) {
  console.log("SOCKET CONNECTED",socket.id);

  socket.on('chat',function (data) {
    console.log(data);
    io.sockets.emit('chat',data);
  });

});
