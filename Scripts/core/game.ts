
// IFFE -Immediteate INvoke Funciotns Expression
/*
closure
calls an anonymous self-executing function
anything n braces is in a closure. wont go to global namespace
*/

(function(){

    //global game variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:createjs.Text;

    function Init():void {
        console.log("initialization start");    

        Start();
    }

    function Start():void{
        console.log("starting application");

        //initialize creatJS
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 fps;
        createjs.Ticker.on("tick",Update);
        Main();

    }
    function Update():void{
        helloLabel.rotation +=5;
        stage.update();

    }
    function Main():void{
        console.log("game started");
        helloLabel = new createjs.Text("hello world 123", "40px Consolate", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;

        stage.addChild(helloLabel);

    }
    window.onload =Init;

})();   