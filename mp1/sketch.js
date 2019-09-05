function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background( 0, 150, 150);
  fill(0);

  if (mouseIsPressed) {
    background('#3a4b4f');
    noStroke();

    //moon
        fill('#c9c865');
        ellipse(700, 100, 200, 200);
    //moon cover
        fill('#3a4b4f');
        ellipse(650, 100, 200, 200);


    //nightman cape
        fill('#272c73');
        triangle(610,220, 500,375, 750,375);
    //nightman cape frill 1
        fill('#3a4b4f');
        ellipse(680, 375,110, 15);
   //nightman cape frill 2
      fill('#3a4b4f');
      ellipse(560, 375,100, 15);
    //nightman arm right
      fill('#272c73');
      rect(630, 250, 100, 15);
    //nightman arm left
        fill('#272c73');
        rect(500, 250, 100, 15);
    //nightman torso
        fill('#4f5a82');
        rect(589, 250,50,200);

    //nightman legs see through
        fill('#3a4b4f');
        rect(610, 350,10,100);
    //nightman head
        fill('#a38450');
        ellipse(613, 220,75, 75);
    //nightman eye right
        fill('#4d2b0f');
        rect(590, 200, 20, 5);
    //nightman eye left
        fill('#4d2b0f');
        rect(620, 200, 20, 5)


    //tree 1 base
        fill('#4d2b0f');
        triangle(100,114, 50,420, 150,420);
    //tree 1 leaves
        fill('#20821b');
        ellipse(100, 168, 200, 200);
    //tree 2 base
        fill('#4d2b0f');
        triangle(300,114, 250,420, 350,420);
    //tree 2 leaves
        fill('#20821b');
        ellipse(300, 168, 200, 200);

    //Clouds
        fill('#919191');
        ellipse(300, -50, 200, 200);
    //Clouds
        fill('#919191');
        ellipse(200, -50, 200, 200);
    //Clouds
        fill('#919191');
        ellipse(100, -50, 200, 200);
    //Clouds
        fill('#919191');
        ellipse(50, -40, 200, 200);
    //Clouds
        fill('#919191');
        ellipse(400, -50, 200, 200);
    //Clouds
        fill('#919191');
        ellipse(500, -40, 200, 200);
    //Ground
        fill('#0d380b');
        rect(0, 400, windowWidth, 700);
    //Name
        fill('#ffffff');
        text('NM', 600,300);
    //Backstory
        fill('#ffffff');
        text('Name of charecter: NightMan!', 900,100);
        text('Power: NightMan uses the power of night to change the sun in the sky to a moon!', 900,115);
        text('He can make any time of day completely dark with just a thought.', 900,130);

  } else {
    background('#77aad4');
    noStroke();


    //nightman arm right
        fill('#c9a25d');
        rect(630, 250, 100, 15);
    //nightman arm left
        fill('#c9a25d');
        rect(500, 250, 100, 15);
    //nightman torso
        fill('#4f5a82');
        rect(589, 250,50,200);

    //nightman legs see through
        fill('#77aad4');
        rect(610, 350,10,100);
    //nightman head
        fill('#c9a25d');
        ellipse(613, 220,75, 75);
    //nightman eye right
        fill('#4d2b0f');
        rect(600, 200, 5, 20);
    //nightman eye left
        fill('#4d2b0f');
        rect(620, 200, 5, 20)





//tree 1 base
    fill('#9e5618');
    triangle(100,114, 50,420, 150,420);
//tree 1 leaves
    fill('#2fd627');
    ellipse(100, 168, 200, 200);
//tree 2 base
    fill('#9e5618');
    triangle(300,114, 250,420, 350,420);
//tree 2 leaves
    fill('#2fd627');
    ellipse(300, 168, 200, 200);
//sun
    fill('#ffbf00');
    ellipse(700, 0, 200, 200);
//Clouds
    fill('#e6e6e6');
    ellipse(300, -50, 200, 200);
//Clouds
    fill('#e6e6e6');
    ellipse(200, -50, 200, 200);
//Clouds
    fill('#e6e6e6');
    ellipse(100, -50, 200, 200);
//Clouds
    fill('#e6e6e6');
    ellipse(50, -40, 200, 200);
//Clouds
    fill('#e6e6e6');
    ellipse(400, -50, 200, 200);
//Clouds
    fill('#e6e6e6');
    ellipse(500, -40, 200, 200);
//Ground
    fill('#20821b');
    rect(0, 400, windowWidth, 700);

  }

  print(mouseIsPressed);
}
