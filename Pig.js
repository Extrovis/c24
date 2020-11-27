class Pig {
    constructor(x, y) {
        var properties = {
            density: 1.2,
            friction: 0.5,
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x, y, 50, 50, properties);

        World.add(angryWorld, this.body);
    }

    display() {
        var pos = this.body.position;

        var ang = this.body.angle;

        push();

        translate(pos.x, pos.y);

        rotate(ang);

        fill("green");
        rectMode(CENTER);

        rect(0, 0, 50, 50);

        pop();
    }
}