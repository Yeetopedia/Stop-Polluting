
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	
	paperob = new Paper(50,370,30);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
   

  groundObject.display();
  dustbinObj.display();
  paperob.display();
 

}

function keyPressed(){

	if(keyDown("space")){
	  Matter.Body.applyForce(paperob.body,paperob.body.position,{x:30,y:90});
	
	}
	}


