var garden;
var cat,catImg1,catImg2,catImg3, mouse,mouseImage1,mouseImage2,mouseImage3;

function preload() {
    //load the images here
   garden = loadImage('images/garden.png');
   catImg1 = loadImage("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
 catImg3 = loadImage("images/cat4.png")
mouseImage1 = loadAnimation("images/mouse1.png");
mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(800,600)
   cat.addAnimation("catStanding",catImg1);
cat.scale=0.2;
mouse = createSprite(200,600);
mouse.addAnimation("mouseStanding",mouseImage1);
mouse.scale = 0.15;
}

function draw() {

    background(garden);
  
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
cat.addAnimation("catHappy",catImg3)
cat.scale=0.2;
cat.x = 300;
cat.changeAnimation("catHappy");
mouse.addAnimation("mouseHappy",mouseImage3);
mouse.scale = 0.15;
mouse.changeAnimation("mouseHappy");
    }
    

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImage2);
      mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");

    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
}


}
