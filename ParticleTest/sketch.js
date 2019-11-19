var Snow;
var Snow2;

function setup() {
    createCanvas(400, 400);
    var t =
    {
        name: "test",
        colors: ["white"],
        lifetime: 400,
        angle: [0,180],
        size: [3,10],
        speedx: 20,
        limit: 7000,
        x: .5,
        y: -.3
    };
    Snow = new Fountain(null, t);

    var ti =
    {
        name: "test2",
        colors: ["white"],
        lifetime: 400,
        angle: [0,180],
        size: [3,10],
        speedx: 20,
        limit: 7000,
        x: .5,
        y: .3
    };
    Snow2 = new Fountain(null, ti);
}

function draw() {
  background(51);
  Snow.Draw();
  Snow.Create();
  Snow.Step();

  Snow2.Draw();
  Snow2.Create();
  Snow2.Step();
}
