var {
	random,
	cos,
	sin,
	floor,
	atan2,
	abs,
	sqrt,
	pow,
	round
} = Math;

function d2a(degree){
	return degree/180*Math.PI;
}

function a2d(rad){
	return rad*180/Math.PI;
}

function clear(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}


// 加载资源
function loadResource(resourceArray,callback){
	var count = 0;

	resourceArray.forEach(function(src,index){
		var oImage = new Image();
		oImage.src = `img/${src}.png`;

		oImage.onload = function(){

			images[src] = oImage;

			count++

			if( count == resourceArray.length ){
				callback && callback();
			}
		}
	})
}