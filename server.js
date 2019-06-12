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
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
