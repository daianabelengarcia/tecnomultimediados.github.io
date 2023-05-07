let m = [];
let m2 = [];
let m3 = [];
let m4 = [];
let c = [];
let cuadrados;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    m.push(new Marron());
  }
  for (let i = 0; i < 20; i++) {
    m2.push(new Marron());
  }
  for (let i = 0; i < 20; i++) {
    m3.push(new Marron());
  }
  for (let i = 0; i < 20; i++) {
    m4.push(new Marron());
  }
  for (let i = 0; i < 30; i++) {
    c.push(new Colores());
  }
cuadrados = new Cuadrados ();
}

function draw() {
  background(255);
  for (let i = 0; i < 20; i++) {
    m[i].dibujar();
    m[i].mover();
  }
  if (m[0].posy >= 0) {
    for (let i = 0; i < 20; i++) {
      m2[i].dibujar();
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
      m3[i].dibujar();
      m3[i].mover();
    }
  }
  if (m3[0].posy >= 0) {
    for (let i = 0; i < 20; i++) {
      m4[i].dibujar();
      m4[i].mover();
    }
  }
  if (m4[0].posy >= 0) {
    cuadrados.dibujar();
  }
}
