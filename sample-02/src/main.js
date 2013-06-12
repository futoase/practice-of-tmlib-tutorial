console.log("loaded main.js");

$(document).ready(function() {
  (function(screen) {
    tm.main(function() {
      screen.app = tm.app.CanvasApp("#world");
      screen.app.resize(
        screen.SCREEN_WIDTH,
        screen.SCREEN_HEIGHT
      );      
      screen.app.fitWindow();
      screen.app.background = "rgb(0, 0, 0)";

      screen.app.replaceScene(screen.TitleScene());

      screen.app.run();
    });
  }(GAME));
});
