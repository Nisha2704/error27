class Bob{
constructor(x, y, radius){
    var options={
        isStatic:true,
    }
    this.body = Bodies.circle(x,y,radius/2,options);
    this.radius=radius;
    this.x=x;
    this.y=y;
    World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    push()
    fill("purple");
    ellipseMode(RADIUS)
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
}
}