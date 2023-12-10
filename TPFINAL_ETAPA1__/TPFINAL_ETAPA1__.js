//Santino Juzwa
// Legajo 94788/4
// Comision 2

let clickedButton = null;


function setup() {
  createCanvas(600, 600);
  //botonMenu = new Boton(500, 525, 50);
  //botonFinal = new Boton(100, 525, 50);
  //botonCreditos = new Boton(300, 525, 50);
  this.apreteBotonMenu = true;
   a = new Aventura();
   j = new Juego(bg, piedraImagen, corazonImagen, armaImagen);
   imageMode(CENTER,CENTER);
   
}

function preload() {
  bg = loadImage('data/bg.png');
  piedraImagen = loadImage('data/piedra.png');
  corazonImagen = loadImage('data/corazon.png');
  armaImagen = loadImage('data/arma.png');
 
  
}

function draw() {
  a.dibujarAventura();
  textAlign(CENTER,CENTER);
}

function mousePressed() {
  if (clickedButton) {
    clickedButton.buttonPressed(); // Llama a la función de manejo del botón
  } else {
    a.mousePressed();
  }
}

function keyPressed() {
  //if (j.estado === "instrucciones") {
  //  j.estado = "jugando";
  //} else if (j.estado === "perdiste" || j.estado === "ganaste" || j.estado === "perdiste2") {
  //  if (key === 'r' || key === 'R') {
  //    //j.estado = "instrucciones";
  //    j.reiniciarJuego();
  //  }
  //} else {
    j.teclado();
  //}
}
