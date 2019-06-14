$(function() {
  let socket = io(); //client namespace
  let move = 1;
  let play = true;
  $('#main [id^="block"]').click(function(e) {
    e.preventDefault();
    if ($(this).text() === "" && play) {
      globalThis;
      //Every other number or even number%2 = 0 - thus every other click will be O
      if (move % 2 === 1) {
        var playerMove = "X";
        //$("p", this).text(playerMove);
      } else {
        var playerMove = "O";
        //$("p", this).text(playerMove);
      }

      move++;
      socket.emit("show value", playerMove);
      socket.emit("player move", playerMove);
      return false;
    }
  });

  //socket listener
  socket.on("player move", function(playerMove) {
    $('[id^="value"]').innerHTML = playerMove;
  });

  //login user
  // $('#btn_login').click(function (e) {
  //     e.preventDefault();
  //     socket.emit('user login', $('#login_txt').val());
  //     return false;
  // });

  // //logout user
  // $('#btn_quit').click(function (e) {
  //     e.preventDefault();
  //     socket.emit('leave chat');
  //     return false;
  // });

  // $('form').submit(function (e) {
  //     e.preventDefault();

  //     //GET DATA IN OBJECT
  //     let userMsg = {};
  //     userMsg.name = $('#login_txt').val();
  //     userMsg.msg = $('#txt_msg').val();
  //     socket.emit('show value', userMsg);
  //     //calling socket emit message
  //     //first event chat msg, second is showing the value in the socket listener
  //     socket.emit('chat message', userMsg);
  //     $('#txt_msg').val('');
  //     return false;
  // });

  // //SOCKET LISTENERS
  // socket.on('chat message', function (userMsg) {
  //     $('#messages').append($('<li>').text(userMsg.name + ":  " + userMsg.msg));
  // });

  // socket.on('user login', function (user) {
  //     $('#users').append($('<li>').text(user));
  // });

  // socket.on('leave chat', function (userMsg) {
  //     $('#messages').append($('<li>').text($('#login_txt').val() + "  has disconnected"));
  //     //$('#users').remove(userMsg.name);
  //     socket.disconnect();
  // });
});
