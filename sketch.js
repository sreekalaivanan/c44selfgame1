var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pipes, fb, fb2, bg, ground;
var pipesImg, fbImg, fb2Img, bgImg, groundImg;
var score = 0;

function preload(){
  bgImg = loadImage("sprites/background.png");
  pipesImg = loadImage("sprites/pipes.png");
  fbImg = loadImage("sprites/fb.png");
  fb2Img = loadImage("sprites/fb2.png");
  
}

function setup() {
  createCanvas(800,600);
  bg = createSprite(300,300,800,600);
  bg.addImage(bgImg);
  bg.scale = 1.7;
  //crop picture



  ground = createSprite(300,580,720,20);
  ground.visible = false;
  
  fb = createSprite(40,300);
  fb.addImage(fbImg);
  fb.scale = 0.2;

  
}

function draw() {
  background(0);  

if(gameState === PLAY){

  bg.velocityX = -(4 + 3* score/100);  
  if (bg.x < 0){
    bg.x = bg.width/2;
  }

  if(keyDown("space")){
    fb.velocityY = -8;
    fb.addImage(fb2Img);
  }

  spawnPipes1();
  spawnPipes2();
  spawnCoins();
//gravity
  fb.velocityY = fb.velocityY + 1;
}

//collide ground in function draw
  fb.collide(ground);

  
  
  drawSprites();
}

function spawnPipes1(){
  if(frameCount % 60 === 0){
    pipes1 = createSprite(795,30,50,130);
    pipes1.velocityX = -(6 + score/100);
  }
}

function spawnPipes2(){
  if(frameCount % 60 === 0){
    pipes2 = createSprite(795,570,50,130); //add image
    pipes2.velocityX = -(6 + score/100);
  }
}

function spawnCoins(){
  if(frameCount % 100 === 0){
    coin = createSprite(795,10,50,50);
    coin.y = Math.round(random(100,350));
    coin.velocityX = -15;
  }
}

