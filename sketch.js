var bath1;
var bath2;
var bath;
var brush;
var drink1;
var drink2;
var eat1;
var eat2;
var eat;
var gym1;
var gym2;
var gym11;
var gym12;
var gym;
var iss;
var move;
var move1;
var moving;
var sleep;

var astronaut;

function preload(){
  bath1 = loadImage("bath1.png");
  bath2 = loadImage("bath2.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  brush = loadImage("brush.png");
  drink1 = loadImage("drink1.png");
  drink2 = loadImage("drink2.png");
  eat1 = loadImage("eat1.png");
  eat2 = loadImage("eat2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  gym1 = loadImage("gym1.png");
  gym2 = loadImage("gym2.png");
  gym11 = loadImage("gym11.png");
  gym12 = loadImage("gym12.png");
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  iss = loadImage("iss.png");
  move = loadImage("move.png");
  move1 = loadImage("move1.png");
  moving = loadAnimation("move.png", "move1.png");
  sleep = loadImage("sleep.png");
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addImage(sleep);
  astronaut.scale = 0.1;

  createEdgeSprites();
}

function draw() {
  background(iss);  
  textSize(25);
  fill("white");
  text("Instructions: ", 20, 50);
  text("UP arrow = brushing", 20, 70);
  text("DOWN arrow = working out", 20, 90);
  text("LEFT arrow = eating", 20, 110);
  text("RIGHT arrow = bathing", 20, 130);
  text("m key = moving", 20, 150);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("working out", gym);
    astronaut.changeAnimation("working out");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.velocityX = 2;
    astronaut.velocityY = -3;
  }

  if (astronaut.x == 0||astronaut.x == 800||astronaut.y == 0||astronaut.y == 350) {
    astronaut.x = 400;
    astronaut.y = 200;
  }

  drawSprites();
}