const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	var canvas = createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	//Create a Ground
  ground = new Ground(600, 380,1200,20);
  Paper = new paper(100,350,20);
  /*dustbin1 = new Dustbin(1000,355,200,20);
  dustbin2 = new Dustbin(900,315,20,100);
  dustbin3 = new Dustbin(1100,315,20,100);*/
  dustbin = new Dustbin();
 	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  
  ground.display();
  Paper.display();
  dustbin.display();
 /* dustbin1.display();
  dustbin2.display();
  dustbin3.display();*/
  Paper.debug=true
 // dustbin1.debug=true
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW ){
     Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
   }
   

}

