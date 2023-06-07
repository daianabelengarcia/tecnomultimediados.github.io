class Pincelada{
  
    constructor(){
      this.y=0;
      this.counter=0;
      this.posX=random(width);
      this.posY=0;
      this.x=0;
      this.tam=20;
      this.cambiaColor = random(10, 20);
      this.brillo = random(80,100);
      this.saturacion = random(70,100);
    }
    
    dibujar(amplitud){
      this.posY = this.y+=2;
      this.x= sin(this.counter)* 20 + this.posX;
    
      this.saturacion = map(amplitud, AMP_MIN, AMP_MAX, 60,100);
      colorMode(HSB);
      fill(this.cambiaColor, this.brillo, this.saturacion);

      noStroke();
      ellipse(this.x, this.posY, this.tam, this.tam);
    
      this.counter +=0.05;
    }
}