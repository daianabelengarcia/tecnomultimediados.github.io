let m = [];
let m2 = [];
let m3 = [];
let m4 = [];
let c = [];
let cuadrados;
let diryvel;
let capa;
let cambiaColor;

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
    
    cambiaColor = true;
  }
  dibujar(posx, posy) {
    if (cambiaColor == true) {
    diryvel.calcular(mouseX, mouseY);
    } 
    console.log(capa);
    
   for (let i = 0; i < 20; i++) {
      if (diryvel.direcciony() >= 1) {
        m[i].marron1();
        m[i].mover();
      } else if (diryvel.direcciony() <= -1) {
        m[i].marron2();
        m[i].mover();
      } 
    }
    if (m[0].posy >= 0) {
      capa = 1;
    }
    if (capa == 1) {
      for (let i = 0; i < 20; i++) {
      if (diryvel.direcciony() >= 1) {
        m2[i].marron1();
        m2[i].mover();
      } else if (diryvel.direcciony() <= -1) {
        m2[i].marron2();
        m2[i].mover();
      }
    }
  }
    if (m2[0].posy >= 0) {
      capa = 2;
    }
    if (capa == 2) {
      for (let i = 0; i < 30; i++) {
      if (diryvel.direcciony() >= 1) {
        c[i].dibujar();
        c[i].mover();
      }
    }
  }
    if (c[0].posy >= 0) {
      capa = 3;
    }
     if (capa == 3) {
      for (let i = 0; i < 20; i++) {
      if (diryvel.direcciony() >= 1) {
        m3[i].marron1();
        m3[i].mover();
      } else if (diryvel.direcciony() <= -1) {
        m3[i].marron2();
        m3[i].mover();
      }
    }
  }
    if (m3[0].posy >= 0) {
      capa = 4;
    }
     if (capa == 4) {
      for (let i = 0; i < 20; i++) {
      if (diryvel.direcciony() >= 1) {
        m4[i].marron1();
        m4[i].mover();
      } else if (diryvel.direcciony() <= -1) {
        m4[i].marron2();
        m4[i].mover();
      }
    }
  }
    if (m4[0].posy >= 0) {
      cambiaColor = false;
      capa = 5;
    }
    if (capa == 5) {
    cuadrados.dibujar();
    }
  }

  reiniciar(){
    // fill(255);
    // rect(0, 0, width, height);
    capa = 0;
    m[0].posx = random(width);
    m[0].posy = -600;
   

  }
}
