class Arma {
  constructor(carriles) {
    this.tam = 30;
    this.carriles = carriles;
    this.x = this.carriles[Math.floor(random(this.carriles.length))];
    this.y = int(random(-30, -40)); // Frecuencia de aparición ajustada
    this.c = color(0); // Color negro para el arma
  }

  actualizar() {
    this.y += random(3, 6);

    if (this.contador < 2800) {
      if (this.y >= height) {
        this.y = int(random(-30, -40)); // Frecuencia de aparición ajustada
        this.x = this.carriles[Math.floor(random(this.carriles.length))];
      }
    }
  }

  dibujar() {
     push();
    imageMode(CENTER);
    image(armaImagen, this.x, this.y, this.tam, this.tam);
    pop();
  }
}
