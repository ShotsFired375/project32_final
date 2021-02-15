const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;
const World = Matter.World;


var shelf1, shelf2, shelf3;
var ground1;
var particles = [];
var particle;
var dangerImg, stickmanImg;
var gameState = "play";
var score = 0;
var overTime =0;


function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;
  
  shelf1 = new movingShelf(400, 420, 160, 140);

}


function draw() {
  background(255, 217, 161);  

  Engine.update(engine);

  shelf1.display();

  if(keyDown(LEFT_ARROW)){
    writePosition(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(10,0);
  }


  if(frameCount%30===0){
    particles.push(new Particles(random(100, 700), -300, 50,50));
    
  }
 for (var p = 0; p < particles.length; p++) {
  //  if (gameState!=="end") {
     particles[p].display();
  //  }
  }

  if (gameState!=="end") {
    if (frameCount%15==0) {
      score++;
    }
    stroke("black");
    fill("lightgreen");
    textSize(40);
    text("SCORE: "+score, 100, 250);
  } else {
    stroke("white");
    fill("red");
    textSize(40);
    text("SCORE: "+score, 100, 250);
  }
  if (gameState=="end") {
    overTime++;
  }
  if (overTime>=2) {
    background("red");
    strokeWeight("6");
    textSize(50);
    text("GAME OVER!!", 200, 250);
    textSize(30);
    text("Reload to play again!", 250, 350);

  }


}

function writePosition(x,y){
  Matter.Body.setPosition(shelf1.body, {x:shelf1.body.position.x + x, y:shelf1.body.position.y});

}
