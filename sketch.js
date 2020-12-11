var man,manImage;
var lightning,img1,img2,img3,img4;
var raindrop,raindropImage,raindropGroup;

function preload(){
    manImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");

    img1 = loadImage("1.png");
    img2 = loadImage("2.png");
    img3 = loadImage("3.png");
    img4 = loadImage("4.png");

    raindropImage = loadImage("raindrop image.png");
}

function setup(){
   canvas = createCanvas(800,800);

   man = createSprite(400,675,10,10);
   man.addAnimation("run",manImage);
   man.scale = 0.35;
   man.setCollider("rectangle",0,0,350,man.height - 100);

   lightning = createSprite(3000,3000,10,10);

   raindrop = createSprite(3000,3000,10,10);
   raindropGroup = createGroup();
}

function draw(){
    background(0);
    console.log(lightning.x);

    //create the lightning
    if(frameCount % 60 == 0){
        spawnLightning();
    }

    //create gravity for drops
    for(var i = 0; i < raindropGroup.length; i++){
        raindropGroup.get(i).y = raindropGroup.get(i).y + 10;

        if(raindropGroup.get(i).isTouching(man)){
            raindropGroup.get(i).destroy();
        }
    }

    //spawn the drops
    if(frameCount % Math.round(random(1,30)) == 0){
        spawnRaindrops();
    }

    if(frameCount % Math.round(random(1,30)) == 0){
        spawnRaindrops();
    }

    if(frameCount % Math.round(random(1,30)) == 0){
        spawnRaindrops();
    }




    drawSprites();
}

function spawnLightning(){
    lightning = createSprite(random(100,700),25,10,10);
    lightning.lifetime = 50;


    var img = Math.round(random(1,4));
    switch(img){
        case 1:
            lightning.addImage(img1);
        break;

        case 2:
            lightning.addImage(img2);
        break;

        case 3:
            lightning.addImage(img3);
        break;

        case 4:
            lightning.addImage(img4);
        break;
        
    }
}

function spawnRaindrops(){
    raindrop = createSprite(random(25,775),20,10,10);
    raindrop.scale = 0.05;
    raindrop.addImage(raindropImage);
    raindropGroup.add(raindrop);
}

