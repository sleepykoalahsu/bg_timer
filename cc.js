
//var colors = ["w3-text-red", "w3-text-pink", "w3-text-purple", "w3-text-deep-purple", "w3-text-indigo", "w3-text-blue", "w3-text-light-blue", "w3-text-cyan"];
var g_colors = ["w3-text-red", "w3-text-blue", "w3-text-green", "w3-text-orange"];
var g_color_name = ["red", "blue", "green", "orange"];

$(function() {
  $("#sortable").sortable();
  $("#sortable").disableSelection();

  //$("#display_block").hide();
  $("#setting_block").hide();

  $('body').css("background-color","black");
  $('body').css("color","black");

  setPlayers();

  $("#sortable li").css("color", "white");
  $("#big_menu").addClass("w3-text-red");
  $("#control_menu span").addClass("w3-text-light-blue");

  // set size
  var g_height = Math.floor($(window).height()*0.7);
  var li_height = (g_height/10);
  $("#sortable li").css("height", li_height +"px");
  $("#sortable li").css("line-height", li_height +"px");
  $("#sortable li").css("font-size", (li_height/2) + "px");
  $("#sortable li").css("padding", (li_height/6) + "px");
  $("#sortable li").css("padding-left", (li_height/6) + "px");
  $("#sortable li").css("padding-left", (li_height/6) + "px");
  $("#sortable li").css("margin", (li_height/12) + "px");
  $("#sortable span:odd").css("right", (li_height) + "px");
  $("#sortable span:odd").css("position:","absolute");

  var li_height_a = li_height*1.5;
  $("#big_menu").css("margin", (li_height/12) + "px");
  $("#player_display").css("height", li_height_a + "px");
  $("#player_display").css("line-height", li_height_a + "px");
  $("#player_display").css("font-size", (li_height_a/2) + "px");
  $("#timer_display").css("height", (li_height_a*3) + "px");
  $("#timer_display").css("line-height", (li_height_a*3) + "px");
  $("#timer_display_s").css("font-size", (li_height_a*3/2) + "px");
  $("#timer_display_ms").css("font-size", (li_height_a*3/2/2) + "px");

  $("#control_menu").css("height", (li_height) + "px");
  $("#control_menu").css("line-height", (li_height) + "px");
  $("#control_menu span").css("margin", (li_height/12) + "px");
  $("#control_menu span").css("width", ($(window).width()*0.8/3) + "px");
  $("#control_menu span").css("font-size", (li_height/2) + "px");

  // setting_block
  /*
  $("#display_block").hide();
  $("#setting_block").show();

  $('body').css("background-color","white");
  $('body').css("color","black");
  */
  $("#setting_block h1").css("border-style", "solid");
  $("#setting_block h1").css("border-width", "1px");
  $("#setting_block h1").css("width", "50%");
  $("#setting_block h1").addClass("w3-border-red");
  $("#setting_block h1").css("padding", "0.1em");
  $("#setting_block h1").css("margin", "0.1em");

  $("#setting_block a").addClass("w3-button w3-theme w3-hover-blue w3-hover-shadow");
  //$("#setting_block li").addClass("w3-win-phone-red");
  $("#setting_block li").css("margin", "0.3em");
  $("#setting_block li").css("padding", "0.3em");
  $("#setting_block li").css("width", "50%");

  $("#setting_block ul").css("list-style","none");
  $("#setting_block ul").css("padding-left","0");
  $("#setting_block ul").css("padding-top","0");

  //$("select").addClass("w3-select");
  $("select").find('option').remove().end();
  $("select").addClass(g_colors[0]);
  for (i=0;i<4;i++) {
    if (i==0)
      $("select").append("<option value="+i+" selected>"+g_color_name[i]+"</option>");
    else
      $("select").append("<option value="+i+">"+g_color_name[i]+"</option>");
  }
  var listItems = $("option");
  listItems.each(function(idx, li) {
    i=$(li).val();
    $(li).addClass(g_colors[i]);
  });

});

// bind function
$("#nexPlay").click(function() {

  if (g_cur_play == g_max_play) {
    g_cur_play = 0;
  }
  else {
    g_cur_play = g_cur_play + 1;
  }

  var cc = getPlayerIdByPos(g_cur_play);
  $("#big_menu").removeClass();
  $("#big_menu").addClass(g_colors[g_players[cc].color]);

  playNext();

});

$("#pausePlay").click(function() {
  playPauseTimer();
});

$("#setPlay").click(function() {
  $("#display_block").hide();
  $("#setting_block").show();

  $('body').css("background-color","white");
});

$("#sortable").sortable({
  stop: function(event, ui) {
    sortableChange();
  }
});

$("#goPlay").click(function() {
  $("#display_block").show();
  $("#setting_block").hide();

  $('body').css("background-color","black");
});

$("#pausePlay").click(function() {
  playPauseTimer();
});

$('select').on('change', function() {
  //alert( this.value );
  $(this).removeClass();
  $(this).addClass(g_colors[this.value]);
})

function setPlayers() {
  var i = 0;
  var listItems = $("#sortable li span:even");
  listItems.each(function(idx, li) {
    $(li).text(g_players[i].name);
    $(li).parent().addClass(g_colors[g_players[i].color]);
    i = i + 1;
  });
}

