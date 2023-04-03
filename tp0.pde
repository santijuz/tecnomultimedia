void setup(){
 size(800,400);
 noLoop();
  
  
}
void draw(){
background(105,218,232);
  //fondo
fill(64,191,56);
rect(-1,310,3200,8000); 
fill(255);
   noStroke();
   ellipse(100,100,50,50);
   ellipse(160,90,50,50);
   ellipse(130,80,50,50);
  ellipse(132,110,50,50);
   ellipse(600,90,50,50);
   ellipse(660,100,50,50);
   ellipse(630,80,50,50);
  ellipse(632,110,50,50);
  //cuerpo
stroke(0); 
  fill(131,106,78);
circle(400,250,210); 
   fill(178,153,124);      
circle(400,270,150); 

 //orejas
  fill(131,106,78);
circle(350,70,70);
circle(450,70,70);
  fill(178,153,124);      
circle(350,70,40);
circle(450,70,40);
//cabeza
  fill(131,106,78);
circle(400,110,140); 
//ojos 
  fill(0);
circle(375,90,15);
circle(425,90,15);
//boca
  fill(178,153,124);
circle(400,130,70);
  fill(0);
circle(400,120,17);
noFill();
strokeWeight(4);
arc(400,130,30,20,radians(0),radians(130));
  //brazos
strokeWeight(1);
  fill(131,106,78);
circle(300,190,70);
circle(500,190,70);
  //patas
circle(320,320,100);
circle(480,320,100);
  fill(178,153,124);      
circle(480,330,70);
circle(320,330,70);

  

  
  
  
  
  
  
}
