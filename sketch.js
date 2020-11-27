const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var box1, box2, box3, box4, box5;

var log1, log2, log3, log4;

var ground;

var pig1, pig2;

function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    angryWorld = engine.world;

    box1 = new Box(1080, 850, 100, 100);

    box2 = new Box(1320, 850, 100, 100);

    box3 = new Box(1080, 750, 100, 100);

    box4 = new Box(1320, 750, 100, 100);

    box5 = new Box((1320 + 1080) / 2, 650, 100, 100);

    log1 = new Log((1320 + 1080) / 2, 800, (1320 - 1080) + 100, PI);

    log2 = new Log((1320 + 1080) / 2, 700, (1320 - 1080) + 100, PI);

    log3 = new Log(1080 + 40, 650, 120, -(PI / 4));

    log4 = new Log(1320 - 40, 650, 120, PI / 4);

    pig1 = new Pig((1320 + 1080) / 2, 850);

    pig2 = new Pig((1320 + 1080) / 2, 750);

    ground = new Ground(width / 2, height - 10, width, 20);
}

function draw() {
    background(0);
    Engine.update(engine);

    fill("blueviolet");

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    ground.display();

    pig1.display();
    pig2.display();

    fill("white");
    textSize(20);
    text(mouseX + " ' " + mouseY, mouseX, mouseY);
}