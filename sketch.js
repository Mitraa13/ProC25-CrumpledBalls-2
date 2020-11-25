var paperobject,ground,bottom,rod1,rod2;
var bgimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
   bgimg = loadImage("city.jpg")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paperobject = new paper(100,230,15)
	ground = new Ground(600,550,1200,20)
	bottom = new DustBin(1075,480,50,50)
	rod1 = new Side(1020,480,10,100)
	rod2 = new Side(1125,480,10,100)
	                                                            

}


function draw() {

  rectMode(CENTER);

  background(bgimg);

  paperobject.display();
  ground.display();
  bottom.display();
  rod1.display();
  rod2.display();
  
  drawSprites();

  textSize(20);
  fill("black");
  stroke("black");
  text("Press Up Arrow key!!!",100,100);
}


function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperobject.Body,paperobject.Body.position,{x:47,y:-47});
	}
}



