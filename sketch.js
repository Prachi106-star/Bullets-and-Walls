var bullet,wall;

var speed,weight,thickness;
var speed2,weight2,thickness2;
var speed3,weight3,thickness3;
var speed4,weight4,thickness4;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  thickness = random(22,83);

  speed2=random(90,155);
  weight2=random(400,1500);
  thickness2 = random(22,83);

  speed3=random(10,90);
  weight3=random(400,1500);
  thickness3 = random(22,83);

  speed4=random(55,70);
  weight4=random(400,1500);
  thickness4 = random(22,83);

 
  bullet2=createSprite(50,150,50,10);
  bullet2.velocityX = speed2 ;
 wall=createSprite(1500,150,40,thickness2);
  wall.shapecolor = color("white");


  bullet3=createSprite(50,250,50,10);
  bullet3.velocityX = speed3 ;
  wall=createSprite(1500,250,40,thickness3);
  wall.shapecolor = color("white");


  bullet4=createSprite(50,350,50,10);
  bullet4.velocityX = speed4 ;
  wall=createSprite(1500,350,40,thickness4);
  wall.shapecolor = color("white");

  bullet=createSprite(50,50,50,10);
  bullet.velocityX = speed ;
  wall=createSprite(1500,50,40,thickness);
  wall.shapecolor = color("white");

  
}

function draw() {
  background("black");
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
   var damage = 0.5*weight*speed*speed/thickness*thickness*thickness; 
    if(damage<100){
      bullet.shapeColor =color(144,238,144);
 }
 
 if (damage>100) {
   bullet.shapeColor =color(255,0,0);
 }

  }

  if(wall.x-bullet2.x < (bullet2.width + wall.width)/2){
    bullet2.velocityX = 0;
    var damage = 0.5*weight2*speed2*speed2/thickness2*thickness2*thickness2; 
    if(damage<100){
      bullet2.shapeColor =color(144,238,144);
 }
 
 if (damage>100) {
   bullet2.shapeColor =color(255,0,0);
 }
 }

 if(wall.x-bullet3.x < (bullet3.width + wall.width)/2){
  bullet3.velocityX = 0;
  var damage = 0.5*weight3*speed3*speed3/thickness3*thickness3*thickness3; 
    if(damage<200){
      bullet3.shapeColor =color(144,238,144);
 }
 
 if (damage>200) {
   bullet3.shapeColor =color(255,0,0);
 }

}

if(wall.x-bullet4.x < (bullet4.width + wall.width)/2){
  bullet4.velocityX = 0;
  var damage = 0.5*weight4*speed4*speed4/thickness4*thickness4*thickness4; 
  console.log(damage);
  if(damage<200){
    bullet4.shapeColor =color(144,238,144);
}

if (damage>200) {
 bullet4.shapeColor =color(255,0,0);
}
}


  drawSprites();
}