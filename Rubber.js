class Rubber{
	constructor(x,y,r)
	{
		var options = {
			'density':2,
			'friction': 2,
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
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			ellipse(0, -5, this.r, this.r)

			pop()
	}

}