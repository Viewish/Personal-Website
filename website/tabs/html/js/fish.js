var FISH_SIZE=[
	null,
	{w: 55, h: 37, collR: 17},
	{w: 78, h: 64, collR: 30},
	{w: 72, h: 56, collR: 23},
	{w: 77, h: 59, collR: 25},
	{w: 107, h: 122, collR: 40}
];

class Fish{
	constructor(kind){
		this.x = 0;
		this.y = 0;
		this.kind = kind;
		this.rotate = 0;
		this.speed = 2;
		this.currenIndex = 0;

		this.move();
	}

	draw(){
		var {
			kind,x,y,rotate,
			currenIndex
		} = this;

		var {
			w,h
		} = FISH_SIZE[kind];

		ctx.save()

		// 因为炮弹和大炮均为居中对齐，所以鱼也是居中对齐
		// ctx.translate(x+w/2,y+h/2);
		ctx.translate(x,y);
		ctx.rotate(d2a(rotate));

		// 右侧鱼儿阴影应当朝下
		if( rotate > 90 && rotate < 270 ){
			ctx.scale(1,-1);
		}

		ctx.drawImage(images[`fish${kind}`],
			0,(currenIndex%4)*h,w,h,
			-w/2,-h/2,w,h
		)

		ctx.restore()
	}

	move(){
		// 高帧频更新位置信息
		setInterval(() => {
			this.x += this.speed*cos(d2a(this.rotate));
			this.y += this.speed*sin(d2a(this.rotate));
		},40)

		// 低帧频更新摆动
		setInterval(() => {
			this.currenIndex++
		},80)
	}

	isIn(x,y){
		return sqrt(pow(x-this.x,2)+pow(y-this.y,2)) < FISH_SIZE[this.kind].collR;
	}
}