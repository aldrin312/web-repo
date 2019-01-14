
// IFFE -Immediteate INvoke Funciotns Expression
/*
closure
calls an anonymous self-executing function
anything n braces is in a closure. wont go to global namespace
*/

(function(){
    function Init() {
        console.log("initialization start");    

        let x: number = 10;

    }

    window.onload =Init;

})();   