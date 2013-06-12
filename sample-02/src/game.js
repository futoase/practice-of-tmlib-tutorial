console.log("loaded game.js");

var GAME = GAME || {};

$(document).ready(function() {
  (function(screen) {
    screen.SCREEN_WIDTH = 640;
    screen.SCREEN_HEIGHT = 960;
  }(GAME));
});
