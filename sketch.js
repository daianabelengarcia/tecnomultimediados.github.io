let obra;

function setup() {
  createCanvas(600, 600);
  obra = new Principal ();
}
function draw() {
  background(255);
}
function mouseMoved() {
  obra.dibujar(mouseX, mouseY);
}
