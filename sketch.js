const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball;

var ground;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
   restitution:1.0

  }
  ball = Bodies.circle(200,100,20,ball_options);

 var ground_options={
isStatic:true


 }
  ground=Bodies.rectangle(400,380,800,50,ground_options);

  World.add(world,ball);
  World.add(world,ground);
}

function draw() {
  background(255,255,255);

  Engine.update(engine);

  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,50,50);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);


  
  
  
}