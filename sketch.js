var cat, cat_Image;
var ground, groundImage;
var mouse1, mouseImage;
function preload() {
    cat_Image=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
    groundImage=loadImage("images/garden.png");
    mouseImage=loadImage("images/mouse1.png");
    mouseImage=loadImage("images/mouse2.png");
    mouseImage=loadImage("images/mouse3.png");
    mouseImage=loadImage("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    cat = createSprite(800,600,10,10);
    cat.addAnimation("cat",cat_Image);
    cat.scale = 0.1;

    
}
function draw() {
    background(groundImage);
    drawSprites();
}
function keyPressed(){
}
