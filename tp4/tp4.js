//////// VIDEO YOUTUBE https://youtu.be/dd0JQONGep4


/////////'Trailing comma in arguments lists' is only available in ES8 (use 'esversion: 8').////
//////// UNO DE LOS ERRORES QUE ME TIRABA AL INTENTAR SUBIR LAS IMAGENES CON CICLO FOR

let x1, y1, x2, y2, p1, p2, t1, t2, tt;
let debug = true;
let timer = 5;
let estado = "menu";
let puntos;


//////////////VARIABLES PARA LA CARGA DE IMAGENES CON FOR
//let imagenes = [];
//let c = 10;

function setup() {
  createCanvas( 800, 600 );
  imageMode( CENTER );
  textSize( 50 );

  x1 = width/2;
  y1 = height/2;
  t1 = 130;
  t2 = 65;




  puntos = 0;
}


function draw() {
  // background( 200 );
  tiempo  = 5;
  tt = random(t1/2, t1);
  x2 = mouseX;
  y2 = mouseY;


  if (estado === "menu") {
    fill(255);

    image(fondoMenu, width/2, height/2);
    image(botonInicio, width/2, 400, 100, 100);
    image(botonCreditos, 150, 450, 100, 100);




    //circle( width/2, 400, 80 );
    if (mouseIsPressed) {
      //mi boton
      if ( dist(width/2, 400, mouseX, mouseY) < 50 ) {
        estado = "juego";
      }
      if ( dist(150, 450, mouseX, mouseY) < 50 ) {
        estado = "creditos";
        timer = 5;
        puntos = 0;
      }
    }
  } else if (estado == "juego") {


    image(fondo, width/2, height/2);

    image( objetivo, x1, y1, t1, t1 );
    image( mira, x2, y2, t2, t2 );

    text( puntos, 100, 50 );

    if (timer > 0 && puntos > 0) {
      timer -= 1/60
    }


    let len = map(timer, 0, 10, 0, 250)
      rect(40, 10, 30, len)

      if (timer < 0) {
      estado = "fin";
    }
  } else if (estado == "fin") {

    image(fondo, width/2, height/2);
    image(puntaje, width/2, height/2);


    textAlign(CENTER)
      textSize(50)
      text(puntos, 500, 330)
      image(botonMenu, 650, 450, 100, 100);
    image(botonCreditos, 150, 450, 100, 100);




    //circle( width/2, 400, 80 );
    if (mouseIsPressed) {
      //mi boton
      if ( dist(650, 450, mouseX, mouseY) < 50 ) {
        estado = "menu";
        timer = 5;
        puntos = 0;
      }
      if ( dist(150, 450, mouseX, mouseY) < 50 ) {
        estado = "creditos";
        timer = 5;
        puntos = 0;
      }
    }
  } else if (estado == "creditos") {
    image(infoCreditos, width/2, height/2);

    image(botonMenu, 650, 450, 100, 100);

    if (mouseIsPressed) {
      //boton
      if ( dist(650, 450, mouseX, mouseY) < 50 ) {
        estado = "menu";
        timer = 5;
        puntos = 0;
      }
    }
  }
}


function keyPressed() {
  if ( key == ' ' ) {
    debug = !debug;
  }
}

function mousePressed() {
  if ( dist( x1, y1, x2, y2 ) < t2 ) {
    puntos = puntos + 1;
    x1 = random(width-100);
    y1 = random(height-100);
    tt = random(t1/2, t1);


    if (puntos > 1) {
      timer += 0.3
    }
  }
}

function preload() {

  fondoMenu = loadImage("data/dibujo10.png");
  botonInicio = loadImage("data/dibujo3.png");
  botonMenu = loadImage("data/dibujo4.png");
  botonCreditos = loadImage("data/dibujo2.png");
  fondo = loadImage("data/dibujo11.jpg");
  objetivo = loadImage("data/dibujo8.jpg");
  mira = loadImage("data/dibujo5.png");
  infoCreditos = loadImage("data/dibujo9.png");
  puntaje = loadImage("data/dibujo6.png");

  //////INTENTO DE CARGA DE IMAGENES CON FOR
  //for ( let i = 0; i < c; i++ ) {
  //  let nombreDibujo = "prueba4_la_mejor_hasta_ahora_/data/dibujo" + i + ".png";  //.png acepta canal alpha(transparencia) y .jpg NO ACEPTA

  //  imagenes[i] = loadImage(nombreDibujo);
  //}

  ///////CARGA DE IMAGENES A MANO
  //fondo = loadImage("data/dibujo0.png");
}
