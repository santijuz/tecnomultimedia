boolean estoyDentroDeZonaCircular( int x, int y, int r ){ 
  return dist(mouseX, mouseY, x, y) <= r;
  
}

void reset() {  
  estado = 0;
}
