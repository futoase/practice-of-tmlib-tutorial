console.log("loaded main_scene.js");

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
          text: "This scene is MainScene.",
          fontSize: 30,
          align: "left"
        }] 
      }
    };

    var BUTTON_SIZE_X = 256;
    var BUTTON_SIZE_Y = 128;
    var BUTTON_COLOR = "green";
    var BUTTON_TEXT = "This is button!";
    var BUTTON_X = screen.SCREEN_WIDTH / 2;
    var BUTTON_Y = screen.SCREEN_HEIGHT / 2;

    var HEART_SIZE = 128;
    var HEART_X = screen.SCREEN_WIDTH / 2;
    var HEART_Y = screen.SCREEN_HEIGHT / 2 - BUTTON_SIZE_Y;

    screen.MainScene = tm.createClass({
      superClass: tm.app.Scene,
      init: function() {
        this.superInit();

        this.fromJSON(UI_SETTING_STORE.LABELS);

        this.addEventListener("pointingend", function(event) {
          event.app.replaceScene(screen.EndScene());
        });

        var button = tm.app.GlossyButton(
          BUTTON_SIZE_X,
          BUTTON_SIZE_Y,
          BUTTON_COLOR,
          BUTTON_TEXT
        );
        button.position.set(BUTTON_X, BUTTON_Y);
        this.addChild(button); 

        var heart = tm.app.HeartShape(HEART_SIZE, HEART_SIZE);
        heart.position.set(HEART_X, HEART_Y);
        this.addChild(heart);
      }
    });
  }(GAME));
});
