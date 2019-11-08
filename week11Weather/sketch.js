var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var cloud;
var x =-90;
var ws = 0;
var temperature = 0;


function setup() {
  createCanvas(400, 400);

  cloud = loadImage("assets/cloud.png");
  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=60007,us&units=imperial&';
  var myIDString = 'appid=0854a09647d934dc15cc7c71b5058c3d'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('lightblue');
      image(cloud, x-150, 0, 120, 90);
      image(cloud, x, 50, 120, 90);
      image(cloud, x-60, 150, 120, 90);
      fill('black');
      text("we have weather", 20, 20);
      // parse the weather object and put some text for some at least 3 different weather data!
      text("The temp is: " + weather.main.temp +" F", 20, 40);
      text("The humidity is: " + weather.main.humidity , 20, 60);
      text("The wind speed is: " + weather.wind.speed, 20, 80);

      x= x + ws/4;
      if (x> width+200){ x=-90};

      fill('Red');
      var tmp = 0;
      tmp = map(temperature, -10, 90, 2, height -10);
      rect(width-40, height-10, 30, -tmp);
      break;

  }
}
