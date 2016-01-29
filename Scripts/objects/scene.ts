module objects {
    //Scene Class
    export class Scene extends createjs.Container{
        //Constructor
        constructor(){
            super();
            this.start();
        }
        
        //Add game objects to scene in this method
        public start():void{
            stage.addChild(this);//"this" refers to this object; the scene.
        }
        
        //update game objects in scene.
        public update():void{
            
        }
        
    }
}