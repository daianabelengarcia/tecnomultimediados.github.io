class Direccionyvelocidad {
  constructor() {
    let posx, posy, prevposx, prevposy, dirx, diry, vel;
    this.posx = 0;
    this.posy = 0;
  }
  calcular(miposx, miposy) {
    this.prevposx = this.posx;
    this.prevposy = this.posy;
    this.posx = miposx;
    this.posy = miposy;

    this.dirx = this.posx - this.prevposx;
    this.diry = this.posy - this.prevposy;

    this.vel = dist(this.posx, this.posy, this.prevposx, this.prevposy);
  }
  velocidad() {
    return this.vel;
  }
  direccionx() {
    return this.dirx;
  }
  direcciony() {
    return this.diry;
  }
}
