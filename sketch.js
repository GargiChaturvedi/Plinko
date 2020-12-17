const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new GroundDivision(240, 780, 480, 30);
  wall1 = new GroundDivision(0, 250, 10, 500);
  wall2 = new GroundDivision(480, 250, 10, 500);

  for(var k = 0; k <= width; k += 80) {
    divisions.push(new GroundDivision(k, 650, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 50));
  }

  for(var l = 15; l <= width; l += 50) {
    plinkos.push(new Plinko(l, 100));
  }

  for(var x = 40; x <= width; x += 50) {
    plinkos.push(new Plinko(x, 150));
  }

  for(var y = 15; y <= width; y += 50) {
    plinkos.push(new Plinko(y, 200));
  }

  for(var z = 40; z <= width; z += 50) {
    plinkos.push(new Plinko(z, 250));
  }

  for(var w = 15; w <= width; w += 50) {
    plinkos.push(new Plinko(w, 300));
  }

  for(var u = 40; u <= width; u += 50) {
    plinkos.push(new Plinko(u, 350));
  }

  for(var v = 15; v <= width; v += 50) {
    plinkos.push(new Plinko(v, 400));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  ground.display();
  wall1.display();
  wall2.display();

  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  var rand = Math.round(random(100, 380));

  if(frameCount % 20 === 0) {
    particles.push(new Particle(rand, 0));
  }

  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
}