class Blocks2{

    constructor(x,y){

        this.body = Bodies.rectangle(x, y, 40,50);
        this.width = 40;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){
        
        if(this.body.speed<7){
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            fill("pink");
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            this.Visibility = this.Visibility - 10;
            push();
            tint(255,this.Visibility);
            rect(1000,1000,this.width,this.height);
            pop();
        }
        
    }

}