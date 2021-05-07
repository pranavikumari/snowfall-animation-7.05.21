class Snow{
    constructor(x,y){
        var options = {
            friction: 0.01,
            restitution:0.1          
        }
        this.body = Bodies.circle(x,y,2,options);
        this.image = loadImage("finalsnow.png");
        this.radius = 1;
        World.add(world, this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700), y:random(-200,-100)})
        }
    }


    display(){
        noStroke();
        fill(0,0,255);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);

    }
}

