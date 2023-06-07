//-------CONFIGURACION----

let AMP_MIN = 0.1; // umbral mínimo de amplitud. Señal que supera al ruido de fondo
let IMPRIMIR = false;

let AMP_MAX = 0.5;
let cambiaColor;

//-----ENTRADA DE AUDIO----
let mic;

//-----AMPLITUD----

let amp;
let haySonido = false;

let p = [];
let p2 = [];
let p3 = [];
let p4 = [];
let cuadrados;
let capa;


function setup() {
  createCanvas(600, 600);

  mic = new p5.AudioIn();
  mic.start();

  userStartAudio(); // esto lo utilizo porque en algunos navigadores se cuelga el audio. Esto hace un reset del motor de audio (audio context)

  for (let i = 0; i < 30; i++) {
    p.push(new Pincelada());
    p2.push(new Pincelada());
    p3.push(new Pincelada());
    p4.push(new Pincelada());
  }

  cuadrados = new Cuadrados();

  capa = 0;

}
function draw() {

  console.log(cambiaColor);

  amp = mic.getLevel();

  haySonido = amp > AMP_MIN;


  for (let i = 0; i < 30; i++) {
    if (haySonido) {
      p[i].dibujar(amp);
    }
    
  }

  if (haySonido && p[0].posY >= height) {
    capa = 1;
  }
  if (capa == 1) {
    for (let i = 0; i < 30; i++) {
      if (haySonido) {
        p2[i].dibujar(amp);
      }
    }
  }

  if (haySonido && p2[0].posY >= height) {
    capa = 2;
  }
  if (capa == 2) {
    for (let i = 0; i < 30; i++) {
      if (haySonido) {
        p3[i].dibujar(amp);
      }
    }
  }
  if (haySonido && p3[0].posY >= height) {
    capa = 3;
  }
  if (capa == 3) {
    for (let i = 0; i < 30; i++) {
      if (haySonido) {
        p4[i].dibujar(amp);
      }
    }
  }
  if (haySonido && p4[0].posY >= height) {
    capa = 4;
  }
  if (haySonido && capa == 4) {
    cuadrados.dibujar();
  }
  if (IMPRIMIR) {
    imprimirData();
  } 
}

function imprimirData() {

  background(255);
  push();
  textSize(16);
  fill(0);
  let texto;
  texto = 'amplitud: ' + amp;
  text(texto, 10, 20);
  pop();

}