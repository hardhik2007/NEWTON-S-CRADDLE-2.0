 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint
 
 function preload()
 {
	 
 }
 
 function setup() {
	 createCanvas(1500, 700);
 
 
	 engine = Engine.create();
	 world = engine.world;
 
	 //Create the Bodies Here.
     
	 roof = new Roof(750,50,1000,40)

	 bob1 = new Bob (500,350,50) 
	 bob2 = new Bob (600,350,50) 
	 bob3 = new Bob (700,350,50) 
	 bob4 = new Bob (800,350,50) 
	 bob5 = new Bob (900,350,50) 
     
     rope1 = new Rope (bob1.body,roof.body,-250,0)
     rope2 = new Rope (bob2.body,roof.body,-150,0)
     rope3 = new Rope (bob3.body,roof.body,-50,0)
     rope4 = new Rope (bob4.body,roof.body,+50,0)
     rope5 = new Rope (bob5.body,roof.body,+150,0)
	 Engine.run(engine);
   
 }
 
 
 
 function draw() {
   rectMode(CENTER);
   background(125);
   

   roof.display();
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
   drawSprites();
  
 }

 function keyPressed(){
   if(keyCode===UP_ARROW){
Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:70})

 }
 
 
 
 


 }
