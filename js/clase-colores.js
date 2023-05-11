class Colores {
    constructor() {
      this.posx = random(width);
      this.posy = -600;
      this.tamx = 20;
      this.tamy = 600;
      this.brillo = random (0,100);
      this.saturacion = random(0,100);
      this.c = random(0,360);
    }
    dibujar () {
      noStroke();
      colorMode(HSB);
      fill (this.c,this.brillo,this.saturacion);
      rect (this.posx, this.posy, this.tamx, this.tamy);
    }
    mover () {
if (this.posy <= 0) {
    this.posy +=2;
    }
  }
}
