let obra;

function setup() {
  createCanvas(600, 600);
  obra = new Principal ();
}
function draw() {
  
}
function mouseMoved() {
  obra.dibujar(mouseX, mouseY);
}
function keyPressed(){
  if (keyCode === ENTER){
    obra.reiniciar();
  }
}