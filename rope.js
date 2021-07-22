class rope{
	constructor(body1,body2,pointA,pointB) {
     //create rope constraint here
	 this.pointA = pointA
	 this.pointB = pointB

	 var options = {
		 bodyA:body1,
		 bodyB:body2,
		 pointB:{x:this.pointA,y:this.pointB}
	 }
	 this.rope=Constraint.create(options)
	 World.add(world,this.rope)

	}


    //create display() here 
	display(){
		var pointA=this.rope.bodyA.position
		var pointB=this.rope.bodyB.position
		stroke(2);
		//line(pointA.x,pointA.y,pointB.x,pointB.y)
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
	}

}
