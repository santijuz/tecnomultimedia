let j;
//let principeSprite; // Variable para el sprite del príncipe
//let principeFrames = 5; // Número de imágenes en el sprite sheet
//let principeNum = 0; // Índice actual del sprite del príncipe
//let principeSpeed = 10; // Velocidad de animación del sprite

//function preload() {
//  principeSprite = []; // Arreglo para cargar las imágenes del sprite
//  for (let i = 0; i < principeFrames; i++) {
//    principeSprite[i] = loadImage('data/personaje'+i+'.png');
//  }
 
//}

function setup() {
  createCanvas(600, 600);
  textSize(24);
  textAlign(CENTER, CENTER);
  j = new Juego();
  imageMode(CENTER,CENTER);
}

function draw() {
  background(255);
  j.actualizar();
  j.dibujar();
  // Mostrar el sprite del príncipe
//  image(principeSprite[principeNum], j.principe.x, j.principe.y);
  
//  // Cambiar el índice del sprite con el tiempo
//  if (frameCount % principeSpeed === 0) {
//    principeNum = (principeNum + 1) % principeFrames;
//  }
//}
}
function keyPressed() {
  j.teclado();
}
