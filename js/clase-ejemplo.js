let m0 = [];
let m1 = [];
let capas;
let diryvel;

class Principal {
  constructor() {
    diryvel = new Direccionyvelocidad();

    for (let i = 0; i < 20; i++) {
      m0.push(new Marron());
      m1.push(new Marron());
    }

    capas = 0;
  }

  dibujar() {
	diryvel.calcular(mouseX,mouseY);
    console.log(diryvel.direcciony());
	console.log(capas);

	if (capas == 0 && diryvel.direcciony() <= 0) {
        for (let i = 0; i < 20; i++) {
          m0[i].marronoscuro();
          m0[i].mover();
		}
		  capas = 1;
        } else if ( capas== 0 && diryvel.direcciony() >= 0) {
        for (let i = 0; i < 20; i++) {
          m0[i].marronclaro();
          m0[i].mover();
        }
		capas = 1;
    } 
	
	if (capas == 2 && m0[0].posy >= 0 && diryvel.direcciony() <= 0) {
        for (let i = 0; i < 20; i++) {
          m1[i].marronoscuro();
          m1[i].mover();
        }
		capas = 3;
      } else if ( capas == 2 && m0[0].posy >= 0 &&diryvel.direcciony() >= 0) {
        for (let i = 0; i < 20; i++) {
          m1[i].marronclaro();
          m1[i].mover();
        }
		capas = 3;
      }
    }
}