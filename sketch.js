const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(540, 0, 40);
    rubber2 = new Rubber(500, 130, 60);
    rock = new Rock(500, 200, 80);
    rock2 = new Rock(600, 0, 30);
    co = new Copper(300, 70, 40, 25);
    vanessa = new Copper(600, 70, 80, 55);
    stephanie = new Gold(400, 45, 45, 45);
    blingbling = new Diamond(400, 5, 45, 45);
    //my sister decided on the last three names lol

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rock.display();
    rock2.display();
    co.display();
    vanessa.display();
    stephanie.display();
    blingbling.display();

    
 
}