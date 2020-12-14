const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,250,350,30);
	
	bobObject1 = new Bob(280,450,30);
	bobObject2 = new Bob(340,450,30);
	bobObject3 = new Bob(400,450,30);
	bobObject4 = new Bob(460,450,30);
	bobObject5 = new Bob(520,450,30);
	
	

	rope1 = new Rope(bobObject1.body, roof.body, -120, 0);
	rope2 = new Rope(bobObject2.body, roof.body,-60 , 0);
	rope3 = new Rope(bobObject3.body, roof.body,0, 0);
	rope4 = new Rope(bobObject4.body, roof.body,60, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 120, 0);

	console.log(rope1)
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine)

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  

 
 
}
function keyPressed(){

	if(keyDown(UP_ARROW)){
		
		Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:0});
	
	}

}