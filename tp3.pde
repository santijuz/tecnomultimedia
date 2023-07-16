//Santino Juzwa
//legajo 94788/4
//Video: https://youtu.be/Ms2XRawE-tM




int estado;
float distancia, radio;
int c = 23;
boolean apreteBotonMenu;
PImage[] pantalla = new PImage[c];


void setup() {
  estado = 0;
  textAlign( CENTER, CENTER );
  apreteBotonMenu = true;
  size (600, 600);
  for ( int i = 0; i < c; i++ ) {
    pantalla[i] = loadImage( "p" + i + ".png" );
  }
}
void draw() {
  //image(pantalla[1], 0,0);
  textAlign( CENTER, CENTER );
  switch(estado) {
  case 0: //MENU

    image(pantalla[estado], 0, 0);
    //size(400, 400);
    //String s = "Rapunzel";
    fill(255);
    textSize(75);
    text("Rapunzel", 300, 50);
    textSize(20);
    text("Pulse en cualquier lugar de la pantalla para avanzar entre pantallas", 300, 500);
    textSize(15);

    text("En pantallas de eleccion, presione a la izquierda o derecha para elegir camino", 300, 520);

    break;
  case 1:
    image(pantalla[estado], 0, 0);

    String s = "Rapunzel es encerrada en una torre por una malvada bruja como castigo a sus padres. La torre no tiene puerta ni escaleras, solo una ventana en la parte superior.";
    textSize(20);
    text(s, 100, 450, 400, 100);

    break;
  case 2:
    image(pantalla[estado], 0, 0);

    String q = "La bruja visita a Rapunzel subiendo por su largo cabello y la mantiene aislada del mundo exterior. Rapunzel pasa sus días solitarios en la torre, dejando que su cabello crezca cada vez más.";
    textSize(20);
    text(q, 100, 100, 400, 100);

    break;
  case 3:
    image(pantalla[3], 0, 0);
    image(pantalla[4], 300, 0);
    text("No hacer nada", 150, 100);
    text("Pelear con la bruja", 450, 500);
    break;
  case 4:
    image(pantalla[5], 0, 0);

    String w = "Pelean con la bruja, pero esta saca un cuchillo y te mata";
    text(w, 100, 450, 400, 100);
    break;
  case 5:
    image(pantalla[6], 0, 0);
    //BOTONES
    if ( dist(mouseX, mouseY, 100, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 100, 525, 100 );
    if ( dist(mouseX, mouseY, 500, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 500, 525, 100 );
    fill(255);
    textSize(100);
    text("FIN", 305, 100);
    textSize(20);

    text("Creditos", 100, 525);
    text("Menu", 500, 525);
    break;
  case 6:
    image(pantalla[20], 0, 0);
    String e = "Un día, un príncipe se acerca a la torre y escucha a Rapunzel cantar. Fascinado por su voz, le pide a Rapunzel que deje caer su cabello para que pueda subir y conocerla.";
    text(e, 100, 450, 400, 100);
    break;
  case 7:
    image(pantalla[21], 0, 0);
    image(pantalla[22], 300, 0);
    fill(255);
    text("Tirar el pelo", 150, 525);
    text("No hacer nada", 450, 525);
    break;
  case 8:
    image(pantalla[22], 0, 0);
    image(pantalla[8], 0, 0);
    text("Bajar escalando", 150, 100);
    //text("No hacer nada",450,500);
    break;
  case 9:
    image(pantalla[6], 0, 0);
    //BOTONES
    if ( dist(mouseX, mouseY, 100, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 100, 525, 100 );
    if ( dist(mouseX, mouseY, 500, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 500, 525, 100 );
    fill(255);
    textSize(100);
    text("FIN", 305, 50);
    textSize(20);
    text("Creditos", 100, 525);
    text("Menu", 500, 525);
    String r = "Ranpunzel se quedo para toda su vida en la torre y murio ahi.";
    text(r, 100, 100, 400, 100);
    break;
  case 10:
    image(pantalla[9], 0, 0);

    String t = "Rapunzel y el príncipe se enamoran y planean escapar juntos de la torre. Sin embargo, la bruja descubre su plan y corta el cabello de Rapunzel, dejándola impotente y vulnerable.";
    text(t, 100, 50, 400, 100);
    break;
  case 11:
    image(pantalla[19], 0, 0);
    String y = "El principe al ver esta situacion se enoja";
    text(y, 100, 50, 400, 100);
    break;
  case 12:
    image(pantalla[17], 0, 0);
    image(pantalla[10], 300, 0);
    fill(255);
    text("Esperar y subir otro dia", 150, 525);
    text("Subir y enfrentar a la bruja", 450, 525);
    break;
  case 13:
    image(pantalla[11], 0, 0);
    text("El principe sube y enfrenta a la bruja", 300, 525);
    break;
  case 14:
    image(pantalla[12], 0, 0);
    text("La bruja saca un cuchillo", 300, 100);
    break;
  case 15:
    image(pantalla[14], 0, 0);
    image(pantalla[13], 300, 0);
    fill(255);
    text("Agarrar un vidrio", 150, 525);
    text("Pelear sin nada", 450, 525);

    break;
  case 16:
    image(pantalla[15], 0, 0);
    //BOTONES
    if ( dist(mouseX, mouseY, 100, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 100, 525, 100 );
    if ( dist(mouseX, mouseY, 500, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 500, 525, 100 );
    fill(255);
    textSize(100);
    text("FIN", 305, 50);
    textSize(20);
    text("Creditos", 100, 525);
    text("Menu", 500, 525);
    String u = "La bruja mata al principe y Ranpunzel se queda en la torre para siempre";
    text(u, 100, 50, 400, 150);
    break;
  case 17:
    image(pantalla[16], 0, 0);
    String i = "El principe agarra un pedazo de vidrio y mata a la bruja";
    text(i, 100, 50, 400, 100);
    break;
  case 18:
    image(pantalla[18], 0, 0);
    String o = "Rapunzel y el principe escapan de la torre y viven felices para siempre.";
    text(o, 100, 50, 400, 100);
    break;
  case 19: //FINAL
    image(pantalla[0], 0, 0);
    //BOTONES
    if ( dist(mouseX, mouseY, 100, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 100, 525, 100 );
    if ( dist(mouseX, mouseY, 500, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 500, 525, 100 );
    fill(255);
    textSize(20);
    text("Creditos", 100, 525);
    text("Menu", 500, 525);
    textSize(100);
    text("FIN", 305, 100);
    break;
  case 20: //CREDITOS
    image(pantalla[0], 0, 0);
    //BOTONES
    if ( dist(mouseX, mouseY, 300, 525)<=50 ) {
      fill(60, 203, 75);
    } else {
      fill(80, 162, 89);
    }
    circle( 300, 525, 100 );
    textSize(20);
    fill(255);
    text("Menu", 300, 525);
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

void mousePressed() {  //aca se programan los botones

  if ( estado == 0 && apreteBotonMenu ) {
    estado = 1;
  } else if ( estado == 1 && apreteBotonMenu) {
    estado = 2;
  } else if ( estado == 2 && apreteBotonMenu) {
    estado = 3;
  } else if ( estado == 3 ) {
    if ( mouseX < width/2 ) {  //mitad izquierda de la pantalla
      estado = 6;
    }
    if ( mouseX > width/2 ) {  //mitad derecha de la pantalla
      estado = 4;
    }
  } else if ( estado == 4 && apreteBotonMenu) {
    estado = 5;
  } else if ( estado == 5 && estoyDentroDeZonaCircular(100, 525, 50) ) { //FINAL 1
    estado = 20;
  } else if ( estado == 5 && estoyDentroDeZonaCircular(500, 525, 50) ) {
    estado = 0;
  } else if ( estado == 6 && apreteBotonMenu) {
    estado = 7;
  } else if ( estado == 7 ) {
    if ( mouseX < width/2 ) {  //mitad izquierda de la pantalla
      estado = 10;
    }
    if ( mouseX > width/2 ) {  //mitad derecha de la pantalla
      estado = 8;
    }
  } else if ( estado == 8 ) {
    if ( mouseX < width/2 ) {  //mitad izquierda de la pantalla
      estado = 10;
    }
    if ( mouseX > width/2 ) {  //mitad derecha de la pantalla
      estado = 9;
    }
  } else if ( estado == 9 && estoyDentroDeZonaCircular(100, 525, 50) ) { //FINAL 2
    estado = 20;
  } else if ( estado == 9 && estoyDentroDeZonaCircular(500, 525, 50) ) {
    estado = 0;
  } else if ( estado == 10 && apreteBotonMenu) {
    estado = 11;
  } else if ( estado == 11 && apreteBotonMenu) {
    estado = 12;
  } else if ( estado == 12 ) {
    if ( mouseX < width/2 ) {  //mitad izquierda de la pantalla
      estado = 18;
    }
    if ( mouseX > width/2 ) {  //mitad derecha de la pantalla
      estado = 13;
    }
  } else if ( estado == 13 && apreteBotonMenu) {
    estado = 14;
  } else if ( estado == 14 && apreteBotonMenu) {
    estado = 15;
  } else if ( estado == 15 ) {
    if ( mouseX < width/2 ) {  //mitad izquierda de la pantalla
      estado = 17;
    }
    if ( mouseX > width/2 ) {  //mitad derecha de la pantalla
      estado = 16;
    }
  } else if ( estado == 16 && estoyDentroDeZonaCircular(100, 525, 50) ) { //FINAL 3
    estado = 20;
  } else if ( estado == 16 && estoyDentroDeZonaCircular(500, 525, 50) ) {
    reset();
  } else if ( estado == 17 && apreteBotonMenu) {
    estado = 18;
  } else if ( estado == 18 && apreteBotonMenu) {
    estado = 19;
  } else if ( estado == 19 && estoyDentroDeZonaCircular(100, 525, 50) ) { //FINAL 4
    estado = 20;
  } else if ( estado == 19 && estoyDentroDeZonaCircular(500, 525, 50) ) {
    estado = 0;
  } else if ( estado == 20 && estoyDentroDeZonaCircular(300, 525, 50) ) {
    estado = 0;
  }
}


//if ( estado == 0 && apreteBotonMenu ) {
//  estado = 1;
//} else if ( estado == 1 && apreteBotonMenu ) {
//  estado = 2;
//} else if ( estado == 2 && apreteBotonMenu ) {
//  estado = 3;
//} else if ( estado == 3 && apreteBotonMenu ) {
//  estado = 4;
//}
