var fixedRect, movingRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(100,100,50,50);
  go2 = createSprite(200,100,50,50);
  go3 = createSprite(300,100,50,50);
  go4 = createSprite(400,100,50,50);
 go1.shapeColor = "yellow";
 go2.shapeColor = "yellow";
 go3.shapeColor = "yellow";
 go4.shapeColor = "yellow";
 movingRect.velocityY = -5;
 fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  go1.x = World.mouseX;
  go1.y = World.mouseY;

  if(isTouching(go1, go3)){
    go1.shapeColor = "aqua";
    go3.shapeColor = "aqua";
  }else{
    go1.shapeColor = "blue";
    go3.shapeColor = "blue";
  }
  bounceoff()
  drawSprites(); 
  
}

function bounceoff(){

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}


}

