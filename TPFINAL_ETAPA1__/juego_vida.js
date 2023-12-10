

class Vida {
  constructor(carriles) {
    this.tam = 30;
    this.carriles = carriles;
    this.x = this.carriles[Math.floor(random(this.carriles.length))];
    this.y = -30;//int(random(-600, -900));
    this.c = color(200, 0, 0); // Color rojo
  }

  actualizar() {
    this.y += random(3, 6);

    if (this.contador < 2800) {
      if (this.y >= height) {
        this.y = int(random(-600, -900));
        this.x = this.carriles[Math.floor(random(this.carriles.length))];
      }
    }
  }
  dibujar() {
    push();
    imageMode(CENTER);
    image(corazonImagen, this.x, this.y, this.tam, this.tam);
    pop();
  }
}
