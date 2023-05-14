//Santino Juzwa
//legajo 94788/4

PImage monoInicio;
PImage monoP1;
PImage monoP2;
PImage monoP3;
PImage monoP4;

PFont fuente;

int x1, y1, d;
int marcaEnElTiempo;
float distancia, radio;
float posX, opacidad;
String estado;
String t1 = "Mas conocido como el mono sin nariz, de origen Birmano, es uno de los animales mas raros del mundo.";
String t2 = "La población conocida se estima que\n está formada por 260-330 individuos.\n La especie es conocida en los dialectos\n locales como nwoah mey";
String t3 = "Curiosidades\n-Son animales ágiles\n-Su método de reproducción es desconocido\n-Su dieta es, sobre todo, vegetariana";

int x = 10 ;
int y = 10;
boolean debug;
boolean izquierda;
int vel = 1;

void setup() {
  size(640, 480 );
  textAlign(CENTER, CENTER);
  debug = false;
  izquierda = true;
  posX = 0 ;
  opacidad = 255;

  monoP2 = loadImage("monoP2r.jpg");
  monoInicio = loadImage("monoINICIO2r.jpg");
  monoP1 = loadImage("monoP1r.jpg");
  monoP3 = loadImage("monoP3r.jpg");
  monoP4 = loadImage("monoP4r.jpg");
  fuente = loadFont("Gadugi-48.vlw");


  estado = "inicio";
}

void draw() {

  int diferenciaTemporal = millis() - marcaEnElTiempo;
  radio = d / 2;

  //pantalla de inicio
  if ( estado ==("inicio") ) {
    image(monoInicio, 0, 0);
    textSize(70);
    textFont(fuente);
    text("RHINOPITHECUS STRYKERI", width/2, 70);
    x = 70;
    y = 415;
    d = 90;
    distancia = dist(x, y, mouseX, mouseY);
    if ( distancia < radio ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }

    circle( x, y, d );
    fill(255);
    textSize(22);
    text("INICIAR", x, y);


    //primera pantalla
    if ( diferenciaTemporal >= 1000000 ) {
      estado = "p1";
      marcaEnElTiempo = millis();
    }

    //Pantalla 1
  } else if (estado == "p1" ) {
    image(monoP1, 0, 0);
    textSize(25);
    fill(255);
    text( t1, x, 20, 270, 210);
    if ( x >= 380 ) {  //borde derecha
      izquierda = true;
      if ( vel < 10 ) {
        vel++;
      }
    }
    if ( x <= 10 ) {  //borde izquierda
      izquierda = false;

      if ( vel < 10 ) {
        vel++;
      }
    }
    //
    if ( izquierda ) {
      x -= vel;
    } else {
      x += vel;
    }
    if ( diferenciaTemporal >= 7*1000 ) {
      estado = "p2";
      marcaEnElTiempo = millis();
    }
    //Pantalla 2
  } else if (estado == "p2" ) {
    vel = 1;
    image(monoP2, 0, 0);
    textSize(25);
    fill(65, 229, 176);
    text( t2, 10, y, 290, 270);
    if ( y >= 250 ) {  //abajo
      izquierda = true;
      if ( vel < 10 ) {
        vel++;
      }
    }
    if ( y <= 1 ) {  //arriba
      izquierda = false;
    }
    //
    if ( izquierda ) {
      y -= vel;
    } else {
      y += vel;
    }
    if ( diferenciaTemporal >= 7*1000 ) {
      estado = "p2";
      marcaEnElTiempo = millis();
    }

    //
    if ( diferenciaTemporal >= 7*1000 ) {
      estado = "p3";
      marcaEnElTiempo = millis();
    }

    //Pantalla 3
  } else if (estado == "p3" ) {
    posX = posX + 0.1;
    opacidad = opacidad - 0.02;
    image(monoP3, 0, 0);
    textSize(30);
    fill(255, opacidad);
    textAlign(LEFT);
    text(t3, posX, 20, 300, 300);

    //
    if ( diferenciaTemporal >= 7000 ) {
      estado = "p4";
      marcaEnElTiempo = millis();
    }

    //Pantalla 4
  } else if (estado == "p4") {
    image(monoP4, 0, 0);
    opacidad = opacidad - 0.2;
    textAlign(CENTER, CENTER);
    x = 570;
    y = 415;
    d = 120;
    distancia = dist(x, y, mouseX, mouseY);
    textSize(50);
    textFont(fuente);
    fill(opacidad*2, opacidad, opacidad/2);
    text("GRACIAS POR VER", width/2, 100);
    if ( distancia < radio ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }

    circle( x, y, d );
    fill(255);
    textSize(22);
    text("REINICIAR", x, y);
  }

  println( millis() + " - " + marcaEnElTiempo + " = " + diferenciaTemporal );
}
void mousePressed() {
  if ( distancia < radio ) {
    estado = "p1";
    marcaEnElTiempo = millis();
  }
}
