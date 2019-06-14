jQuery(document).ready(function() {
  //Winning Messages
  let xwin = document.getElementById("xmsg");
  let owin = document.getElementById("omsg");
  let cats = document.getElementById("cats");
  let mainTitle = document.getElementById("title");

  //Game Logic
  let move = 1;
  let play = true;

  $('#main [id^="block"]').click(function() {
      if (winner() === 0 && move === 10) {
        mainTitle.style.display = "none";
        cats.style.display = "block";
        play = false;
      } else if (winner() === "X") {
        mainTitle.style.display = "none";
        xwin.style.display = "block";
        play = false;
      } else if (winner() === "O") {
        mainTitle.style.display = "none";
        owin.style.display = "block";
        play = false;
      }   
  });
  //               --Winner checker--
  function winner() {
    let v1 = $("#value1").text();
    let v2 = $("#value2").text();
    let v3 = $("#value3").text();
    let v4 = $("#value4").text();
    let v5 = $("#value5").text();
    let v6 = $("#value6").text();
    let v7 = $("#value7").text();
    let v8 = $("#value8").text();
    let v9 = $("#value9").text();

    //Rows
    if (v1 === v2 && v2 === v3 && v3 != "") {
      return v3;
    } else if (v4 === v5 && v5 === v6 && v6 != "") {
      return v6;
    } else if (v7 === v8 && v8 === v9 && v9 != "") {
      return v9;
    }
    //Columns
    else if (v1 === v4 && v4 === v7 && v7 != "") {
      return v7;
    } else if (v2 === v5 && v5 === v8 && v8 != "") {
      return v8;
    } else if (v3 === v6 && v6 === v9 && v9 != "") {
      return v9;
    }
    //Diagonals
    else if (v1 === v5 && v5 === v9 && v9 != "") {
      return v9;
    } else if (v3 === v5 && v5 === v7 && v7 != "") {
      return v7;
    }
    //No Winner
    return 0;
  } //end of winner function

  //New Game Button
  let newGame = document.getElementById("refresh");
  newGame.onclick = refreshPage;
  function refreshPage() {
    window.location.reload();
  }
});
