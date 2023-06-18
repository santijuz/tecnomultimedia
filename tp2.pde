/*Santino Juzwa
Legajo 94788/4
Video : https://youtu.be/0EnGh8Vh904
*/

float tiempo;
color bg = color(255, 243, 3);
PImage imagen;


void setup() {
  size(800, 400);
  imagen = loadImage("arte.jpg");
}

void draw() {
  background (bg);
  translate(600, 200);
  tiempo = 0;


  pushMatrix();
  stroke(209, 18, 8);
  strokeWeight(5);
  dibujaTriangulo1(0, 0, 0, 0, 0, 0,
    //posiciones
    -550, 350, 0, -500, 550, 350, 22);
  colorMode(RGB);
  stroke(141, 8, 209);
  strokeWeight(5);

  //SEGUNDOS TRIANGULOS
  dibujaTriangulo2(0, 0, 0, 0, 0, 0,
    //posiciones
    -558, 358, 8, -508, 558, 358, 22);
  popMatrix();
  image(imagen, -600, -200, 400, 400);
}



void dibujaTriangulo1(
  float x1, float y1, float x2, float y2, float x3, float y3, float x1_destino, float y1_destino, float x2_destino, float y2_destino, float x3_destino, float y3_destino, float cant) {



  push();

  for ( float i=0; i<cant; i++ ) {

    float xprimer = map( i, 0, cant, x1, x1_destino);
    float yprimer = map( i, 0, cant, y1, y1_destino);
    float xsegundo = map( i, 0, cant, x2, x2_destino );
    float ysegundo = map( i, 0, cant, y2, y2_destino );
    float xtercero = map( i, 0, cant, x3, x3_destino );
    float ytercero = map( i, 0, cant, y3, y3_destino );


    noFill();
    float tiempo = frameCount;
    rotate(radians(-tiempo/12));

    triangle(xprimer, yprimer, xsegundo, ysegundo, xtercero, ytercero);
  }

  pop();
}
void dibujaTriangulo2(
  float x12, float y12, float x22, float y22, float x32, float y32, float x1_destino2, float y1_destino2, float x2_destino2, float y2_destino2, float x3_destino2, float y3_destino2, float cant2) {



  push();

  for ( float i=0; i<cant2; i++ ) {

    float xprimer = map( i, 0, cant2, x12, x1_destino2);
    float yprimer = map( i, 0, cant2, y12, y1_destino2);
    float xsegundo = map( i, 0, cant2, x22, x2_destino2 );
    float ysegundo = map( i, 0, cant2, y22, y2_destino2 );
    float xtercero = map( i, 0, cant2, x32, x3_destino2 );
    float ytercero = map( i, 0, cant2, y32, y3_destino2 );


    noFill();
    float tiempo = frameCount;
    rotate(radians(-tiempo/12));
    triangle(xprimer, yprimer, xsegundo, ysegundo, xtercero, ytercero);
  }

  pop();
}

void resetVariables(float tiempo) {
  
  tiempo = 0;
  bg = color(255, 243, 3);
}


void keyPressed() {
  if (key == ' ') {
    bg = color(255, random(0, 255), 0);
  }
  if (key == 'r') {
    resetVariables(tiempo);
  }
}
