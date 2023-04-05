PImage oso;

void setup(){
 size(800,400);
 noLoop();
  
 oso = loadImage("oso.png");
  
}
void draw(){
background(105,218,232);
  //fondo
fill(64,191,56);
rect(-1,310,3200,8000); 
fill(255);
   noStroke();
   ellipse(50,100,50,50);
   ellipse(110,90,50,50);
   ellipse(80,80,50,50);
  ellipse(82,110,50,50);
   ellipse(300,90,50,50);
   ellipse(360,100,50,50);
   ellipse(330,80,50,50);
  ellipse(332,110,50,50);
  //cuerpo
stroke(0); 
  fill(131,106,78);
circle(200,250,210); 
   fill(178,153,124);      
circle(200,270,150); 

 //orejas
  fill(131,106,78);
circle(150,70,70);
circle(250,70,70);
  fill(178,153,124);      
circle(150,70,40);
circle(250,70,40);
//cabeza
  fill(131,106,78);
circle(200,110,140); 
//ojos 
  fill(0);
circle(175,90,15);
circle(225,90,15);
//boca
  fill(178,153,124);
circle(200,130,70);
  fill(0);
circle(200,120,17);
noFill();
strokeWeight(4);
arc(200,130,30,20,radians(0),radians(130));
  //brazos
strokeWeight(1);
  fill(131,106,78);
circle(100,190,70);
circle(300,190,70);
  //patas
circle(120,320,100);
circle(280,320,100);
  fill(178,153,124);      
circle(280,330,70);
circle(120,330,70);

  
image(oso,400,0);
  
  
  
  
  
  
}
