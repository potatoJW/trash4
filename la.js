var la;

var smoke,smoke2,smoke3;
var fire1,fire2,fire3;

var woodd;

var wood = 0;

var w1 =1260;
var w2 =1340
var w3 =1420;

var y1 =560;
var y2= 560;
var y3= 560;

var a1 =0;
var a2 =0;
var a3=0;

var f;
var af=0;

var ac;
 
function setup() {
  createCanvas(1600,700);
  la= loadImage("la.png");
  smoke=loadImage("smoke.png");
  smoke2=loadImage("smoke2.png");
  smoke3=loadImage("smoke3.png");
  fire1=loadImage("fire1.png");
  fire2=loadImage("fire2.png");
  fire3=loadImage("fire3.png");
  f=loadImage("f.jpg");
  woodd=loadImage("wood.png");
  ac = loadImage("ac.png");
}

function draw() {

  background(255);
  
   image(ac,5,5,825,708);
 
  image(la,220,110,380,560);
  
  
  image(la,820,110,380,560);


  if(wood ==1){
    image(fire1,820,110,380,560);
    image(smoke,820,110,380,560);
       if( (w2-30<mouseX && mouseX<w2+30) && (y2-30<mouseY && mouseY<y2+30) ){
         a2=10;
         if(mouseIsPressed){
            w2= mouseX; 
            y2= mouseY;
         }
        }else a2=0;
  }
  
  if(wood == 2){
    image(smoke2,820,110,380,560);
    image(fire2,820,110,380,560);
      if( (w3-30<mouseX && mouseX<w3+30) && (y3-30<mouseY && mouseY<y3+30) ){
       a3=10;
       if(mouseIsPressed){
          w3= mouseX; 
          y3= mouseY;
       }
    }else a3=0;
  }
  
  if(wood >=3){
    image(fire3,820,110,380,560);
    image(smoke3,820,110,380,560);
  }
  imageMode(CENTER);
  
  if(wood<1) image(woodd,w1,y1,80+a1,80+a1);
  if(wood<2) image(woodd,w2,y2,80+a2,80+a2);
  if(wood<3) image(woodd,w3,y3,80+a3,80+a3);
    
    image(f,1380,350,60+af,100+af);
    
    imageMode(CORNER);

  
  if( (w1-30<mouseX && mouseX<w1+30) && (y1-30<mouseY && mouseY<y1+30) ){
   a1=10;
   if(mouseIsPressed){
    w1= mouseX; 
    y1= mouseY;
   }
  }else a1=0;
  
  noFill();
  stroke('#4F95BF');
  strokeWeight(5);
  rect(1120,430,80,80);

  if((1080<w1 && w1<1200) && (390<y1 && 470<y1)){   
   wood=1; 
  }
  if((1080<w2 && w2<1200) && (390<y2 && 470<y2)){
    wood=2; 
  }
  if((1080<w3 && w3<1200) && (390<y3 && 470<y3)){
    wood=3; 
  }
  
  if(mouseX<1410&& 1350<mouseX&& mouseY<400&& 300<mouseY){
   af =10; 
   if(mouseIsPressed){
     wood = 0;

      w1 =1260;
      w2 =1340
      w3 =1420;

     y1 =560;
     y2= 560;
     y3= 560;
   }
  }else af =0;
  
 
  
}
