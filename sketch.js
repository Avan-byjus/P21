
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var groundObj, left, right;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 700, 800, 20)
	ball = new Ball(200,200,15)
  groundObj = new Ground(width/2, 670, width, 20)
  leftSide = new Ground(1100, 600, 20, 120)
  rightSide = new Ground(1250, 600, 20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.show();
  ball.show();
  groundObj.show();
  leftSide.show();
  rightSide.show()
}



// btn1 = createImg("up.png")
//   btn1.position(100,50)
//   btn1.size(50,50)
//   btn1.mouseClicked(vforce)

//   btn2 = createImg("right.png")
//   btn2.position(200,50)
//   btn2.size(50,50)
//   btn2.mouseClicked(hforce)
  
function hforce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.010, y:0})
}

function vforce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.010})
}
 function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, ball.position, {x: 80, y:-80})  
}
 }
