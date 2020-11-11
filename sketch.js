var speed, weight, thickness,damage;
var bullet, wall;


function setup() {
  createCanvas(2000,2000);

  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 40, 20);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    bullet.x=wall.x-(wall.width)/2;

    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor="red";
      bullet.shapeColor="blue";
      textSize(30);
      stroke("blue");
      fill("red");
      text("Wall has failed :(", 800, 200);
    }

    else
    {
      wall.shapeColor="green";
      bullet.shapeColor="orange";

      textSize(30);
      stroke("orange");
      fill("green");
      text("Wall has succeeded :)", 800, 200);
    }
  }



  drawSprites();
}
