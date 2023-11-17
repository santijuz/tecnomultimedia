let j;
let bg;
let piedraImagen;
let corazonImagen;
let armaImagen;
let inicio;
let ganaste;
let caiste;
let noArmas;

function setup() {
  createCanvas(600, 600);
  textSize(24);
  textAlign(CENTER, CENTER);
  j = new Juego(bg);
  imageMode(CENTER, CENTER);
}

function preload() {
  bg = loadImage('data/bg.png');
  piedraImagen = loadImage('data/piedra.png');
  corazonImagen = loadImage('data/corazon.png');
  armaImagen = loadImage('data/arma.png');
  inicio = loadImage('data/p0.png');
  ganaste = loadImage('data/p18.png');
  caiste = loadImage('data/p16.png');
  noArmas = loadImage('data/p15.png');
  
}


function draw() {
  background(255);

  j.actualizar();
  j.dibujar();
  
}
function keyPressed() {
  if (j.estado === "instrucciones") {
    j.estado = "jugando";
  } else if (j.estado === "perdiste" || j.estado === "ganaste" || j.estado === "perdiste2") {
    if (key === 'r' || key === 'R') {
      //j.estado = "instrucciones";
      j.reiniciarJuego();
    }
  } else {
    j.teclado();
  }
}
