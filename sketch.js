const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.render;

var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight=200;
var ground;

function setup() {
   canvas =createCanvas(400,650);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(200,640,400,20);
   ground1 = new Ground(398,400,5,800);
   ground2 = new Ground(3,400,5,800);
 
   for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,325))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,375))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,425))
  }
 
  for(var k =5;k<=width;k=k+65){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  
}

function draw() {
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particle(random(100,350),10,10))
  }


 background(0);  
 ground1.display();
 ground2.display();
 ground.display();
  
  for(var h = 0; h < particles.length; h++){
    particles[h].display();
   }

  for(var j = 0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  
  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
  }
  
  drawSprites();
}
