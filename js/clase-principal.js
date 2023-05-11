let m = [];
let m2 = [];
let m3 = [];
let m4 = [];
let c = [];
let cuadrados;
let diryvel;
let capa;

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

    capa = 0;
  }
  dibujar(posx, posy) {
    diryvel.calcular(mouseX, mouseY);

    console.log(capa);
    
   for (let i = 0; i < 20; i++) {
      if (diryvel.direcciony() >= 5) {
        m[i].marron1();
      } else if (diryvel.direcciony() <= -5) {
        m[i].marron2();
      } else if (diryvel.direciony() <= 5 && diryvel.direcciony () >= -5) {
        m.[i].mover();
      }
    }
    if (m[0].posy >= 0) {
      capa = 1;
    }
    if (capa == 1) {
      for (let i = 0; i < 20; i++) {
      if (diryvel.direcciony() >= 0) {
        m2[i].marron1();
        m2[i].mover();
      } else if (diryvel.direcciony() <= 5) {
        m2[i].marron2();
        m2[i].mover();
      }
    }
  }
    if (m[0].posy >= 0) {
      capa = 2;
    }
  
      

    /*if (capa == 1 && m[0].posy >= -1) {
      if (diryvel.direccionx() <= -10) {
        for (let i = 0; i < 20; i++) {
          m2[i].marron1();
        }
      } else if (diryvel.direccionx() >= 1) {
        for (let i = 0; i < 20; i++) {
          m2[i].marron2();
        }
      }
      if (diryvel.direcciony() <= 0) {
        for (let i = 0; i < 20; i++) {
          m2[i].mover();
        }
      }
      capa = 2;
    } else if (capa == 2 && m2[0].posy >= -1) {
      if (diryvel.direccionx() <= -10) {
        for (let i = 0; i < 30; i++) {
          c[i].dibujar();
        }
      } 
      if (diryvel.direcciony() <= 1) {
        for (let i = 0; i < 30; i++) {
          c[i].mover();
        }
      }
      capa = 3;
    }*/

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
