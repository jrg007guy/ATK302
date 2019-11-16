//Overlap Point and pixel
//the collisions are not checked against bounding boxes but between
//points or image pixels
//left and right keys to move the sprite
//it's position is adjusted to another sprite's opaque pixels
var player;
var pickUp;
var platform;
var jump = -10;
var playerState = 0;
var playerTimer = 0;
var GRAVITY = .5;
var gameState = 0;
var timer = 600;
var splashPic;
var backgroundPic;
var losePic;
var winPic;
var resetTimer = 100;
health = 3;
//virtual camera
//move the mouse around
//because the camera is following it
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 3000;
var SCENE_H = 800;

function setup() {
  createCanvas(800, 800);

  splashPic = loadImage("assets/SplashScreen.png");
  backgroundPic = loadImage("assets/SnowbackgroundOriginal.png");
  losePic = loadImage("assets/You_lose_screen.png");
  winPic = loadImage("assets/You_win.png");



  player = createSprite(200, 200);
  var playerAnimControl = player.addAnimation('Idle');
  player.addAnimation('Running', 'assets/Player/Player1.png', 'assets/Player/Player2.png', 'assets/Player/Player3.png', 'assets/Player/Player4.png', 'assets/Player/Player5.png', 'assets/Player/Player6.png');
  player.addAnimation('Jumped', 'assets/Player/Player3.png');
  player.addAnimation('PowerUpRunning', 'assets/Player/Player3.png');
  player.addAnimation('PowerUpIdle', 'assets/Player/Player3.png');
  player.debug = true;

  //scale and offset sprite
  player.scale = 0.2;
  playerAnimControl.offX = 5;
  playerAnimControl.offY = 5;

  pickUp = createSprite(350, 215);
  var pickUpAnim = pickUp.addAnimation('item', 'assets/PickUp/pickUp0.gif', 'assets/PickUp/pickUp1.gif', 'assets/PickUp/pickUp2.gif',
    'assets/PickUp/pickUp3.gif', 'assets/PickUp/pickUp4.gif', 'assets/PickUp/pickUp5.gif', 'assets/PickUp/pickUp6.gif', 'assets/PickUp/pickUp7.gif',
    'assets/PickUp/pickUp8.gif', 'assets/PickUp/pickUp9.gif', 'assets/PickUp/pickUp10.gif');

  pickUp.addAnimation('item_taken', 'assets/Player/Player1.png', 'assets/Player/Player2.png', 'assets/Player/Player3.png');
  pickUp.setCollider('circle', 0, 0, 100);
  pickUp.debug = true;

  pickUp.scale = 0.3;

  snowMan = createSprite(1050, 315);
  var snowManAnim = snowMan.addAnimation('idle');

  snowMan.setCollider('circle', 0, 0, 100);
  snowMan.debug = true;

  snowMan.scale = 0.5;

  platform = createSprite(1600, 400);
  platform.addImage(loadImage('assets/level.png'));

  player.depth = 10;
}

function draw() {

  switch (gameState) {
    case 0:
      splashScreen();

      break;
    case 1:
      image(backgroundPic, -200, -150, 2000 * 1.5, 600 * 1.5);
      game();
      timer--;
      if (timer < 1) {
        timer = 600;
        gameState = 2;
      }
      break;
    case 2:
    camera.off();
    image(losePic,0, 0);
    resetTimer--;
    health = 3;
    if (resetTimer < 1) {
      background('black');
      camera.on();
      resetTimer = 100;
      fill('white');
      text("Loading...", 65, 600);
      player.position.x = 200;
      player.position.y = 100;
      gameState = 0;
    }
      break;
    case 3:

      break;
    case 4:
      clear;
      background('black');
      camera.on();
      fill('white');
      text("Loading...", 65, 600);
      resetTimer--;
      if (resetTimer < 1) {
        player.position.x = 200;
        player.position.y = 100;
        resetTimer = 100;
        gameState = 1;
      }
      break;
  }
}

function splashScreen() {
  camera.off();
  image(splashPic, 0, 0);
  if (mouseIsPressed) {
    gameState = 4;
  }
}


function game() {

  playerAnimState()
  fill('Red');
  textSize(50);
  text('Health:'+ health, camera.position.x-350, camera.position.y-300);

  //a camera is created automatically at the beginning
  //.5 zoom is zooming out (50% of the normal size)
  camera.zoom = 1;

  //set the camera position to the player position

  camera.position.x = player.position.x;
  camera.position.y = player.position.y;



  if(player.position.y > 600){
    player.position.x = 200;
    player.position.y = 200;
    health--;
  }




  //jump command
  if (keyWentDown('space') || (keyWentDown(UP_ARROW))) {
    player.velocity.y = jump;
    playerState = 1;
  }

  //if no arrow input set velocity to 0
  player.velocity.x = 0;

  if (keyIsDown(LEFT_ARROW))
    player.velocity.x = -5;

  if (keyIsDown(RIGHT_ARROW))
    player.velocity.x = 5;

  //instead of checking the colliders or bounding box overlaps
  //I can just check a point against a collider
  if (pickUp.overlapPoint(player.position.x, player.position.y))
    pickUp.changeAnimation('item_taken');

  //Or check a point against the pixels of a sprite animation or image
  //if the bottom of the player is not overlapping with the non transparent pixels
  //of the platform make it fall
  if (platform.overlapPixel(player.position.x, player.position.y + 30) == false)
    player.velocity.y += GRAVITY;

  //if the bottom of the player is overlapping the non transparent pixels
  //of the platform move it up one pixel until it doesn't overlap anymore
  while (platform.overlapPixel(player.position.x, player.position.y + 30)) {
    player.position.y--;
  }
  drawSprites();
}

function playerAnimState() {
  switch (playerState) {
    case 0:
      playerTimer = 0;
      jump = -10;
      player.changeAnimation('Running');
      break;

    case 1:
      playerTimer++;
      jump = 0;
      player.changeAnimation('Jumped');
      if (playerTimer >= 40) {
        playerState = 0;
        playerTimer = 0;
      }
      break;
  }
}
