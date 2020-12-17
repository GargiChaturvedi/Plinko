class Particle {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 15);
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipse(0, 0, 15, 15);
        pop();
    }
}