class Rope{
    constructor(Body1,Body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options ={
    
    bodyA:Body1,
    bodyB:Body2,
     pointB:{x:this.offsetX,y:this.offsetY}
    
    
    }
    
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    
    }
    
    display(){
    
    var point1=this.rope.bodyA.position
    var point2=this.rope.bodyB.position
    var ancherPoint1x=point1.x
    var ancherPoint1y=point1.y
    var ancherPoint2x=point2.x+this.offsetX
    var ancherPoint2y=point2.y+this.offsetY
    push()
    strokeWeight(4)
    line( ancherPoint1x,ancherPoint1y,ancherPoint2x,ancherPoint2y)
    
    
    pop()
    }
    
    
    }
