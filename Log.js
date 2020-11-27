class Log {
    constructor(x, y, width, ang) {
        var properties = {
            density: 1.2,
            friction: 2.,
            restitution: 0.5
        }

        this.body = Bodies.rectangle(x, y, width, 20, properties);

        this.width = width;

        Matter.Body.setAngle(this.body, ang);

        World.add(angryWorld, this.body);
    }

    display() {
        var pos = this.body.position;

        var ang = this.body.angle;

        var width = this.width;

        push();

        translate(pos.x, pos.y);

        rotate(ang);

        fill("pink");

        rectMode(CENTER);

        rect(0, 0, width, 20);

        pop();
    }
}