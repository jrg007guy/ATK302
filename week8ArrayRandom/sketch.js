var bands = ['Q. What is the biggest lie in the entire universe? A. I have read and agree to the Terms and Conditions.', 'Why are iPhone chargers not called Apple Juice?!', 'Q. How does a computer get drunk? A. It takes screenshots.'] ;
var aRandomBand = '' ;

function setup() {
  createCanvas(800, 800) ;
  textAlign(CENTER, CENTER) ;
}

function draw() {
  background(100) ;
  textSize(15);
  text(aRandomBand, width/2, height/2) ;
}

function mouseClicked() {

  var i = floor(random(bands.length)) ;  // floor changes the random to an integer

  aRandomBand = bands[i] ;
}
