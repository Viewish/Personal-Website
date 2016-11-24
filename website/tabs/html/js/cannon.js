var CANNON_SIZE=[
	null,
	{w: 74, h: 74},
	{w: 74, h: 76},
	{w: 74, h: 76},
	{w: 74, h: 83},
	{w: 74, h: 85},
	{w: 74, h: 90},
	{w: 74, h: 94}
];



class Cannon{
	constructor(kind){
		this.x = 431
		this.y = 570;
		this.rotate = 0;
		this.kind = kind;

		this.currentIndex = 0;
		this.timer = null;
	}

	draw(){
		var {
			kind,x,y,rotate,currentIndex
		} = this;

		var {
			w,h
		} = CANNON_SIZE[kind]

		ctx.save()

		ctx.translate(x,y);
		ctx.rotate(d2a(rotate));
		ctx.drawImage(images[`cannon${kind}`],
			0,currentIndex*h,w,h,
			-w/2,-h/2,w,h
		)

		ctx.restore()
	}

	emit(){

		// 防止多个定时器
		clearInterval(this.timer);

		this.timer = setInterval(() => {
			this.currentIndex ++

			// 播放完即停止
			if( this.currentIndex == 4 ){
				this.currentIndex = 0;
				clearInterval(this.timer);
			}
		},30)

		new Audio('sound/cannon.mp3').play();
	}
}