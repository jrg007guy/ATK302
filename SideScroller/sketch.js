//Overlap Point and pixel
//the collisions are not checked against bounding boxes but between
//points or image pixels
//left and right keys to move the sprite
//it's position is adjusted to another sprite's opaque pixels
var player;
var pickUp, pickUp1, pickUp2, pickUp3, pickUp4, pickUp5, pickUp6, pickUp7, pickUp8, pickUp9, pickUp10;
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
var resetTimer = 50;
var health = 3;
var levelArt;
var snowMan;
var damageState = 0;
var damageTimer = 0;
var startMusic, stageMusic;
var musicState = 0;
var snowManState = 0;
var snowManTimer = 0;
var snowManX = 0;
//virtual camera
//move the mouse around
//because the camera is following it
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 1600;
var SCENE_H = 800;

function preload() {
  startMusic = loadSound('assets/Sounds/Music/StartMusic.mp3');
  stageMusic = loadSound('assets/Sounds/Music/StageMusic.mp3');

  startMusic.loop();
  startMusic.stop();
  stageMusic.loop();
  stageMusic.stop();

}

function setup() {
  createCanvas(800, 800);

  splashPic = loadImage("assets/SplashScreen.png");
  backgroundPic = loadImage("assets/Snowbackground.png");
  losePic = loadImage("assets/You_lose_screen.png");
  winPic = loadImage("assets/You_win.png");



  player = createSprite(200, 200);
  var playerAnimControl = player.addAnimation('Running', 'assets/Player/Player1.png', 'assets/Player/Player2.png',
    'assets/Player/Player3.png', 'assets/Player/Player4.png', 'assets/Player/Player5.png', 'assets/Player/Player6.png');

  player.addAnimation('RunningLeft', 'assets/Player/Player1Left.png', 'assets/Player/Player2Left.png',
    'assets/Player/Player3Left.png', 'assets/Player/Player4Left.png', 'assets/Player/Player5Left.png', 'assets/Player/Player6Left.png');

  player.addAnimation('rightJumped', 'assets/Player/Player3.png');
  player.addAnimation('leftJumped', 'assets/Player/Player3Left.png');
  player.setCollider('rectangle', 0, 0, 500, 300);
  player.debug = true;

  //scale and offset sprite
  player.scale = 0.2;
  playerAnimControl.offX = -100;
  playerAnimControl.offY = -50;

  pickUp = createSprite(2000, 370);
  var pickUpAnim = pickUp.addAnimation('item', 'assets/PickUp/Ornament_.png');
  pickUp.setCollider('circle', 0, 0, 100);
  pickUp.debug = true;

  pickUp.scale = 0.3;

  snowMan = createSprite(1000, 320);
  var snowManAnim = snowMan.addAnimation('leftMove', 'assets/Evil_snowmanLeft.png');
  snowMan.addAnimation('rightMove', 'assets/Evil_snowmanRight.png');

  snowMan.setCollider('rectangle', 0, 0, 400, 700);
  snowMan.debug = true;

  snowMan.scale = 0.2;
  snowManAnim.offX = 0;
  snowManAnim.offY = 0;

  platform = createSprite(1600, 400);
  platform.addImage(loadImage('assets/LevelArt.png'));

  player.depth = 10;
}

function draw() {
  musicPlayer();

  switch (gameState) {
    case 0:
      splashScreen();

      break;
    case 1:
      image(backgroundPic, -600, -1400, 2000 * 4, 600 * 6);
      game();
      timer--;
      if (timer < 1 || health <= 0) {
        resetTimer = 100;
        timer = 600;
        gameState = 2;
      }
      break;
    case 2:
      camera.off();
      image(losePic, 0, 0);
      resetTimer--;
      health = 3;
      if (resetTimer < -100) {
        resetGame();
      }
      break;
    case 3:
      camera.off();
      image(winPic, 0, 0);
      resetTimer--;
      health = 3;
      if (resetTimer < -100) {
        resetGame();
      }
      break;
    case 4:
      clear;
      background('black');
      camera.on();
      fill('white');
      textSize(50);
      text("Loading...", 400, 400);
      snowManState = 1;
      resetTimer--;
      if (resetTimer < 1) {
        player.position.x = 300;
        player.position.y = 100;
        player.velocity.y = 0;
        gameState = 1;
        resetTimer = 50;
      }
      break;
  }
}

function splashScreen() {
  camera.off();
  image(splashPic, 0, 0);
  musicState = 1;
  if (mouseIsPressed) {
    musicState = 2;
    gameState = 4;
  }
}

function resetGame() {
  snowManState = 1;
  snowManTimer = 0;
  snowMan.position.x = 1000;
  snowMan.position.y = 320;
  snowMan.changeAnimation('rightMove');

  playerState = 0;
  pickUp.position.x = 2000;
  musicState = 0;
  background('black');
  camera.on();
  resetTimer = 100;
  timer = 600;
  gameState = 0;
  health = 3;
}


function game() {
  playerDamage();
  playerAnimState();
  snowManAnimState();
  fill('Red');
  textSize(50);
  text('Health:' + health, camera.position.x - 350, camera.position.y - 300);
  text('Timer:' + timer, camera.position.x + 100, camera.position.y - 300);

  //a camera is created automatically at the beginning
  //.5 zoom is zooming out (50% of the normal size)
  camera.zoom = 1.1;

  //set the camera position to the player position

  camera.position.x = player.position.x;
  camera.position.y = player.position.y;



  if (player.position.y > 900) {
    player.position.x = 200;
    player.position.y = 200;
    player.velocity.y = 0;
    health--;
  }




  //jump command
  if (keyWentDown('space') || (keyWentDown(UP_ARROW))) {
    player.velocity.y = jump;
    playerState = 2;
  }

  //if no arrow input set velocity to 0
  player.velocity.x = 0;

  //movement
  if (keyIsDown(RIGHT_ARROW) && playerState <= 1) {
    player.velocity.x = 5;
    playerState = 0;
  }

  if (keyIsDown(LEFT_ARROW) && playerState <= 1) {
    player.velocity.x = -5;
    playerState = 1;

  }

  //jump movment

  if (keyIsDown(RIGHT_ARROW) && playerState >= 2) {
    player.velocity.x = 5;
    playerState = 2;
  }

  if (keyIsDown(LEFT_ARROW) && playerState >= 2) {
    player.velocity.x = -5;
    playerState = 3;

  }


  // //instead of checking the colliders or bounding box overlaps
  // //I can just check a point against a collider
  // if (pickUp.overlapPoint(player.position.x, player.position.y))
  //   pickUp.changeAnimation('item_taken');

  if (player.overlap(snowMan)) {

    damageState = 1;
  }

  if (player.overlap(pickUp)) {
    pickUp.position.x = -1000;
    gameState = 3;
  }

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
      playerTimer = 0;
      jump = -10;
      player.changeAnimation('RunningLeft');
      break;
    case 2:
      player.changeAnimation('rightJumped');
      playerTimer++;
      jump = 0;
      if (playerTimer >= 40) {
        playerState = 0;
        playerTimer = 0;
      }
      break;
    case 3:
      player.changeAnimation('leftJumped');
      playerTimer++;
      jump = 0;
      if (playerTimer >= 40) {
        playerState = 1;
        playerTimer = 0;
      }
      break;
  }
}

function playerDamage() {
  switch (damageState) {
    case 0:
      //idel state
      break;
    case 1:
      damageTimer++
      if (damageTimer >= 20) {
        snowManState = 3;
        damageTimer = 0;
        health = health - 1;
        damageState = 0;
      }

      break;

  }
}

function musicPlayer() {
  switch (musicState) {

    case 0: // trigger the playing, and go immediately to the next state
      startMusic.stop();
      stageMusic.stop();
      startMusic.play();
      musicState = 1; // go immediately (the next time) to the next state
      break;


    case 1:
      // hang out in here, put some lyrics or pictures or something while the song plays.
      // put pictures and shapes in here

      break; // we would only leave state 1 with a mouseClick



    case 2: // trigger the playing, and go immediately to the next state
      startMusic.stop();
      stageMusic.stop();
      stageMusic.play();
      musicState = 3;
      break;

    case 3:
      break;

  }
}

function snowManAnimState() {
  switch (snowManState) {
    case 0:
      //Defult reset snowman position
      snowManTimer = 0;
      snowMan.position.x = 1000;
      snowMan.position.y = 320;
      snowMan.changeAnimation('rightMove');
      break;

    case 1:
      //Move snowman Right
      snowMan.position.x++;
      snowMan.changeAnimation('rightMove');
      snowManTimer++;
      if (snowManTimer >= 100) {
        snowManState = 2;
        snowManTimer = 0;
      }
      break;
    case 2:
      //Move snowman Left
      snowMan.position.x--;
      snowMan.changeAnimation('leftMove');
      snowManTimer++;
      if (snowManTimer >= 100) {
        snowManState = 1;
        snowManTimer = 0;
      }
      break;
    case 3:
      snowMan.position.y = -1000;
      snowManTimer = 0;
      break;
  }
}
