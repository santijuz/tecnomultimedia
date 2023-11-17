class Juego {
  constructor(bg_) {
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

    this.bg = bg_;
  }

  reiniciarJuego() {
    this.principe = new Principe(50, 40, this.carriles);
    this.libros = [];
    this.armas = [];
    for (let i = 0; i < 3; i++) {
      this.libros.push(new Libros(i));
    }
    this.estado = "instrucciones";
    this.vidasExtras = [];
    this.armasRecogidas = 0;
    frameCount = 0;
  }

  cargarPrincipeSprite() {
    this.principeSprite = []; // Arreglo para cargar las imágenes del sprite
    for (let i = 0; i < 5; i++) {
      this.principeSprite[i] = loadImage('data/personaje' + i + '.png');
    }
  }




  generarArma() {

    if (this.principe.armasRecogidas < 3 && random(2) < 0.008) {
      this.armas.push(new Arma(this.carriles));
    }
  }

  actualizar() {

    if (this.estado === "jugando") {
      // Cargar el sprite del príncipe solo si no se ha cargado previamente
      background(200);

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
      } else if (this.principe.armasRecogidas >= 3 && frameCount > 2200) {
        this.estado = "ganaste";
      } else if (this.principe.armasRecogidas < 3 && frameCount > 2200) {
        this.estado = "perdiste2";
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
      image(inicio, width/2, height/2);
      fill(255);
      text("Mueva el príncipe con las flechas del teclado", width / 2, 420);
      textSize(20);
      text("Esquive las piedras, recoja 3 armas para llegar a la cima", width / 2, 500);
      text("y enfrentar a la bruja", width/2, 530);
      text("CLIKEE EN LA PANTALLA PARA COMENZAR", width / 2, 70);
      if (mouseIsPressed) {
        this.estado = "jugando";
      }
    } else if (this.estado === "jugando") {

      // background(50);



      image(this.bg, 300, frameCount-900);
      //text(frameCount, width/2, height/2);
      image(this.principeSprite[this.principeNum], this.principe.x, this.principe.y, this.principe.ancho+20, this.principe.tam+20);

      // Cambiar el índice del sprite con el tiempo
      if (frameCount % this.principeSpeed === 0) {
        this.principeNum = (this.principeNum + 1) % this.principeFrames;
      }


      //image(corazonImagen, 10, 10, 30, 30); // Imagen para representar vidas
      for (let i = 0; i < this.principe.getVidas(); i++) {
        image(corazonImagen, 550 - i * 40, 50, 35, 35); // Dibujar vidas
      }

      //image(armaImagen, 10, 50, 30, 30); // Imagen para representar armas
      for (let i = 0; i < min(this.principe.armasRecogidas, 3); i++) {
        image(armaImagen, 50 + i * 40, 50, 35, 35); // Dibujar contador de armas (hasta 3)
      }

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
      image(ganaste, width/2, height/2);
      fill(255);
      text("Mataste a la bruja, vos y la princesa", width/2, 50);
      text("vivieron felices por siempre", width/2, 80);
      text("PULSE 'R' PARA REINICIAR", width/2, 500);
    } else if (this.estado === "perdiste") {
      image(caiste, width/2, height/2);
      fill(255);
      text("La bruja te tiro con sus piedras, moriste", width/2, 70);
      text("PULSE 'R' PARA REINICIAR", width/2, 500);
    } else if (this.estado === "perdiste2") {
      image(noArmas, width/2, height/2);
      fill(255);
      text("No recogiste las armas necesarias", width/2, 50);
      text("La bruja te mato", width/2, 80);
      text("PULSE 'R' PARA REINICIAR", width/2, 500);
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
