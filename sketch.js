var player, playerImg, bg, poisonIvyImg, backgroundImg, owlFood2Img, owlFood1Img, enemyImg;
var enemy, poisonIvy;


function preload(){

var playerImg = loadImage("owlFlying.png");
var enemyImg = loadImage("owlEnemy.png");
var owlFood1Img = loadImage("owlFood1.png");
var owlFood2Img = loadImage("owlFood2.png");
var backgroundImg = loadImage("night.jpeg");
var poisonIvyImg = loadImage("poisonIvy.png");

}

function setup() {
 createCanvas(600,200);
 
 bg = createSprite(0,0,600,200);
 bg.addImage(backgroundImg);

 //Create a sprite for owl
player = createSprite(50,100);
player.addImage(playerImg);


}

function draw() {
 background("black");
 

 
 drawSprites();
 spawnPoisonIvy();
}

function spawnPoisonIvy(){
if(frameCount%80==0){
    poisonIvy = createSprite(600, Math.round(random(100, 180)))
    poisonIvy.addImage(poisonIvyImg)
    poisonIvy.velocityX = -4
    
}
}