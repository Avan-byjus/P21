class Ball{
    constructor(x,y,radius1){
        var ball_options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x = x
        this.y = y
        this.r = radius1
        this.body = Bodies.circle(this.x, this.y, this.r, ball_options);
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke(255);
        fill(127);
        ellipse(pos.x, pos.y, this.r);
        pop();
      }
}




