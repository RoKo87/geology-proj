class Diamond{
	constructor(x,y,w,h)
	{
		var options = {
			'density':25,
			'friction': 6.3,
			'restitution':0.9,
		  };
		this.x=x;
		this.y=y;
		this.height=h;
        this.width=w;
		this.body=Bodies.rectangle(this.x, this.y, w, h, options)
		World.add(world, this.body);

	}
	display()
	{
			var cpos=this.body.position;		
			push()
			translate(cpos.x, cpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("azure");
			rect(0, 0, this.width, this.height)

			pop()
	}

}