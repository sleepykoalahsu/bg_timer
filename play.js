
var g_cur_play = -1;
var g_max_play = 4-1;

// for play sound control
var g_play_tmp  = 0;
var g_play_tmp2 = 0;
var g_play_tmp3 = 0;

var g_y;
var g_timerPause = 0;

var g_players = [
  {"name": "player1b", color: 0, pos: 0, time: 0},
  {"name": "player2b", color: 1, pos: 1, time: 0},
  {"name": "player3b", color: 2, pos: 2, time: 0},
  {"name": "player4b", color: 3, pos: 3, time: 0}
];

// audio
function audio_endPlay() {
  if (g_play_tmp == 1) {
    g_play_tmp = 2;
  }
  if (g_play_tmp2 != 1) {
    playStartTimer();
  }
}

function audio_startPlay(tmp) {
  var vid = document.getElementById("cc");
  //var vid_qval = "not";
  var vid_qval = tmp;
  var vid_lang = "zh-tw"; // lang ->en|zh-tw
  vid.src = "http://translate.google.com/translate_tts?ie=utf-8&tl="+vid_lang+"&q="+vid_qval+"&client=tw-ob";
  vid.play();
}

// main

function playNext() {
  var cc = getPlayerIdByPos(g_cur_play);
  myPlay(cc);
}

function playClear() {
  g_play_tmp  = 0;
  g_play_tmp2 = 0;
  g_play_tmp3 = 0;
  g_timerPause = 0;
  clearInterval(g_y);
}

function myPlay(id) {
  playClear();
  playStartName(id);
}

function playStartName(id) {

  g_play_tmp = 1;

  $("#player_display").text("["+ g_players[id].name + "]");

  audio_startPlay(g_players[id].name);
}

function getTimerLimit() {
  var timer_limit = document.getElementById("timer_limit");
  return parseInt(timer_limit.value,10);
}

function playStartTimer() {

  g_play_tmp2 = 1;

  var time_cc = getTimerLimit() + 1;

  var t = new Date();
  t.setSeconds(t.getSeconds() + time_cc);
  var countDownDate = t.getTime();

  var cc_tmp;
  var cc_tmp2;

  // Update the count down every 1 second
  g_y = setInterval(function() {

    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    if (g_timerPause == 1) {
      var t = new Date();
      //t.setSeconds(t.getSeconds() + cc_tmp2);
      countDownDate = t.getTime() + cc_tmp2;

      $("#timer_display_s").text("00:"+pad(Math.floor(distance/1000),2)+".");
      $("#timer_display_ms").text(pad(Math.floor(distance/100)%100,2));
    }
    else if (g_timerPause == 0) {

      // Output the result in an element with id="demo"
      $("#timer_display_s").text("00:"+pad(Math.floor(distance/1000),2)+".");
      $("#timer_display_ms").text(pad(Math.floor(distance/100)%100,2));

      var cc = Math.floor(distance/1000);
      cc_tmp2 = distance;

      // If the count down is over, write some text 
      if (distance < 0) {
        $("timer_display_s").text("EXPIRED");
        $("timer_display_ms").text("");
        clearInterval(g_y);
      }
      else if (cc % 10 == 0 && (cc_tmp != cc)) {
        //clearInterval(x);
        audio_startPlay(cc);
        cc_tmp = cc;
      }
      else if ((cc < 6) && (cc_tmp != cc)) {
        audio_startPlay(cc);
        cc_tmp = cc;
      }
    }

  }, 10);

}

function playPauseTimer() {
  if (g_timerPause == 0) {
    g_timerPause = 1;
  }
  else {
    g_timerPause = 0;
  }
}

function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

function getPlayerIdByName(name) {
  var i = 0;
  for (i=0;i<=g_max_play;i++) {
    if (g_players[i].name == name) {
      return i;
    }
  }
  return -1;
}

function getPlayerIdByPos(pos) {
  var i = 0;
  for (i=0;i<=g_max_play;i++) {
    if (g_players[i].pos == pos) {
      return i;
    }
  }
  return -1;
}


function sortableChange() {
  var listItems = $(".spanleft");
  var i = 0;
  listItems.each(function(idx, li) {
    var id = getPlayerIdByName($(li).text());
    g_players[id].pos = i;
    //alert(i + " "+ g_players[i].name + " " +g_players[i].pos);
    i = i +1;
  });
}
  

// overflow timer for each player
// sortable
// set name & color

