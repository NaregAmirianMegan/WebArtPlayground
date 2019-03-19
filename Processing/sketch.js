const dots = [];
const numDots = 400;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

function setup() {
  const cnv = createCanvas(WIDTH, HEIGHT);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  for(let i = 0; i < numDots;i++) {
    dots.push(new Dot(random(WIDTH), random(HEIGHT)));
  }
}

function draw() {
  background(0);
  for(let dot of dots) {
    if(mouseDistance(dot) < 150) {
      stroke(30, 60, 200);
      strokeWeight(2);
      line(dot.x, dot.y, mouseX, mouseY);
    }
    dot.show();
  }
}

function mouseDistance(dot) {
  return Math.sqrt(Math.pow(dot.x - mouseX, 2) + Math.pow(dot.y - mouseY, 2));
}
