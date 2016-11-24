class Coin{
	constructor(kind){
		this.kind = kind > 3 ? 2 : 1;
		this.x = 0;
		this.y = 0;

		this.currentIndex = 0;

		this.move();
	}

	draw(){
		var {
			kind,x,y,currentIndex
		} = this;

		var [h,w] = [60,60];

		ctx.save()
		ctx.translate(x,y);
		ctx.drawImage(images[`coinAni${kind}`],
			0,(currentIndex%10)*h,w,h,
			-w/2,-h/2,w,h
		)
		ctx.restore();
	}

	move(){
		setInterval(() => {
			this.currentIndex++;
		},40)

		setTimeout(() => {
			setInterval(() => {
				var deltaX = distance - this.x;
				var deltaY = canvas.height + distance - this.y;

				var speedX = deltaX/20;
				var speedY = deltaY/20;

				this.x += speedX;
				this.y += speedY;
			},20)

			new Audio('sound/coin.wav').play();
		},800)
	}
}