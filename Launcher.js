class Launcher{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.02,
            length: 10
        }
        this.launcher = Constraint.create(options);
        this.pointB = anchor;
        this.bodyA = body;
        World.add(world, this.launcher);
    }

    attach(body){
        this.launcher.bodyA=body; 
    }


    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        console.log("Success")
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}