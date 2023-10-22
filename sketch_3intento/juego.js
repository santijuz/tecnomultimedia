class Juego {
  constructor() {
    this.carriles = [150, 300, 450]; // Posiciones de los carriles
    this.principe = new Principe(50, 40, this.carriles);
    this.libros = [];
    this.armas = [];
    for (let i = 0; i < 3; i++) {
      this.libros.push(new Libros(i));
    }
    this.estado = "instrucciones";
    this.vidasExtras = [];
    this.armasRecogidas = 0;
    this.principeSprite = []; // Variable para el sprite del príncipe
    this.principeFrames = 5; // Número de imágenes en el sprite sheet
    this.principeNum = 0; // Índice actual del sprite del príncipe
    this.principeSpeed = 10; // Velocidad de animación del sprite
    //this.millis(); 
    this.tiempo = millis();
  }

  cargarPrincipeSprite() {
    this.principeSprite = []; // Arreglo para cargar las imágenes del sprite
    for (let i = 0; i < 5; i++) {
      this.principeSprite[i] = loadImage('data/personaje' + i + '.png');
    }
  }

  generarArma() {

    if (this.principe.armasRecogidas < 3 && random(1) < 0.005) {
      this.armas.push(new Arma(this.carriles));
    }
  }

  actualizar() {
    
    if (this.estado === "jugando") {
      // Cargar el sprite del príncipe solo si no se ha cargado previamente
      if (this.principeSprite.length === 0) {
        this.cargarPrincipeSprite();
      }
      for (let i = 0; i < this.libros.length; i++) {
        this.libros[i].actualizar();
      }

      for (let i = 0; i < this.vidasExtras.length; i++) {
        this.vidasExtras[i].actualizar();
      }

      if (this.vidasExtras.length > 0) {
        let vidaExtra = this.vidasExtras[0];
        let colisionX = abs(this.principe.x - vidaExtra.x) < this.principe.tam / 2 + vidaExtra.tam / 2;
        let colisionY = abs(this.principe.y - vidaExtra.y) < this.principe.tam / 2 + vidaExtra.tam / 2;

        if (colisionX && colisionY) {
          this.principe.vidas++;
          this.vidasExtras.pop();
        }
      }

      this.principe.calcularColision(this.libros);
      if (this.principe.getVidas() === 0) {
        this.estado = "perdiste";
      }
//    image(this.principeSprite[this.principeNum], this.principe.x, this.principe.y);

//// Cambiar el índice del sprite con el tiempo
//      if (frameCount % this.principeSpeed === 0) {
//        this.principeNum = (this.principeNum + 1) % this.principeFrames;
//      }
    
    this.generarArma();

    for (let i = this.armas.length - 1; i >= 0; i--) {
      this.armas[i].actualizar();

      if (this.principe.recogerArma(this.armas[i])) {
        this.principe.sumarArma();
        this.armas.splice(i, 1);
      }
    }

    if (this.principe.vidas < 3 && this.vidasExtras.length === 0) {
      this.vidasExtras.push(new Vida(this.carriles));
    }
    }
  }
  dibujar() {
    if (this.estado === "instrucciones") {
      text("Mueva el príncipe con las flechas del teclado", width / 2, 100);
      text("Esquive los libros y recoja armas para llegar al otro lado", width / 2, 130);
      text("PRESIONE CUALQUIER TECLA PARA COMENZAR", width / 2, 200);
      if (keyIsPressed) {
        this.estado = "jugando";
      }
    } else if (this.estado === "jugando") {

      background(50);

   image(this.principeSprite[this.principeNum], this.principe.x, this.principe.y,this.principe.ancho+20, this.principe.tam+20);

// Cambiar el índice del sprite con el tiempo
      if (frameCount % this.principeSpeed === 0) {
        this.principeNum = (this.principeNum + 1) % this.principeFrames;
      }
      push();

      strokeWeight(2);
      stroke(255);
      for (let i = 0; i < 3; i++) {
        line(this.carriles[i], 0, this.carriles[i], height);
      }

      pop();

      this.principe.dibujar();

      for (let i = 0; i < this.libros.length; i++) {
        this.libros[i].dibujar();
      }

      for (let i = 0; i < this.armas.length; i++) {
        this.armas[i].dibujar();
      }

      for (let i = 0; i < this.vidasExtras.length; i++) {
        this.vidasExtras[i].dibujar();
      }
    } else if (this.estado === "ganaste") {
      background(0, 200, 0);
    } else if (this.estado === "perdiste") {
      background(200, 0, 0);
    }
  }

  teclado() {
    if (this.estado === "jugando") {
      this.principe.moverTeclas(
        keyCode,
        LEFT_ARROW,
        RIGHT_ARROW
        );
    }
  }
}
