class Particles{
    constructor(x,y,width,height) {

        var options = {
          'restitution':0.01,
          'friction':0.01,
          'density':10
        }
        dangerImg = loadImage("danger icon.png");
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
      if (this.body.position.y>200 && this.body.speed<2) {
        gameState="end";
      }
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            stroke("white");
            fill("red");
            imageMode(CENTER);
            image(dangerImg, 0, 0, this.width, this.height);
            pop();
    }

}