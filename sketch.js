//Making variables
var speed, weight;
var wall, bullet;
var thickness;
var bulletRightEdge

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  thickness = random(22,83);

  bullet = createSprite(10,200,40,10);
  bullet.shapeColor = "cyan";

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "white";
  
  bullet.velocityX = speed;


  }

function draw() {
  background("black");  

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage > 10){
     wall.shapeColor = "red";
    }
    if (damage < 10){
      wall.shapeColor = "lightgreen";
    }
  }
  

  drawSprites();
}

function hasCollided(lbullet, lwall) {

   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;

   if (bulletRightEdge >= wallLeftEdge){
     return true;
   }
  return false;
}


