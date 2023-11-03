class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle (this.x,this.y,this.width,this.height,options);
        World.add(world, this.body)
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}