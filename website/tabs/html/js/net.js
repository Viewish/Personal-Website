var NET_SIZE = [
	null,
	{x:318 	,y:358	,w:118	,h:118},
	{x:0	,y:400	,w:141	,h:141},
	{x:163	,y:358	,w:155	,h:155},
	{x:0	,y:240	,w:162	,h:162},
	{x:242	,y:183	,w:175	,h:175},
	{x:242	,y:0	,w:183	,h:183},
	{x:0	,y:0	,w:240	,h:240},
]

class Net{
	constructor(kind){
		this.x = 0;
		this.y = 0;
		this.kind = kind;
	}

	draw(){
		var {
			kind 
		} = this;

		var posX = this.x;
		var posY = this.y;

		var {
			w,h,x,y
		} = NET_SIZE[kind]

		ctx.save();
		ctx.translate(posX,posY)
		ctx.drawImage(images.web,
			x,y,w,h,
			-w/2,-h/2,w,h
		)
		ctx.restore();
	}
}