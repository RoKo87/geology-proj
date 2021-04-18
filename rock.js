class Rock{
	constructor(x,y,r)
	{
		var options = {
			'density':6,
			'friction': 5,
			'restitution':1,
		  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rpos=this.body.position;		
			push()
			translate(rpos.x, rpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkgray");
			ellipse(0, -5, this.r, this.r)

			pop()
	}

}