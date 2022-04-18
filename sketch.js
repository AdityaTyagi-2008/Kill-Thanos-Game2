const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var b1, b2, b3, b4, b5, b6, b7, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21;
var thanos;
var stb

function setup() {
    var canvas = createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(960, 750, 1900, 20);

    b1 = new Building(600, 100, 70, 70);
    b2 = new Building(600, 100, 70, 70);
    b3 = new Building(600, 100, 70, 70);
    b4 = new Building(600, 100, 70, 70);
    b5 = new Building(600, 100, 70, 70);
    b6 = new Building(600, 100, 70, 70);
    b7 = new Building(800, 100, 70, 70);
    b8 = new Building(800, 100, 70, 70);
    b9 = new Building(800, 100, 70, 70);
    b10 = new Building(800, 100, 70, 70);
    b11 = new Building(800, 100, 70, 70);
    b12 = new Building(800, 100, 70, 70);
    b13 = new Building(800, 100, 70, 70);
    b14 = new Building(1000, 100, 70, 70);
    b15 = new Building(1000, 100, 70, 70);
    b16 = new Building(1000, 100, 70, 70);
    b17 = new Building(1000, 100, 70, 70);
    b18 = new Building(1000, 100, 70, 70);
    b19 = new Building(1000, 100, 70, 70);
    b20 = new Building(1000, 100, 70, 70);
    b21 = new Building(600, 100, 70, 70);

    thanos = new Thanos(200,200,80,80)
    stb = new StormBreaker(1000,200,200,200)


}

function draw() {
    background("yellow");
    Engine.update(engine)
    ground.display()
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    b17.display()
    b18.display()
    b19.display()
    b20.display()
    b21.display()
    thanos.display()
    stb.display()


}

function mouseDragged() {
    //if (gameState!=="launched"){
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
    //}
}


function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32 && bird.body.speed < 1) {
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, { x: 200, y: 50 })
        slingshot.attach(bird.body);
    }
}

