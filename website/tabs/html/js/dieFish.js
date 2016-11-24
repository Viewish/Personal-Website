class DieFish{
	constructor(kind){
		this.x = 0;
		this.y = 0;
		this.kind = kind;
		this.rotate = 0;
		this.currenIndex = 4;

		this.move();
	}

	draw(){
		var {
			x,y,kind,rotate,currenIndex
		} = this;

		var {
			w,h
		} = FISH_SIZE[kind]

		ctx.save();
		ctx.translate(x,y);
		ctx.rotate(d2a(rotate));

		// 右侧鱼儿阴影应当朝下
		if( rotate > 90 && rotate < 270 ){
			ctx.scale(1,-1);
		}

		ctx.drawImage(images[`fish${kind}`],
			0,currenIndex*h,w,h,
			-w/2,-h/2,w,h
		)

		ctx.restore();
	}

	move(){
		setInterval(() => {
			this.currenIndex++;

			if( this.currenIndex > 7 ){
				this.currenIndex = 4
			}
		},80)
	}
}