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
