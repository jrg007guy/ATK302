var catPic;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  catPic = loadImage("assets/Cat.jpg");
}

function draw() {
  // put drawing code here
  image(catPic,0,0) ;
}
