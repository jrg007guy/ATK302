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

//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it

var bg;
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 1600;
var SCENE_H = 800;


function setup() {
  createCanvas(800, 400);

  player = createSprite(200,100);
  var playerAnimControl = player.addAnimation('Idle','assets/Player/Pika1.gif','assets/Player/Pika2.gif');
  player.addAnimation('Walkinng','assets/Player/Pika1.gif','assets/Player/Pika2.gif','assets/Player/Pika3.gif',
  'assets/Player/Pika4.gif');
  player.addAnimation('Running','assets/Player/Pika1.gif','assets/Player/Pika2.gif','assets/Player/Pika3.gif',
  'assets/Player/Pika4.gif');
  player.addAnimation('Jumped','assets/Player/Pika3.gif');
  player.addAnimation('PowerUpRunning','assets/Player/Pika3.gif');
  player.addAnimation('PowerUpIdle','assets/Player/Pika3.gif');
  player.debug = true;

  //scale and offset sprite
  player.scale = 0.5;
  playerAnimControl.offX = -50;

  pickUp = createSprite(350, 215);
  var pickUpAnim = pickUp.addAnimation('item','assets/PickUp/pickUp0.gif','assets/PickUp/pickUp1.gif','assets/PickUp/pickUp2.gif',
  'assets/PickUp/pickUp3.gif','assets/PickUp/pickUp4.gif', 'assets/PickUp/pickUp5.gif','assets/PickUp/pickUp6.gif','assets/PickUp/pickUp7.gif',
  'assets/PickUp/pickUp8.gif','assets/PickUp/pickUp9.gif','assets/PickUp/pickUp10.gif');

  pickUp.addAnimation('item_taken','assets/Player/Pika1.gif','assets/Player/Pika2.gif','assets/Player/Pika3.gif','assets/Player/Pika4.gif');
  pickUp.setCollider('circle', 0, 0, 100);
  pickUp.debug = true;

  pickUp.scale = 0.3;

  platform = createSprite(1600, 400);
  platform.addImage(loadImage('assets/level.png'));

  player.depth = 10;
}

function draw() {
  background(255, 255, 255);


  playerAnimState();

  //a camera is created automatically at the beginning

  //.5 zoom is zooming out (50% of the normal size)
  if (mouseIsPressed)
    camera.zoom = 0.25;
  else
    camera.zoom = 0.5;

  //set the camera position to the ghost position
  camera.position.x = player.position.x;
  camera.position.y = player.position.y;


  //jump command
  if(keyWentDown('space') || (keyWentDown(UP_ARROW))){
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
