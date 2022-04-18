class Thanos{
    constructor(x, y, width, height, angle) {
        var options = {
            density: 1,
            frictionAir: 0.005,
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.image = loadImage("Thanos.png")
        this.width = width
        this.height = height

        World.add(world, this.body)
    }
        display(){
           var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            stroke("white");
            fill(255);
            image(this.image,0,0,this.r,this.r)
            pop();
        }
    
}