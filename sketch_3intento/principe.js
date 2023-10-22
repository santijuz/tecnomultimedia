class Principe {
  constructor(t, ancho, carriles) {
    this.tam = t;
    this.ancho = ancho;
    this.carriles = carriles;
    this.x = this.carriles[Math.floor(this.carriles.length / 2)];
    this.y = height - 150;
    this.c = color(100, 200, 100);
    this.vidas = 3;
    this.carrilActual = Math.floor(this.carriles.length / 2);
    this.inmune = false;
    this.targetX = this.x;
    this.armasRecogidas = 0;
    this.armas = [];
    
  }

  moverTeclas(tecla, izquierda, derecha) {
    if (tecla === izquierda && this.carrilActual > 0) {
      this.targetX = this.carriles[this.carrilActual - 1];
      this.carrilActual--;
    } else if (tecla === derecha && this.carrilActual < this.carriles.length - 1) {
      this.targetX = this.carriles[this.carrilActual + 1];
      this.carrilActual++;
    }
  }

 recogerArma(arma) {
    const colisionX = abs(this.x - arma.x) < this.tam / 2 + arma.tam / 2;
    const colisionY = abs(this.y - arma.y) < this.tam / 2 + arma.tam / 2;

    if (colisionX && colisionY) {
      return true;
    }

    return false;
  }

  dibujarArmas() {
    push();
    fill(0);
    ellipseMode(CENTER);

    for (let i = 0; i < this.armasRecogidas; i++) {
      const x = 30 + i * 30;
      const y = height - 30;
      ellipse(x, y, 10, 10);
    }
    pop();
  }

  cambiarCarril(Delta) {
    this.carrilActual += Delta;
    this.x = this.carriles[this.carrilActual];
  }

   dibujar() {
    push();
    //fill(this.c);
    rectMode(CENTER);
    this.x = lerp(this.x, this.targetX, 0.2);
    //rect(this.x, this.y, this.ancho, this.tam + 20);
    fill(0);
    text(this.vidas, this.x, this.y);
    // Mostrar el contador de armas
    text("Armas: " + this.armasRecogidas, 100, 100);
    pop();
  }

  calcularColision(libros) {
    if (this.inmune) {
      return;
    }

    for (let i = libros.length - 1; i >= 0; i--) {
      let libro = libros[i];
      let distancia = dist(this.x, this.y, libro.x, libro.y); // Calcular la distancia entre el príncipe y el libro

      if (distancia < this.tam / 2 + libro.r) { // Comprobar si la distancia es menor que el radio del príncipe + el radio del libro
        libros.splice(i, 1);
        this.vidas--;
        libros.push(new Libros(libro.carril));
        this.inmune = true;
        setTimeout(() => (this.inmune = false), 2000);
      }
    }
  }
  
  
  
  

  sumarArma() {
    this.armasRecogidas++;
  }

  getArmas() {
    return this.armas;
  }
  
  getVidas() {
    return this.vidas;
  }

  sumarVida() {
    this.vidas++;
  }
}
