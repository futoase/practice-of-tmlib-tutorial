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
    
    var HEART_SIZE = 64;
    var HEART_NUM = 10;
    var HEART_PARAM = {
      fillStyle: "pink"
    };

    screen.MainScene = tm.createClass({
      superClass: tm.app.Scene,
      init: function() {
        this.superInit();

        this.fromJSON(UI_SETTING_STORE.LABELS);

        this.addEventListener("pointingend", function(event) {
          event.app.replaceScene(screen.EndScene());
        });
 
        for(var i = 0; i < HEART_NUM; i++) {
          HEART_PARAM.fillStyle = tm.graphics.Color.createStyleHSLA(
            Math.rand(0, 360), 95, 75, 0.8
          );
          var heart = tm.app.HeartShape(
            HEART_SIZE, 
            HEART_SIZE, 
            HEART_PARAM
          );
          heart.position.set(
            Math.rand(HEART_SIZE / 2, screen.SCREEN_WIDTH - HEART_SIZE / 2),
            Math.rand(HEART_SIZE / 2, screen.SCREEN_HEIGHT - HEART_SIZE)
          );
          this.addChild(heart);
        }
      }
    });
  }(GAME));
});
