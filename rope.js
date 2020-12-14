class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
       
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness:0.03,
            length:250
    }
    this.offsetX=offsetX
    this.offsetY=offsetY
    
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    display(){
            var pointA = this.rope.bodyA.position
            var pointB = this.rope.bodyB.position;
            push()
            strokeWeight(4);
            fill("black")
            stroke("black")
            line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
            pop()
    }
}