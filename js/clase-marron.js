class Marron {
  constructor() {
    this.posx = random(width);
    this.posy = -600;
    this.tamx = 20;
    this.tamy = 600;
    this.brillo = random(0, 100);
    this.saturacion = random(0, 100);
  }

  marron1() {
    noStroke();
    colorMode(HSB);
    fill(10, this.brillo, this.saturacion);
    rect(this.posx, this.posy, this.tamx, this.tamy);
  }
  marron2() {
    noStroke();
    colorMode(HSB);
    fill(30, this.brillo, this.saturacion);
    rect(this.posx, this.posy, this.tamx, this.tamy);
  }
  mover() {
    if (this.posy <= 0) {
      this.posy += 10;
    }
  }
}
