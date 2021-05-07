 const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body= Matter.Body;
  const Render= Matter.Render;
 
  var engine,world;
  var snowImg; 
  var maxSnow=100;
  var body;
  var snow= [];
  var girl, girlImg;

function preload(){
  snowImg = loadImage("snow2.jpg");
  girlImg= loadImage("girl.png");

}

function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
   
  girl=createSprite(500,320,20,20);
  girl.addImage(girlImg);
  girl.scale=0.2;


  

}
function draw() {
  background(snowImg); 

  
  Engine.update(engine);

  if (keyDown(RIGHT_ARROW)){
     girl.x= girl.x+10;
  }
  if(keyDown(LEFT_ARROW)){
    girl.x= girl.x-10;
  }
  
   snowfall();

   drawSprites();

}

function snowfall(){
  for(var i=0; i<maxSnow; i++){
    snow.push(new Snow(random(0,500),random(0,500)))
  }
  for(var i=0; i<maxSnow; i++){
    snow[i].display();
    snow[i].update();
  }

}