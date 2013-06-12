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
        },
        {
          type: "Label",
          name: "gameLimitTimeLabel",
          x: 140,
          y: 120,
          width: screen.SCREEN_WIDTH,
          fillStyle: "white",
          text: " ",
          fontSize: 24,
          align: "left" 
        }] 
      }
    };
    
    var HEART_SIZE = 64;
    var HEART_NUM = 10;
    var HEART_PARAM = {
      fillStyle: "pink"
    };

    var GAME_LIMIT_TIME = 300;

    screen.MainScene = tm.createClass({
      superClass: tm.app.Scene,
      init: function() {
        this.superInit();

        this.fromJSON(UI_SETTING_STORE.LABELS);
        this.heartGroup = tm.app.CanvasElement();

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
          heart.interaction.enabled = true; 
          heart.interaction.boundingType = "circle";
          heart.addEventListener("pointingend", function() {
            this.remove();
          });

          this.heartGroup.addChild(heart);
        }

        this.addChild(this.heartGroup);

        this.gameLimitTime = GAME_LIMIT_TIME;
      },
      update: function(app) {
        --this.gameLimitTime;
        this.gameLimitTimeLabel.text = (
          "Remaining time is: " + 
          ((this.gameLimitTime / 30) | 0)
        );
        if (this.gameLimitTime <= 0) {
          app.replaceScene(screen.EndScene(0));
        }
        if (this.heartGroup.children.length <= 0) {
          app.replaceScene(screen.EndScene(this.gameLimitTime));
        } 
      }
    });
  }(GAME));
});
