
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	stoneimg=loadImage("images/stone.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1009,70,30)
	mango3=new mango(997,150,30)
	mango4=new mango(932,260,30)
	mango5=new mango(1192,260,30)

	stone=createSprite(220,400,10,10)
	stone.addImage(stoneimg)
	stone.scale=0.09

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,590,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  groundObject.display();
}
