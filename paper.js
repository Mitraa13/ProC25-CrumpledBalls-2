class paper{
    constructor(x,y,radius){
       var option={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
       }
       this.Body = Bodies.circle(x, y, radius, option);
       this.radius = radius;
       this.image = loadImage("paper.png");
       World.add(world, this.Body);


    }

display(){
    var angle = this.Body.angle;
    push();
    fill("hotpink")
    translate(this.Body.position.x, this.Body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
    
}
}