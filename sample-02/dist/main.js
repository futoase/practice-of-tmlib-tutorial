console.log("loaded game.js");

var GAME = GAME || {};

$(document).ready(function() {
  (function(screen) {
    screen.SCREEN_WIDTH = 640;
    screen.SCREEN_HEIGHT = 960;
  }(GAME));
});

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

console.log("loaded end_scene.js");

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

    var RESULT_PARAM = {
      score: 256,
      msg: "Tutorial! Shooting GAME!",
      hashtags: ["hogehoge", "mogemoge"], 
      url: "http://futoase.github.io/",
      width: screen.SCREEN_WIDTH,
      height: screen.SCREEN_HEIGHT,
      related: "tmlib.js TUTORIAL!" 
    };

    screen.EndScene = tm.createClass({
      superClass: tm.app.ResultScene,
      init: function() {
        this.superInit(RESULT_PARAM);

        this.fromJSON(UI_SETTING_STORE.LABELS);

        this.addEventListener("pointingend", function(event) {
          event.app.replaceScene(screen.TitleScene());
        });
      }
    });
  }(GAME));
});
