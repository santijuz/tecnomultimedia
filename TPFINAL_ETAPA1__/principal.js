

class Aventura {
  constructor() {
    this.estado = 0;
    this.apreteLado = true;
    this.pantalla = [];
    this.loadImages();
    this.contador++;
    this.botonMenu = new Boton (500, 525, 50, "Menu");
    this.botonCreditos = new Boton (100, 525, 50, "Creditos");
  }


  loadImages() {
    const c = 23;
    for (let i = 0; i < c; i++) {
      this.pantalla[i] = loadImage('data/p' + i + '.png');
    }
  }

  dibujarAventura() {
    textAlign(CENTER, CENTER);
    switch (this.estado) {
    case 0: /////////////////////////////////////////////////////////MENU
      j.reiniciarJuego();
      image(this.pantalla[this.estado], width/2, height/2);
      fill(255);
      textSize(75);
      text("Rapunzel", 300, 50);
      textSize(20);
      text("Pulse en cualquier lugar de la pantalla para avanzar entre pantallas", 300, 500);
      textSize(15);

      text("En pantallas de eleccion, presione a la izquierda o derecha para elegir camino", 300, 520);

      break;
    case 1:
      image(this.pantalla[this.estado], width/2, height/2);


      textSize(20);
      text("Rapunzel es encerrada en una torre por una malvada bruja como castigo a sus padres. La torre no tiene puerta ni escaleras, solo una ventana en la parte superior.", 100, 450, 400, 100);

      break;
    case 2:
      image(this.pantalla[this.estado], width/2, height/2);


      textSize(20);
      text("La bruja visita a Rapunzel subiendo por su largo cabello y la mantiene aislada del mundo exterior. ", 100, 100, 400, 100);
      text("Rapunzel pasa sus días solitarios en la torre, dejando que su cabello crezca cada vez más.", 100, 180, 400, 100);

      break;
    case 3:
      push();
      this.botonMenu.dibujarDerecha()
        image(this.pantalla[3], 150, height/2);
      this.botonMenu.dibujarIzquierda()
        image(this.pantalla[4], 450, height/2);
      text("No hacer nada", 150, 100);
      text("Pelear con la bruja", 450, 500);
      pop();
      break;
    case 4:
      image(this.pantalla[5], width/2, height/2);


      text("Pelean con la bruja, pero esta saca un cuchillo y te mata", 100, 450, 400, 100);
      break;
    case 5:
      image(this.pantalla[6], width/2, height/2);

      textSize(100);
      text("FIN", 305, 100);


      ////////////BOTONES

      this.botonMenu.dibujar(500, 525, 50);
      this.botonCreditos.dibujar(100, 525, 50);

      break;
    case 6:
      image(this.pantalla[20], width/2, height/2);

      text("Un día, un príncipe se acerca a la torre y escucha a Rapunzel cantar. Fascinado por su voz, le pide a Rapunzel que deje caer su cabello para que pueda subir y conocerla.", 100, 450, 400, 100);
      break;
    case 7:
      push();
      this.botonMenu.dibujarDerecha()
        image(this.pantalla[21], 150, height/2);
      this.botonMenu.dibujarIzquierda()
        image(this.pantalla[22], 450, height/2);
      fill(255);
      text("Tirar el pelo", 150, 525);
      text("No hacer nada", 450, 525);
      pop();
      break;
    case 8:
      push();
      this.botonMenu.dibujarDerecha()
        image(this.pantalla[22], 150, height/2);
      this.botonMenu.dibujarIzquierda()
        image(this.pantalla[8], 450, height/2);
      text("Bajar escalando", 150, 100);
      text("No hacer nada", 450, 500);
      pop();
      break;
    case 9:
      image(this.pantalla[6], width/2, height/2);

      textSize(100);
      text("FIN", 305, 50);

      /////////BOTONESSS

      this.botonMenu.dibujar(500, 525, 50);
      this.botonCreditos.dibujar(100, 525, 50);

      text("Ranpunzel se quedo para toda su vida en la torre y murio ahi.", 100, 100, 400, 100);
      break;
    case 10:
      image(this.pantalla[9], width/2, height/2);


      text("Rapunzel y el príncipe se enamoran y planean escapar juntos de la torre. Sin embargo, la bruja descubre su plan y corta el cabello de Rapunzel, dejándola impotente y vulnerable.", 100, 50, 400, 100);
      break;
    case 11:
      image(this.pantalla[19], width/2, height/2);

      text("El principe al ver esta situacion se enoja", 100, 50, 400, 100);
      break;
    case 12:
      push();
      this.botonMenu.dibujarDerecha()
        image(this.pantalla[17], 150, height/2);
      this.botonMenu.dibujarIzquierda()
        image(this.pantalla[10], 450, height/2);
      fill(255);
      text("Esperar y subir otro dia", 150, 525);
      text("Subir y enfrentar a la bruja", 450, 525);
      pop();
      break;
    case 13://///////////////////////////////////////////////INSTRUCCIONES JUEGO
      image(this.pantalla[0], width/2, height/2);
      fill(255);
      text("Mueva el príncipe con las flechas del teclado", width / 2, 420);
      textSize(20);
      text("Esquive las piedras, recoja 3 armas para llegar a la cima", width / 2, 500);
      text("y enfrentar a la bruja", width/2, 530);
      text("CLIKEE EN LA PANTALLA PARA COMENZAR", width / 2, 70);


      break;
    case 14:    ////////////////////////////////////////////JUEGO
      j.actualizar();
      j.dibujar();

      break;
    case 15:///////////////////////////////////////////////////PERDISTE POR VIDAS
      image(this.pantalla[16], width/2, height/2);
      circle( 500, 525, 100 );
      fill(255);
      textSize(100);
      text("FIN", 305, 55);
      this.botonMenu.dibujar(500, 525, 50);
      this.botonCreditos.dibujar(100, 525, 50);
      text("La bruja te tiro con sus piedras, moriste", 100, 50, 400, 150);


      break;
    case 16://////////////////////////////////////////////PERDISTE POR ARMAS
      image(this.pantalla[15], width/2, height/2);
      //BOTONES
      circle( 500, 525, 100 );
      fill(255);
      textSize(100);
      text("FIN", 305, 55);
      this.botonMenu.dibujar(500, 525, 50);
      this.botonCreditos.dibujar(100, 525, 50);
      text("No recogiste las armas necesarias", 100, 50, 400, 150);
      text("La bruja mata al principe y Ranpunzel se queda en la torre para siempre", 100, 90, 400, 150);
      break;
    case 17:///////////////////////////////////////////////////GANASTE EL JUEGO
      image(this.pantalla[16], width/2, height/2);

      text("El principe enfrenta y mata a la bruja", 100, 50, 400, 100);
      break;
    case 18:
      image(this.pantalla[18], width/2, height/2);

      text("Rapunzel y el principe escapan de la torre y viven felices para siempre.", 100, 50, 400, 100);
      break;
    case 19: /////////////////////////////////////////// SIN MINIJUEGO
      image(this.pantalla[0], width/2, height/2);

      fill(255);
      this.botonMenu.dibujar(500, 525, 50);
      this.botonCreditos.dibujar(100, 525, 50);
      textSize(100);
      text("FIN", 305, 100);
      break;
    case 20: //CREDITOS
      image(this.pantalla[0], width/2, height/2);

      textSize(20);
      fill(255);
      this.botonMenu.dibujar(300, 525, 50);

      textSize(30);

      text("Rapunzel - Hermanos Grimm", 305, 100);

      textAlign( LEFT, CENTER );
      textSize(20);

      text("Santino Juzwa", 50, 140);
      text("Legajo 94788/4", 50, 160);
      text("Comision 2", 50, 180);
      text("Imagenes : Pelicula enredados", 50, 240);
      text("Textos: ChatGPT", 50, 260);


      break;
    }
  }

  mousePressed() {
    if (this.estado == 0 && this.apreteLado) {
      this.estado = 1;
    } else if (this.estado == 1 && this.apreteLado) {
      this.estado = 2;
    } else if (this.estado == 2 && this.apreteLado) {
      this.estado = 3;
    } else if (this.estado == 3) {
      if (this.botonMenu.izquierda()) {
        this.estado = 6;
      } else if (this.botonMenu.derecha()) {
        this.estado = 4;
      }
    } else if (this.estado == 4 && this.apreteLado) {
      this.estado = 5;
    } else if (this.estado == 5) {
      if (this.botonCreditos.botonRadio(100, 525, 50)) {
        this.estado = 20;
      } else if (this.botonMenu.botonRadio(500, 525, 50)) {
        this.estado = 0;
        j.reiniciarJuego();
      }
    } else if (this.estado == 6 && this.apreteLado) {
      this.estado = 7;
    } else if (this.estado == 7) {
      if (this.botonMenu.izquierda()) {
        this.estado = 10;
      } else if (this.botonMenu.derecha()) {
        this.estado = 8;
      }
    } else if (this.estado == 8) {
      if (this.botonMenu.izquierda()) {
        this.estado = 10;
      } else if (this.botonMenu.derecha()) {
        this.estado = 9;
      }
    } else if (this.estado == 9) {
      if (this.botonCreditos.botonRadio(100, 525, 50)) {
        this.estado = 20;
      } else if (this.botonMenu.botonRadio(500, 525, 50)) {
        this.estado = 0;
        j.reiniciarJuego();
      }
    } else if (this.estado == 10 && this.apreteLado) {
      this.estado = 11;
    } else if (this.estado == 11 && this.apreteLado) {
      this.estado = 12;
    } else if (this.estado == 12) {
      if (this.botonMenu.izquierda()) {
        this.estado = 18;
      } else if (this.botonMenu.derecha()) {
        this.estado = 13;
      }
    } else if (this.estado == 13 && this.apreteLado) {
      this.estado = 14;
    } else if (this.estado == 15) {
      if (this.botonCreditos.botonRadio(100, 525, 50)) {
        this.estado = 20;
      } else if (this.botonMenu.botonRadio(500, 525, 50)) {
        this.estado = 0;
        j.reiniciarJuego();
      }
    } else if (this.estado == 16) {
      if (this.botonCreditos.botonRadio(100, 525, 50)) {
        this.estado = 20;
      } else if (this.botonMenu.botonRadio(500, 525, 50)) {
        this.estado = 0;
        j.reiniciarJuego();
      }
    } else if (this.estado == 17 && this.apreteLado) {
      this.estado = 18;
    } else if (this.estado == 18 && this.apreteLado) {
      this.estado = 19;
    } else if (this.estado == 19) {
      if (this.botonCreditos.botonRadio(100, 525, 50)) {
        this.estado = 20;
      } else if (this.botonMenu.botonRadio(500, 525, 50)) {
        this.estado = 0;
      }
    } else if (this.estado == 20) {
      if (this.botonMenu.botonRadio(300, 525, 50)) {
        this.estado = 0;
        j.reiniciarJuego();
      }
    }
  }

  reset() {
    this.estado = 0;
  }
}
