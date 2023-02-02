const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y); //criar um objeto para bala de canhão
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  ground.display();
  cannon.display();
  tower.display();
  cannon.display();
  tower.display();
  cannonBall.display() //mostrar a bala de canhão
}
function keyReleased() { //função para disparar a bola
 if (keyCode === DOWN_ARROW) { //use a tecla para baixo para chamar a função shoot (tiro)
   cannonBall.shoot()
  cannonBall.display() //mostrar a bala de canhão
}
function keyReleased() { //função para disparar a bola
 if (keyCode === DOWN_ARROW) { //use a tecla para baixo para chamar a função shoot (tiro)
   cannonBall.shoot()
}
