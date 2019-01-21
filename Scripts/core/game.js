// IFFE -Immediteate INvoke Funciotns Expression
/*
closure
calls an anonymous self-executing function
anything n braces is in a closure. wont go to global namespace
*/
(function () {
    //global game variables
    var canvas = document.getElementById("canvas");
    var stage;
    //let helloLabel:createjs.Text;
    var helloLabel;
    function Init() {
        console.log("initialization start");
        Start();
    }
    function Start() {
        console.log("starting application");
        //initialize creatJS
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 fps;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        //helloLabel.rotation +=5;
        stage.update();
    }
    function Main() {
        console.log("game started");
        helloLabel = new objects.Label("Hello world", "40px", "Consolas", "#000000", 320, 240, true);
        /*
        helloLabel = new createjs.Text("hello world", "40px Consolate", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() *0.5;
        */
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map