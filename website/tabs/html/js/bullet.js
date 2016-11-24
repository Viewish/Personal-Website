var BULLET_SIZE=[
	null,
	{x: 86, y: 0, w: 24, h: 26},
	{x: 62, y: 0, w: 25, h: 29},
	{x: 30, y: 0, w: 31, h: 35},
	{x: 32, y: 35, w: 27, h: 31},
	{x: 30, y: 82, w: 29, h: 33},
	{x: 0, y: 82, w: 30, h: 34},
	{x: 0, y: 0, w: 30, h: 44}
];

class Bullet{
	constructor(kind){
		this.kind = kind;
		this.x = 431;
		this.y = 570;
		this.rotate = 0;
		this.speed = 5;

		this.move();
	}

	draw(){
		var {
			kind,rotate
		} = this;

		var posX = this.x;
		var posY = this.y;

		var {
			x,y,w,h
		} = BULLET_SIZE[kind];

		ctx.save()
		ctx.translate(posX,posY);
		ctx.rotate(d2a(rotate));
		ctx.drawImage(images.bullet,
			x,y,w,h,
			-w/2,-h/2,w,h
		)

		ctx.restore()
	}

	move(){
		var {
			speed
		} = this;

		setInterval(() => {
			// this.rotate需要动态获取，不可储存变量
			this.x += speed*sin(d2a(this.rotate));
			this.y -= speed*cos(d2a(this.rotate));
		},20)
	}
}