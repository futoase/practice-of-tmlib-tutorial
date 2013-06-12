console.log("loaded title_scene.js");

$(document).ready(function() {
  (function(screen) {

    var UI_SETTING_STORE = {
      LABELS: {
        children: [{
          type: "Label",
          name: "label",
          x: 40,
          y: 80,
          width: screen.SCREEN_WIDTH,
          fillStyle: "red",
          text: "This scene is TitleScene.",
          fontSize: 30,
          align: "left"
        }] 
      }
    };

    screen.TitleScene = tm.createClass({
      superClass: tm.app.TitleScene,
      init: function() {
        this.superInit({
          title: "tmlib Test",
          width: screen.SCREEN_WIDTH,
          height: screen.SCREEN_HEIGHT
        });

        this.fromJSON(UI_SETTING_STORE.LABELS);

        this.addEventListener("pointingend", function(event) {
          event.app.replaceScene(screen.MainScene()); 
        });
      }
    });
  }(GAME));
});
