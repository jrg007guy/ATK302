//Overlap Point and pixel
//the collisions are not checked against bounding boxes but between
//points or image pixels

//left and right keys to move the sprite
//it's position is adjusted to another sprite's opaque pixels

var player;
var cloud;
var platform;
var jump = -7;
var jumpState = 0;
var jumpTimer = 0;
var GRAVITY = 1;

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

  player = createSprite(300, 150);
  player.addAnimation('normal', 'assets/player.png');
  player.debug = true;

  cloud = createSprite(500, 200);
  cloud.addAnimation('normal', 'assets/cloud_breathing0001.png', 'assets/cloud_breathing0009.png');
  cloud.addAnimation('transformed', 'assets/asterisk_normal0001.png', 'assets/asterisk_normal0003.png');
  cloud.setCollider('circle', 0, 0, 50);
  cloud.debug = true;

  platform = createSprite(200, 400);
  platform.addImage(loadImage('assets/level.png'));

  player.depth = 10;
}

function draw() {
  background(255, 255, 255);

  jumpFunc();

  //a camera is created automatically at the beginning

  //.5 zoom is zooming out (50% of the normal size)
  if (mouseIsPressed)
    camera.zoom = 0.5;
  else
    camera.zoom = 1;

  //set the camera position to the ghost position
  camera.position.x = player.position.x;
  camera.position.y = player.position.y;


  //jump command
  if(keyWentDown('space') || (keyWentDown(UP_ARROW))){
      player.velocity.y = jump;
      jumpState = 1;
    }

  //if no arrow input set velocity to 0
  player.velocity.x = 0;

  if (keyIsDown(LEFT_ARROW))
    player.velocity.x = -5;
  if (keyIsDown(RIGHT_ARROW))
    player.velocity.x = 5;

  //instead of checking the colliders or bounding box overlaps
  //I can just check a point against a collider
  if (cloud.overlapPoint(player.position.x, player.position.y))
    cloud.changeAnimation('transformed');

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

function jumpFunc() {
  switch (jumpState) {
    case 0:
    jumpTimer = 0;
    jump = -7;
      break;

    case 1:
    jumpTimer++;
    jump = 0;
    if (jumpTimer >= 20) {
      jumpState = 0;
      jumpTimer = 0;
    }
      break;
    }
  }
