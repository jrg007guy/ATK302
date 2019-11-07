var colorsArray = [];
y = 0;
x = 0;
jumpState = 0;
jumpTimer = 0;
colorR = 0;
colorG = 0;
colorB = 0;
var pokeBallLeft, pokeBallRight, pokeBall;
var pikas = [];

function setup() {
  Monoton = loadFont("Assets/Monoton.ttf");
  // song1 = loadSound('assets/pokemon.mp3');
  pokeBallLeft = loadImage("Assets/PokeBallLeft.png");
  pokeBallRight = loadImage("Assets/PokeBallRight.png");
  pokeBall = pokeBallLeft;

  pikas[0] = loadImage("Assets/Pika1.gif");
  pikas[1] = loadImage("Assets/Pika2.gif");
  pikas[2] = loadImage("Assets/Pika3.gif");
  pikas[3] = loadImage("Assets/Pika4.gif");

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1Qz9dMjj7xqBdZbsjBABj77wLg0jT5-rkzDdWcqnih9U'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    colorsArray.push(new Circle(data[i].Color));
  }

}


function draw() {
  background(colorR, colorG, colorB);
  jump();

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < colorsArray.length; i++) {
    colorsArray[i].display();
  }

}


// my circle class
function Circle(myColor) {
  this.pos = createVector(random(width), random(height));
  this.color = myColor;
  this.pikachus = 0;
  this.timer = 0;

  this.display = function() {

    image(pikas[this.pikachus], this.pos.x - 55, this.pos.y - 45, 100, 100);

    this.timer++;
    if (this.timer > 20) {
      this.pikachus = this.pikachus + 1;
      this.timer = 0;
    }

    if (this.pikachus > pikas.length - 1) {
      this.pikachus = 0;
    }

    if (this.color == "Blue") {
      fill("blue");
      ellipse(this.pos.x + x, this.pos.y + y, 40, 40);
    } else {
      fill("red");
      rect(this.pos.x + x, this.pos.y + y, 40, 40);
    }
    fill("white");
    text(this.color, this.pos.x + x, this.pos.y + y);

  }

}

function jump() {
  switch (jumpState) {
    case 0:
      y++;
      x--;
      jumpTimer++;
      if (jumpTimer >= 50) {
        jumpState++;
        jumpTimer = 0;
      }
      break;
    case 1:
      colorR = random(0, 255);
      colorG = random(0, 255);
      colorB = random(0, 255);
      jumpTimer = 0;
      jumpState = 2;

      break;
    case 2:
      y--;
      x++;
      jumpTimer++;
      if (jumpTimer >= 50) {
        jumpState++;
        jumpTimer = 0;
      }
      break;
    case 3:
      colorR = random(0, 255);
      colorG = random(0, 255);
      colorB = random(0, 255);
      jumpTimer = 0;
      jumpState = 4;
      break;
    case 4:
      colorR = random(0, 255);
      colorG = random(0, 255);
      colorB = random(0, 255);
      jumpTimer = 0;
      jumpState = 0;
      break;
  }
}
