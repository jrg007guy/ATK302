var catPic;

function setup() {
  // put setup code here
  createCanvas(720, 400);
  catPic = loadImage("assets/Cat.jpg");
}

function draw() {
  // put drawing code here
  image(catPic,0,0) ;
}
