let app = require("express")();
let express = require('express');
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static('public'));

io.on("connection", function(socket) {
  console.log("a user connected");

  //onclick when user makes move
  socket.on('player move', function (player){
    console.log("Player " + player + " made a move")
  });

  //shows either x or o
  socket.on('show value', function (val) {
    console.log(val);
    io.emit('show value', val);
});
});

http.listen(process.env.PORT || 3000, function () {
  console.log("Waiting for visitors")
});
