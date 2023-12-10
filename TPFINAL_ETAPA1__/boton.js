class Boton {
  constructor(x, y, r, text) {
    this.x = x;
    this.y = y;
    this.radio = r;
    this.text = text;
  }

  dibujar(x, y, r) {
    // Dibujar el botón en la pantalla
    if ( dist(mouseX, mouseY, x, y) <=r ) {
        fill(60, 203, 75);
      } else {
        fill(80, 162, 89);
      }
      circle( x, y, r *2 );
      fill(255);
      textSize(20);
      text(this.text, x, y);
  }

  botonRadio(x, y, r) {
    return dist(mouseX, mouseY, x, y) <=r ;
    
  }
  
  izquierda (){
  return mouseX < width / 2
  }
 
   derecha(){
   return mouseX > width / 2
   }

dibujarDerecha(){
  if (mouseX > width / 2) {
        tint(100, 100);
      }else if (mouseX < width / 2){
      noTint();
      }
}

dibujarIzquierda(){
  if (mouseX < width / 2) {
        tint(100, 100);
      }else if (mouseX > width / 2){
      noTint();
      }
}

  
}
