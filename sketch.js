
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var apple
var broc
var Background






function preload() {
Backgroundimg = loadImage("Background.jpeg")
appleimg = loadImage("apple.png")
brocimg = loadImage("broc.png")
}





function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  apple = Bodies.rectangle(200,370,5,5)
  World.add(world,apple);
  broc = Bodies.rectangle(250,370,5,5)
  World.add(world,broc);
  
  
}


function draw() 
{
  background(Backgroundimg);
  Engine.update(engine);
  image(appleimg,apple.position.x,apple.position.y,5,5);
  image(brocimg,broc.position.x,broc.position.y,5,5);
  Matter.Body.setvelocity(apple.Body,{
    x:0, y:2
  });
  Matter.Body.setvelocity(broc.Body,{
    x:0, y:3.5
  })
}