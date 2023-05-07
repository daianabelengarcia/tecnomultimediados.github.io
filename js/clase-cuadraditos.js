let posx;

class Cuadrados {
  constructor() {
    this.tamx = 10;
    this.tamy = 20;
  }
  dibujar() {
    noStroke();
    fill(255);
    for (this.posx = 0; this.posx < 30; this.posx++) {
      for (let posy = 0; posy < 20; posy++) {
        rect(10 + this.posx * 20, 10 + posy * 30, this.tamx, this.tamy);
      }
    }
  }
  mover (posx){
    if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
        this.posx ++;
    }
  }
}
