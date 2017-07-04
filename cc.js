$(function() {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
  //$("#display_block").hide();
  $("#setting_block").hide();

  //$("#big_menu").hide();
  //$("#control_menu").hide();

  $('body').css("background-color","black");
  $('body').css("color","black");

  //var colors = ["w3-text-red", "w3-text-pink", "w3-text-purple", "w3-text-deep-purple", "w3-text-indigo", "w3-text-blue", "w3-text-light-blue", "w3-text-cyan"];
  var colors = ["w3-text-red", "w3-text-blue", "w3-text-green", "w3-text-orange"];
  var i = 0;
  var listItems = $("#sortable li");
  listItems.each(function(idx, li) {
    $(li).addClass(colors[i]);
    i = i + 1;
  });
  $("#sortable li").css("color", "black");
  $("#big_menu").addClass("w3-text-red");

  $("#control_menu span").addClass("w3-text-light-blue");

  // setting_block
  /*
        $("#setting_block h1").css("border-style", "solid");
        $("#setting_block h1").css("border-width", "1px");
        $("#setting_block h1").css("width", "50%");
        $("#setting_block h1").addClass("w3-border-red");
        $("#setting_block h1").css("padding", "0.1em");
        $("#setting_block h1").css("margin", "0.1em");
        */

  /*
        $("#setting_block a").addClass("w3-button w3-theme w3-hover-blue w3-hover-shadow");
        $("#setting_block li").addClass("w3-win-phone-red");
        $("#setting_block li").css("margin", "0.3em");
        $("#setting_block li").css("padding", "0.3em");
        $("#setting_block li").css("width", "50%");

        $("#setting_block ul").css("list-style","none");
        $("#setting_block ul").css("padding-left","0");
        $("#setting_block ul").css("padding-top","0");

  //$("select").addClass("w3-select");
  */
  var g_height = Math.floor($(window).height()*0.7);
  //var g_height = $(document).height();
  //
  var li_height = (g_height/10);
  $("#sortable li").css("height", li_height +"px");
  $("#sortable li").css("line-height", li_height +"px");
  $("#sortable li").css("font-size", (li_height/2) + "px");
  $("#sortable li").css("padding", (li_height/6) + "px");
  $("#sortable li").css("padding-left", (li_height/6) + "px");
  $("#sortable li").css("padding-left", (li_height/6) + "px");
  $("#sortable li").css("margin", (li_height/12) + "px");
  $("#sortable span").css("right", (li_height) + "px");

  $("#big_menu").css("margin", (li_height/12) + "px");
  $("#player_display").css("height", li_height + "px");
  $("#player_display").css("line-height", li_height + "px");
  $("#player_display").css("font-size", (li_height/2) + "px");
  $("#timer_display").css("height", (li_height*3) + "px");
  $("#timer_display").css("line-height", (li_height*3) + "px");
  $("#timer_display_s").css("font-size", (li_height*3/2) + "px");
  $("#timer_display_ms").css("font-size", (li_height*3/2/2) + "px");

  $("#control_menu").css("height", (li_height) + "px");
  $("#control_menu").css("line-height", (li_height) + "px");
  $("#control_menu span").css("margin", (li_height/12) + "px");
  $("#control_menu span").css("width", ($(window).width()*0.8/3) + "px");
  $("#control_menu span").css("font-size", (li_height/2) + "px");

});

// bind function
$("#nexPlay").click(function() {
  playNext();
});

$("#pausePlay").click(function() {
  playPauseTimer();
});

