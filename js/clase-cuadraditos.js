let posx;

class Cuadrados {
  constructor() {
    this.tamx = 10;
    this.tamy = 20;
  }
  dibujar() {
    noStroke();
    fill(255);
    let candtidadDeColumnas = mouseY/20;
    let cantidadDeFilas = 200;
    let movimiento = frameCount % 20;
    
     if(mouseX<= 200){ // Condicion de ubicaion del mouse que controla el movimiento
      movimiento=0;
      }

    for(let i = 0; i<candtidadDeColumnas; i+=1){ //dibuja filas y columnas
      for(let e= 0; e<cantidadDeFilas; e+=2){ 
        let posX= i*20 + movimiento; // movieminto en x 
        let posY= e*20;
        rect(posX, posY, 10, 20);
      }
    }
   


  }
}
