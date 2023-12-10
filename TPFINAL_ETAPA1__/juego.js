/* profe alfianl no supe como hacer para corregir lo que me habias pedido de como 
le pasaba los estados de la aventura al juego, lo que si hice fue hacer uso de la clase boton.
*/

class Juego {
  constructor(bg_, piedraImagen_, corazonImagen_, armaImagen_) {
    this.carriles = [150, 300, 450]; // Posiciones de los carriles
    this.principe = new Principe(50, 40, this.carriles);
    this.libros = [];
    this.armas = [];
    for (let i = 0; i < 3; i++) {
      this.libros.push(new Libros(i));
    }
    this.estadoJuego = "jugando";
    this.vidasExtras = [];
    this.armasRecogidas = 0;
    this.principeSprite = []; // Variable para el sprite del príncipe
    this.principeFrames = 5; // Número de imágenes en el sprite sheet
    this.principeNum = 0; // Índice actual del sprite del príncipe
    this.principeSpeed = 10; // Velocidad de animación del sprite
    this.contador = 0;
    this.bg = bg_;
    this.piedraImagen = piedraImagen_;
    this.corazonImagen = corazonImagen_;
    this.armaImagen = armaImagen_;
    if (this.estado === "jugando") {
      this.contador = 0;
    }
    
  }

  reiniciarJuego() {
    this.principe = new Principe(50, 40, this.carriles);
    this.libros = [];
    this.armas = [];
    for (let i = 0; i < 3; i++) {
      this.libros.push(new Libros(i));
    }
    this.estado = "jugando";
    this.vidasExtras = [];
    this.armasRecogidas = 0;
    //frameCount = 0;
    this.contador = 0;
    a.contador = 0;
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

    if (this.estadoJuego === "jugando") {

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
      if (this.principe.getVidas() === 0) { ///////////////////////////PERDISTE POR VIDAS
        a.estado = 15;
      } else if (this.principe.armasRecogidas >= 3 && this.contador > 2200) {///// GANASTE
        a.estado = 17;
      } else if (this.principe.armasRecogidas < 3 && this.contador > 2200) {///// PERDISTE POR ARMAS
        a.estado = 16;
      }


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
    if (this.estadoJuego === "jugando") {

      image(this.bg, 300, this.contador++ - 900);
      image(this.principeSprite[this.principeNum], this.principe.x, this.principe.y, this.principe.ancho+20, this.principe.tam+20);
      //text(this.contador, width/2, height/2);
      // Cambiar el índice del sprite con el tiempo
      if (frameCount % this.principeSpeed === 0) {
        this.principeNum = (this.principeNum + 1) % this.principeFrames;
      }


      // Imagen para representar vidas
      for (let i = 0; i < this.principe.getVidas(); i++) {
        image(corazonImagen, 550 - i * 40, 50, 35, 35); // Dibujar vidas
      }

      // Imagen para representar armas
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

    }
  }

  teclado() {
    if (this.estadoJuego === "jugando") {
      this.principe.moverTeclas(
        keyCode,
        LEFT_ARROW,
        RIGHT_ARROW
        );
    }
  }
}
