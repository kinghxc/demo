// // 合并多个js 文件 浏览器可以一次下载 节约时间

// ---------------tools---------------
;(function (window, undefined) {
	var Tools =  {
		getRandom: function (min, max) {
			min = parseInt(min);
			max = parseInt(max);
			return parseInt(Math.random() * (max - min + 1) + min);
		}
	}
	window.Tools = Tools;
})(window, undefined)
// ---------------food----------------
;(function (window, undefined) {
// 记录食物
var elements =[];
function Food(options) {
	options = options || {};
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.color = options.color || 'blue';
}
// 渲染
Food.prototype.render = function (map) {
	// 删除食物
	remove();
	this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
	this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
	var div = document.createElement('div');
	this.div = div;
	map.appendChild(div);
	elements.push(div);
	div.style.left = this.x + 'px';
	div.style.top = this.y + 'px';
	div.style.position = 'absolute';
	div.style.height = this.height + 'px';
	div.style.width = this.width + 'px';
	div.style.backgroundColor = this.color;
}


// 删除食物
function remove() {
	for (var i = elements.length - 1; i >= 0; i--) {
		// 删除div
		elements[i].parentNode.removeChild(elements[i]);
		// 删除数组中的元素
		elements.splice(i, 1);
	}
}


// 为了让外部访问构造函数
window.Food = Food;
})(window, undefined)
// ---------------snake---------------
;(function (window, undefined) {
	var elements = [];
	function Snake(options) {
		options = options || {};
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.direction = options.direction || 'right';

		// 蛇的身体 第一个元素是蛇头
		this.body = [
			{x: 3, y: 2, color: 'red'},
			{x: 2, y: 2, color: 'blue'},
			{x: 1, y: 2, color: 'blue'}
		];

	}
	Snake.prototype.render = function (map) {
		remove(); // 删除之前创建的蛇
		// 把每一个蛇节渲染的地图上
		for (var i = 0, len = this.body.length; i < len; i++) {
			var object = this.body[i];
			var div = document.createElement('div');
			map.appendChild(div);
			elements.push(div);
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';
			div.style.position = 'absolute';
			div.style.left = object.x * this.width + 'px';
			div.style.top = object.y * this.height + 'px';
			div.style.backgroundColor = object.color;
		}
	}
	Snake.prototype.move = function (food, map) {
		for (var i = this.body.length - 1; i > 0; i--) {
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}
		switch(this.direction) {
			case 'right':
				this.body[0].x += 1;
				break;
			case 'left':
				this.body[0].x -= 1;
				break;
			case 'top':
				this.body[0].y -= 1;
				break;
			case 'bottom':
				this.body[0].y += 1;
				break;
		}

		// 判断蛇的位置和食物的位置 
			// 蛇的位置
		var headX = this.body[0].x * this.width;
		var headY = this.body[0].y * this.height;
		if (headX == food.x && headY == food.y) {
			// 食物随机生成
			food.render(map);
			// 蛇节加1
			var last = this.body[this.body.length - 1];
			this.body.push({
				X: last.x,
				y: last.y,
				color: last.color
			});
		}
	}

	function remove() {
		for (var i = elements.length - 1; i >= 0; i--) {
			// 删除div
			elements[i].parentNode.removeChild(elements[i]);
			// 删除数组
			elements.splice(i, 1);

		}
	}

	window.Snake = Snake;
})(window, undefined)
// ---------------game----------------
;(function (window, undefined) {
	var that;
	function Game(map) {
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		that = this;
	}
	Game.prototype.start = function () {
		this.food.render(this.map);
		this.snake.render(this.map);

		// 游戏逻辑
		// 1.让蛇动起来
		// 2.蛇到边缘停止
		runSnake();
		// 3.通过键盘控制蛇的运动方向
		bindKey();
	}

	// 
	function bindKey() {
		// document.onkeydown = function (e) {
		// 	console.log('2');
		// 	console.log(e.keyCode);
		// };
		document.addEventListener('keydown', function (e) {
			e = e || window.event;
			// console.log(e.keyCode);
			// 37 -- left
			// 38 -- top
			// 39 -- right
			// 40 --bottom
			switch (e.keyCode) {
				case 37:
					this.snake.direction = 'left';
					break;
				case 38:
					this.snake.direction = 'top';
					break;
				case 39:
					this.snake.direction = 'right';
					break;
				case 40:
					this.snake.direction = 'bottom';
					break;
			}

		}.bind(that), false);// 事件冒泡
	}
	function runSnake() {
		var timerId = setInterval(function () {
			this.snake.move(this.food, this.map);
			this.snake.render(this.map);


			var headx = this.snake.body[0].x;
			var heady = this.snake.body[0].y;
			var maxX = this.map.offsetWidth / this.snake.width;
			var maxY = this.map.offsetHeight / this.snake.height;
			if (headx < 0 || headx >= maxX) {
				clearInterval(timerId);
			}
			if (heady < 0 || heady >= maxY) {
				clearInterval(timerId);
			}

			}.bind(that), 150);

	}


	window.Game = Game;
})(window, undefined)
// ---------------调用----------------
;(function (window, undefined) {
	var map = document.getElementById('map');
	var game = new Game(map);
	game.start();
})(window, undefined)


// window 压缩代码
// undefined 防止外部改变


//  压缩代码
// (function(){var a={getRandom:function(c,b){c=parseInt(c);
// b=parseInt(b);return parseInt(Math.random()*(b-c+1)+c)
// }};window.Tools=a})();(function(){var c=[];function b(d){d=d||{};
// this.width=d.width||20;this.height=d.height||20;this.x=d.x||0;
// this.y=d.y||0;this.color=d.color||"blue"}b.prototype.render=function(d){a();
// this.x=Tools.getRandom(0,d.offsetWidth/this.width-1)*this.width;
// this.y=Tools.getRandom(0,d.offsetHeight/this.height-1)*this.height;
// var e=document.createElement("div");this.div=e;d.appendChild(e);
// c.push(e);e.style.left=this.x+"px";e.style.top=this.y+"px";
// e.style.position="absolute";e.style.height=this.height+"px";
// e.style.width=this.width+"px";e.style.backgroundColor=this.color
// };function a(){for(var d=c.length-1;d>=0;d--){c[d].parentNode.removeChild(c[d]);
// c.splice(d,1)}}window.Food=b})();(function(){var c=[];
// function b(d){d=d||{};this.width=d.width||20;this.height=d.height||20;
// this.direction=d.direction||"right";this.body=[{x:3,y:2,color:"red"},{x:2,y:2,color:"blue"},{x:1,y:2,color:"blue"}]
// }b.prototype.render=function(g){a();for(var f=0,d=this.body.length;
// f<d;f++){var e=this.body[f];var h=document.createElement("div");
// g.appendChild(h);c.push(h);h.style.width=this.width+"px";
// h.style.height=this.height+"px";h.style.position="absolute";
// h.style.left=e.x*this.width+"px";h.style.top=e.y*this.height+"px";
// h.style.backgroundColor=e.color}};b.prototype.move=function(h,g){for(var e=this.body.length-1;
// e>0;e--){this.body[e].x=this.body[e-1].x;this.body[e].y=this.body[e-1].y
// }switch(this.direction){case"right":this.body[0].x+=1;
// break;case"left":this.body[0].x-=1;break;case"top":this.body[0].y-=1;
// break;case"bottom":this.body[0].y+=1;break}var d=this.body[0].x*this.width;
// var j=this.body[0].y*this.height;if(d==h.x&&j==h.y){h.render(g);
// var f=this.body[this.body.length-1];this.body.push({X:f.x,y:f.y,color:f.color})
// }};function a(){for(var d=c.length-1;d>=0;d--){c[d].parentNode.removeChild(c[d]);
// c.splice(d,1)}}window.Snake=b})();(function(){var c;
// function d(e){this.food=new Food();this.snake=new Snake();
// this.map=e;c=this}d.prototype.start=function(){this.food.render(this.map);
// this.snake.render(this.map);b();a()};function a(){document.addEventListener("keydown",function(f){f=f||window.event;
// switch(f.keyCode){case 37:this.snake.direction="left";
// break;case 38:this.snake.direction="top";break;case 39:this.snake.direction="right";
// break;case 40:this.snake.direction="bottom";break}}.bind(c),false)
// }function b(){var e=setInterval(function(){this.snake.move(this.food,this.map);
// this.snake.render(this.map);var g=this.snake.body[0].x;
// var f=this.snake.body[0].y;var i=this.map.offsetWidth/this.snake.width;
// var h=this.map.offsetHeight/this.snake.height;if(g<0||g>=i){clearInterval(e)
// }if(f<0||f>=h){clearInterval(e)}}.bind(c),150)}window.Game=d
// })();(function(){var b=document.getElementById("map");
// var a=new Game(b);a.start()})();