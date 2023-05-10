let m = [];
let m2 = [];
let m3 = [];
let m4 = [];
let c = [];
let cuadrados;
let diryvel;

class Principal {
  constructor() {
    diryvel = new Direccionyvelocidad();
    for (let i = 0; i < 20; i++) {
      m.push(new Marron());
      m2.push(new Marron());
      m3.push(new Marron());
      m4.push(new Marron());
    }

    for (let i = 0; i < 30; i++) {
      c.push(new Colores());
    }
    cuadrados = new Cuadrados();
  }
  dibujar() {
    diryvel.calcular(mouseX, mouseY);

    if (diryvel.direcciony() <= 0) {
      console.log("Estoy subiendo");
    } else if (diryvel.direcciony() >= 0) {
        console.log ("Estoy bajando");
    }

    if (diryvel.direcciony() <= -2) {
      for (let i = 0; i < 20; i++) {
        m[i].primeracapa();
        m[i].mover();
      } } else if (diryvel.direcciony() >= 2) {
      for (let i = 0; i < 20; i++) {
        m[i].segundacapa();
        m[i].mover();
      }
    }
    

    /*if (m[0].posy >= 0) {
      for (let i = 0; i < 20; i++) {
        m2[i].primeracapa();
        m2[i].mover();
      }
    }
    if (m2[0].posy >= 0) {
      for (let i = 0; i < 30; i++) {
        c[i].dibujar();
        c[i].mover();
      }
    }
    if (c[0].posy >= 0) {
      for (let i = 0; i < 20; i++) {
        m3[i].primeracapa();
        m3[i].mover();
      }
    }
    if (m3[0].posy >= 0) {
      for (let i = 0; i < 20; i++) {
        m4[i].primeracapa();
        m4[i].mover();
      }
    }
    if (m4[0].posy >= 0) {
      cuadrados.dibujar();
    }*/
  }
}
