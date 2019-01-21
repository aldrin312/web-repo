module objects{             //module = public
    export class Label extends createjs.Text{     //export = public
        //Variables
        //Constructor
        constructor(labelString:string, fontsize:string, fontFamily:string, fontColor:string,x:number = 0, y:number = 0,isCentered:boolean = false){
            super(labelString,fontsize + " " + fontFamily,fontColor); //creates a default text object
            if(isCentered){
                this.regX = this.getMeasuredWidth() *0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;

            }

            this.x = x;
            this.y = y;
            
        }
        //Methods / Function
    }
}