var fixedRect, movingRect
function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200, 200, 50, 50);
  movingRect=createSprite(300, 300, 50, 50);
  movingRect.shapeColor="olive"
  fixedRect.shapeColor="chocolate"

}

function draw() {
  background("cyan");  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
      movingRect.shapeColor="black";
      fixedRect.shapeColor="red";
    }
    else{
      movingRect.shapeColor="olive"
  fixedRect.shapeColor="chocolate"
    }
  drawSprites();
}