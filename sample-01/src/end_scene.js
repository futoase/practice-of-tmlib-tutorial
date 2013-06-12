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
