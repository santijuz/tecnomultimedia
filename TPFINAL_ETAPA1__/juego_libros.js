class Libros {
  constructor(carril) {
    this.t = 50; // Cambiar el tamaño de los libros
    this.r = this.t / 2; // Radio del libro
    this.v = random(3, 6);
    this.carril = carril;
    this.x = carril * 150 + 150; // Posición del carril centrado
    this.y = int(random(-200, -500));
    this.contador = 0;
  }

  actualizar() {
    this.y += this.v;

    if (this.contador < 2800) {
      if (this.y >= height ) {
        this.y = int(random(-200, -500));
        this.v = random(3, 6);
      }
    }
  }

    dibujar() {
     push();
    imageMode(CENTER);
    image(piedraImagen, this.x, this.y, this.t, this.t);
    pop();
    }
  }
