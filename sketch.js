var doreamon ;
var ground;
var gameState="play";
var rand = 0;
var backgroundimage;
var coronavirusimage;
var sanitizerimage;
var doctorimage;
var obstacleGroup,sanitizerGroup;
var distance = 0;
var doctor;
var m=120;
var turn =3;

function preload(){
backgroundimage=loadImage("background.jpg");
coronavirusimage=loadImage("coronavirus.png");
sanitizerimage=loadImage("sanitizer.png");
doctorimage=loadImage("doctor.png");
doreamonAnimation=loadAnimation("image 1.png,image 2.png,image 3.png,image 4.png,image 5.png,image 6.png")
}

function setup(){
createCanvas(windowWidth-20,windowHeight-30)
doreamon = createSprite(100,height-100,10,10);
doreamon.addAnimation("running",doramonAnimation);
ground = createSprite(0,height-100,width*4,10);
ground.visibility=false;
obstacleGroup=createGroup();
sanitizerGroup=createGroup();
restart=createSprite(width/2,height/2)
  restart.addImage(restartImg)
  restart.visible=false
  

}

function draw(){
background(0);

if(gameState === "play"){
   if (frameCount % round(frameRate()) === 0 && m > -1) {
    
        m --;
       
      }
      camera.position.x=doreamon.x+350;
      camera.position.y=windowHeight/2;
      ground.x=doremon.x
      doreamon.collide(ground);
      console.log(distance);
      if(keyIsDown(LEFT_ARROW))  
        {
          doreamon.x=doreamon.x+5;
          distance++
        }
      if(keyIsDown(RIGHT_ARROW))  
      {
      doreamon.x=doreamon.x-5;
      distance--
     }
    
     if(keyDown("space") )
     {
      doreamon.velocityY = -10 ;
     }
     doreamon.velocityY = doreamon.velocityY + 0.8;
    
    
    var r =Math.round(random(1,2))
      if(frameCount%100===0)
      {
        if(r===1)
        sanitizer();
        else
        obstacle();
      }
      
    
    if(sanitizerGroup.isTouching(doreamon)){
      sanitizerGroup.destroyEach();
    }      
   if(obstacleGroup.isTouching(doreamon)){
      obstacleGroup.destroyEach();
      gameState = "end";
      turn=turn-1
      fill("black")
      textSize(30)
      text("GAME OVER",doremon.x-100,height-200);
      restart.x=doremon.x
      restart.visible=true
    }
  
  if(distance>=1000)
    {
      doctor=createSprite(doreamon.x+250,doreamon.y-30);
      doctor.addImage(doctorimage);  
      doctor.sclae=0.5; 
      fill("black")
      textSize(30)
      text("You Are Immunized Now",doctor.x-100,height-50);
    }
  
    if(turn===0)
    {
      gameState="end"
      fill("black")
      textSize(15)
      text("GAME OVER!!!",doremon.x-100,height-200);
      text("BETTER LUCK NEXT TIME!!!",doremon.x-100,height-250);
    }
 }
  
 if(gameState === "end") {
    ground.velocityX = 0;
    doreamon.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    sanitizerGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    sanitizerGroup.setLifetimeEach(-1);
    
  }
  if(mousePressedOver(restart))
  {
    reset();
  }


drawSprites();
}
function reset()
{
  gameState="play";
  doremon.changeAnimation("standing",doremon_standingImg);
  restart.visible=false
  totalCoins=0
 
  m=120
}

function obstacle(){
    
       var Obstacle= createSprite(doremon.x+400,height-230,10,40);
       Obstacle.addImage(coronavirusimage);
       
        Obstacle.scale = 0.09;
        Obstacle.lifetime = 50;
        obstacleGroup.add(Obstacle)
    
}


function sanitizer(){
    
           var Sanitizer = createSprite(doremon.x+200,height-230,10,40);
           Sanitizer.addImage(sanitizerimage);
           Sanitizer.scale = 0.5;
           Sanitizer.lifetime = 50;
           sanitizerGroup.add(Sanitizer);
       }
    
}