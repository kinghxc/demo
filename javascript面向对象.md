### 1.ES6中的类

```
// 1. 创建一个类
class Star {
	constructor(uname, age) {
		this.uname = uname;
		this.age = age;
	}
}
// 2. 利用类创建对象 new
var ldh = new Star('刘德华', 18);

// 说明
1. 类是对象抽离出来的共同部分
2. 通过class 关键字创建类 类名我们习惯性的定义为首字母大写
3. 类里面有个 constructor 函数 可以接受传递过来的参数，同时返回实例对象
4. constructor 函数不用function 只要 new 生成实例时 就会自动调用这个函数 如果我们不写这个函数 类也会自动生成这个函数
```

```
给类创建方法
方法名（） { 
	代码；
}
// 不用写function
// 不同方法之间不用逗号隔开
```

### 2.类的继承

```
calss Father {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	sum() {
		consoe.log(this.x + this.y);
	}
}

class Son extends Father {
	constructor(x, y) {
		spuer(x,y)； // 调用了父类中的构造函数
	}
}
var son1 = new Son(1,2);
son1.sum(); // 3 不加super() 报错
```

### 3. 关键字 super

```
super 可以调用父类构造函数 也可以调用父类普通函数
calss Father {
	say() {
		return '123';
	}
}
class Son extends Father {
	say() {
		console.log(456);
	}
}

var son = new Son();
son.say(); // 456
//--------------------------------
calss Father {
	say() {
		return 123;
	}
}
class Son extends Father {
	say() {
		console.log(super.say());// super.say() 调用父类的函数
	}
}

var son = new Son();
son.say(); // 123
//----------------------------------
继承中属性和方法查找原则： 就近原则 （在子类中先找 找不到再去父类中找）
```

```
在父类中定义一个加法 在子类中定义一个减法
class Father {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	add() {
		console.log(this.x + this.y);
	}
}

class Son extends Father {
	constructor(x, y) {
		super(x, y); // 调用父类的构造函数 必须写在this 前面
		this.x = x;
		this.y = y;
	}
	sub() {
		console.log(this.x - this.y);
	}
}

var son = new Son(4, 5);
son.add();
son.sub();
```

```
es6 中没有变量提升 所以必须先定义类 才能通过类实例化对象
类里面是共有属性和方法一定要加this使用
```

```
this的指向问题
在构造函数中的this指向 类的实例化对象
在方法中的this指向调用者 谁调用指向谁
class Singer {
	constructor(uname, age) {
	var that = this;
	this.uname = uname;
	this.age = age;
	this.btn = document.querySelect('#btn')
	this.btn.onclick = this.sing;
	}
	sing() {
		// console.log(this.uname); // this指向btn  使用会报错
		console.log(that.uname); // that 指向实例化对象
	}
}
var singer1 = new Singer('www', 12); 
```

### 4. 通过字符串创建元素insertAdjacentHTML

```
var li = '<li><span>132</span></li>';
element.insertAdjacentHTML('位置', li);
通过字符串给元素创建元素
位置
beforebegin 元素自身之前 
afterbegin 元素内部之前
beforeend 元素内部之后
afterend 元素自身之后
```

### 5. 双击事件 dblclick 双击禁止选中文字

```
双击事件 ondblclick
双击禁止选中文字
window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
element.remove(); // 删除方法 
input.select(); // 表单光标选中
```

### 6. 构造函数 和 原型

```
new 在执行时会做四件事
1. 在内存中创建一个新的空对象
2. 让this指向这个型对象
3. 执行构造函数里面的代码，给这个新对象添加属性和方法
4. 返回这个新对象(所以构造函数里面不需要return)
```

#### 6.1 静态成员 和 实例成员

```
1. 实例成员就是构造函住内部通过this添加的成员
 // 实例成员只能通过实例化对象来访问
2. 静态成员就是在构造函数本身上添加的成员
 // 静态成员只能通过构造函住来访问
 function Str(name, age) {
  this.name = name;
  this.age = age;
  this.add = function () {
  
  }
 }
 Str.sex = '男'; // 静态成员
 var str1 = new Str('ss', 12);
 
```

#### 6.2 原型对象 prototype

```
每一个构造函数都有一个构造函数 prototype
因为没创建一个实例化对象就会创建构造函数里面的方法 浪费内存 所以我们把通用的方法放到原型对象里 实例化对象都指向同一个地址
```

```
 function Str(name, age) {
  this.name = name;
  this.age = age;
 }
 Str.prototype.sing = function () {
 	console.log('唱歌');
 }
 var str1 = new Str('ss', 12);
 var str2 = new Str('dd', 13);
 if (str1.sing === str2.sing) // true 指向同一个地址
```

#### 6.3 对象的原型 __proto__

```
每一个对象都有一个__proto__属性 指向构造函数的原型对象prototype
对象调用方法和属性时 先在自己对象中寻找 找不到在到对象的原型中寻找

构造函数 --------------------->原型对象
	|		构造函数.prototype   |
	|							|
     ------------>实例对象--------  对象.__proto__
```

#### 6.4 构造函数 constructor

```
对象原型（__proto__） 和 构造函数（prototype)原型对象里面都有一个constructor 属性 我们成构造函数 他指向构造函数本身
```

```
function Str(name, age) {
  this.name = name;
  this.age = age;
 }
 Str.prototype = {
 	constructor: Str, // 重新指向原来的构造函数
 	sing: {
 		console.log(123);
 	},
 	movie: {
 		console.log(456);
 	}
 }
 // 我们修改了原型对象 必须让他重新指向原来的构造函数
 var str1 = new Str('ss', 12);
 var str2 = new Str('dd', 13);
 str1.__pro__.constructor === Str.prototype.constructor // true 都指向构造函数 Str
```

#### 6.5 构造函数 原型对象 和 对象原型的关系

```
每一个构造函数都有一个prototype属性 指向 构造函数的原型对象
构造函数原型对象的 Str.prototype.constructor 指回 构造函数
实例化对象由构造函数new 出来 每个对象都有一个 __proto__ 属性 指向 构造函数的原型对象
实例化对象的 str.__proto__.constructor 指回构造函数
```

#### 6.6 原型链

```
原型对象也是对象 也有 __proto__ 属性 指向了 Object 的 构造函数的原型对象
 Object 的 构造函数的原型对象的 __proto__ 指向了 null
```

#### 6.7 通过原型扩展内置对象的方法

```
//扩展数组内置对象的求和方法
Array.prototype.sum = function () {
	var sum = 0;
	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	}
}
var arr = [1, 2, 3];
arr.sum(); // 6
```

#### 6.8 call()方法

```
// 1. call() 可以调用函数
fn.call(); // 调用函数
// 2. 改变this的指向
fn.call(o,1,2); // this指向对象o 后面的参数是fn() 原来的参数
```

#### 6.9 继承

##### 6.9.1 借用构造函数继承

```
function Father(name, age) {
	this.name name;
	this.age = age;
}
function Son(name, age, score) {
	// 通过改变this指向继承父类
	Father.call(this, name, age); // 这里的this 指的是Son中的this 把父类的this指向了Son中的this
	this.score = score;
}
var son = new Son('kk', 14, 100);
```

##### 6.9.2 通过原型对象继承父类方法

```
function Father(name, age) {
	this.name name;
	this.age = age;
}
// 设置父类的方法
Father.prototype.sing = function () {
	console.log(123);
}
function Son(name, age, score) {
	// 通过改变this指向继承父类
	Father.call(this, name, age); // 这里的this 指的是Son中的this 把父类的this指向了Son中的this
	this.score = score;
}
Son.prototype = new Father(); // 子类的原型对象 就是父类的实例对象 同时子类便可以访问父类的原型对象
Son.prototype.constructor = Son; // 子类的原型对象被改了指向了父类 要改回来
var son = new Son('kk', 14, 100);
```

### 7. es5新增的方法

#### 7.1 数组方法 

```
// 1. forEach();
arr.forEach(function (value, index, array) {}); // 回调函数 迭代遍历
// 参数1 每个元素的值
// 参数2 每个元素的索引
// 参数3 数组本身
// 例子
var arr = [1,2,3];
var sum = 0;
arr.forEach(function (value, index, array) {
	sum += value;
});

// 2. filter() 数组筛选 返回一个新数组
var arr = [12, 23, 45, 77];
var newArr = arr.filter(function (value, index, array) {
	return value > 20; // 返回大于20的数组
})
// 参数1 每个元素的值
// 参数2 每个元素的索引
// 参数3 数组本身

// 3. some(); 匹配是否满足条件的元素 返回一个布尔值 匹配到第一个变返回  return ture; 返回便不在执行后面
var arr = [22, 55, 66, 77];
var flag = arr.some(function (value, index, array) {
	// return value = 22; // true;
	// return value = 23; // false;
});

// 4. map() 和 forEach() 相似
// 5. every() 和 some() 相似
```

#### 7.2 字符串方法

```
var newstr = str.trim(); // 去除字符串的两端的空格 返回一个新的字符串 不该变原字符串；
```

#### 7.3 对象的方法

```
var arr = Object.keys(obj); // 遍历obj对象的属性名 并且返回一个数组 数组里是obj的属性名；

// 修改或设置对象的属性
var obj = {
	id: 1,
	name: 'dd',
	age: 18
}
obj.id = 2; // 修改 id 的值
obj.sex = '男'; // 设置 sex属性

// es5新属性
Object.defineProperty(obj, prop, descriptor);
// 参数1 obj 要修改或设置的对象
// 参数2 prop 要修改或设置的对象的属性
// 参数3 descriptor 是一个对象 里面由参数
descriptor 参数
value: 设置属性的值 默认undefined
writable: 值是否可以重写 true | false 默认false 不允许修改这个属性
enumerable: 目标是否可以枚举（遍历） true | false 默认false 不允许遍历这个属性
configurable: 目标属性是否可以被删除 第三个参数descriptor是否可以被修改 true | false 默认false 不允许修改这个属性
Object.defineProperty(obj, prop, {
	value: 'ww',
	writable: true,
	enumerable: true,
	configurable: true
});
```

### 8.函数进阶

#### 8.1 函数的定义

```
// 1. 字面量
function fn() {};
// 2. 函数表达式
var fn = function () {};
// 3.利用 new Function('参数1', '参数2'， '函数体')
var fn = new Function('a', 'b', 'console.log(a + b)');
// 必须使用字符串
// 效率低 不经常使用
// 函数也是对象
```

#### 8.2 函数内this的指向

| 调用方式     | this指向                                  |
| ------------ | ----------------------------------------- |
| 普通函数     | window                                    |
| 构造函数     | 实例对象 原型对象里面的方法也指向实例对象 |
| 对象方法     | 该方法所属的对象                          |
| 事件绑定方法 | 绑定事件对象                              |
| 定时器函数   | window                                    |
| 立即执行函数 | window                                    |

#### 8.3 函数里面改变 this 的指向

```1
// 1. call() 
// 调用函数 fn.call();
// 改变函数this指向 fn.call(thisArg, 参数1，参数2...); // 第一个参数this的指向 后面是fn（）的参数
// 常跟继承使用


// 2.apply()
// 调用函数 fn.apply();
// 改变函数 this 指向 fn.apply(thisArg, []); //  第一个参数this的指向 第二个参数必须是数组
// 常跟数组使用
// 作用 例如 
var arr = [1, 2, 3];
Math.max.apply(Math, arr);  // Math.max(); 参数只能是数字

// 3.bind()
// 不调用函数
// 常跟定时器使用
// 改变函数this指向 fn.bind(thisArg, 参数1，参数2...); // 第一个参数this的指向 后面是fn（）的参数
// 返回一个改变了this指向的新函数
```

#### 8.4 严格模式

```
1. 为整个脚本开启严格模式
<script>
	'use stritc';
	// 下面代码按照严格模式书写
</script>

2. 为函数开启严格模式
function（） {
	'use stritc';
	// 下面代码按照严格模式书写
}
// ie10以上才支持严格默认
```

#### 8.5 严格模式的变化

```
1. 变量
变量必须 先声明 在使用
不能随意删除定义的变量
```

```
2.this的指向
(1). 以前在全局作用域函数中的this指向window对象 严格模式下全局作用域中的this是undefined
(2). 以前构造函数时不加new 也可以调用，当普通函数，this指向全局对象
(3). 严格模式下，如果构造函数不加new调用，this会报错
(4). new 实例化的构造函数指向创建的对象实例
（5）.定时器的this指向window
（6）.事件、对象还是指向调用者
```

```
3.函数
函数内不能有重名参数
函数必须声明在顶层，新版本的JavaScript会引入“块级作用域”(ES6以引入)，为了与新版本接轨，不允许在非函数的代码块内声明函数
```

#### 8.6 高阶函数

```
函数的参数为函数 或者 函数的返回值为函数 就是高阶函数
```

#### 8.7 闭包

```
闭包指有权访问另一个函数作用域中的变量的函数

闭包的作用： 延伸了变量作用范围
```

```
利用闭包在函数外部访问函数内部的变量
function fn() {
	var num = 10;
	return function () {
		console.log(num);
	} // 返回一个函数 匿名函数访问了num 产生闭包
}
var f = fn(); // f 接收返回函数
f(); // 10 可以访问fn() 里面的变量
```

```
闭包案例 点击小li 获取索引号
var lis = document.querySelectorAll('ul li');
for (var i = 0; i < lis.length; i++) {
	(function (i) {
		lis[i].onclick = function () {
			console.log(i);
		}
	})(i);
}
```

```
闭包案例  每个3秒打印li里面的内容
var ils = document.querySelectAll('ul li');
for (var i = 0; i < lis.length; i++) {
	(function (i) {
		setTimeout(function () {
			console.log(lis[i].innerHTML);
		}, 3000);
	})(i);
}
```

#### 8.8 函数递归

```
函数内部自己调用自己
必须有退出条件
var num = 0;
function fn() {
	console.log(111);
	if (num == 6) {
		return;
	}
	num++;
	fn();
}
fn();
```

```
利用递归 求n的阶乘
function fn(n) {
	if (n == 1) {
	 return 1;
	}
	return n * fn(n - 1);
}
fn(3);
```

```
利用递归求斐波那契数列
function fn(n) {
	if (n == 1 || n == 2) {
		return 1;
	}
	return fn(n-1) + fn(n -2);
} 
fn(3);
```

### 9 正则表达式

```
正则表达式也是对象
// 1. 利用RegExp 对象来创建正则表达式
var regexp = new RegExp(/正则表达式/);
// 2. 字面量创建
var rg = /123/;

// 3. text() 方法检测是否符合正则表达式的规范
regobj.text(str);
// 符合返回true
// 不符合返回 false
rg.text(123); // true
rg.text(233); // false
```

#### 特殊符号（元字符）

```
var rg = /abc/; // 只要包含abc连着就能匹配
rg.text('abc'); // true
re.text('abcd'); // true
re.text('aabcd'); // true

1.边界符
^ 以什么开头
$ 以什么结尾
var rg = /^abc/;  // 以abc开头
rg.text('abc'); // true
re.text('abcd'); // true
re.text('aabcd'); // false

var rg = /abc$/;  // 以abc结尾
rg.text('abc'); // true
re.text('abcd'); // false
re.text('aabc'); // true

var rg = /^abc$/;  // 以abc开头和结尾 精确匹配
rg.text('abc'); // true
re.text('abcd'); // false
re.text('aabc'); // false
```

```
[] // 符合其中之一
var rg = /[abc]/; // 只要含有a b c 之一就行
var rg = /^[abc]$/; // 只能是 a  b c  之一 三个选一个
var rg = /^[a-z]$/; // 从a-z选一个 

var rg =/^[a-bA-Z0-9_-]$/; 以a-b A-Z 0-9 _ - 开头和结尾的

[^]取反
var rg = /^[^a-bA-Z0-9_-]$/; [^] 取反 不能以a-b A-Z 0-9 _ - 开头和结尾的
```

```
量词
* >= 0 重复0次 或以上
+ >= 1 重复1次 或以上
？ 0 || 1 重复 0次 或 1次

{3} 只能重复3次
{3,} 重复大于等于3次
{3,6} 重复大于等于3次 小于等于6次
 
var rg = /^[^a-bA-Z0-9_-]{6,16}$/; // 符合要去的6-16个字符 {6,16} 不能有空格
```

```
{} 大括号 量词
[] 多选一
() 优先 看成一个字符
/^abc{3}$/； abccc
/^(abc){3}$/; abcabcabc
```

#### 预定义类

```
\d 匹配0-9之间的任一数字 相当于[0-9]
\D 匹配所有0-9以外的字符，相当于[^0-9]
\w 匹配任意的数字 字母下划线，相当于[A-Za-z0-9_]
\W 除所有数字 字母 下划线 的字符，相当于[^A-Za-z0-9_]
\s 匹配空格（包括换行符 制表符 空格符）[\t\r\n\v\f]
\S 匹配非空格的字符， 相当于 [^\t\r\n\v\f]
```

```
正则表达式 座机号码 两种格式 010-12345678 或者 0530-1234567
正则里面的或者 符号 |
var reg = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
var reg = /^\d{3,4}-\d{7,8}$/;
```

```
汉字的正则表达式
^[\u4e00-\u9fa5]{2,8}$
```

#### 替换

```
replace();
var newStr = str.replace(/正则表达式/, 替换为);
例如 替换敏感词
var newstr = strr.replace(/激情/,'**');

正则表达式参数
/正则表达式/g 全局匹配
/正则表达式/i 不区分大小写
/正则表达式/ig 不区分大小写 全局匹配
```

### 10.ES6新增的语法

#### 10.1 let

```
let 定义变量
与var 不同的地方

// 1. let 使变量具有块级作用域

	if(true) {
		let a = 2;
		if (true) {
		 	let b = 3;
		 	console.log(a); // 2
		}
		console.log(b); // 错误
	}
	console.log(a); // 错误
	console.log(b); // 错误
// 防止循环变量变成全局变量		
	for(let i = 0; i < 2; i++) {
		console.log(i);
	}
	console.log(i) // 错误
	
// 2. 变量没有提升 变量必须 先声明 后使用

//3. 使用let声明变量具有暂时性死亡特性
	var num = 20;
	if (true) {
		console.log(num); // 报错
		let num = 30;
	}
	let 声明 num num便和块级作用域绑定 不受外面的变量影响
```

```
经典面试题
let arr = [];
for (let i = 0; i < 2; i++) {
	arr[i] = function () {
		console.log(i);
	}
}
arr[0](); // 0
arr[1](); // 1
每循环一次就开辟一个作用域
arr[0] = function () {
		console.log(0);
	}
arr[1] = function () {
		console.log(1);
	}
```

#### 10.2 const

```
作用： 声明变量， 常量就是值(内存地址)不能变化的量
1. 使用const声明的常量具有块级作用域
2. 使用const关键字声明常量时必须赋初始值
3. 常量值（内存地址）不能更改
	基本数据类型
	const num = 9;
	num = 8; // 报错
	复杂数据类型
	const arr = [1,2];
	arr[0] = 'a';
	arr[1] = 'b';
	console.log(arr); // ['a', 'b'] 不会报错 因为内存地址没有改变
	
	arr = ['a', 'b'] // 报错 内存地址改变
```

| var        | let        | const        |
| ---------- | ---------- | ------------ |
| 函数作用域 | 块级作用域 | 块级作用域   |
| 变量提升   | 变量不提升 | 变量不提升   |
| 值可以更改 | 值可以更改 | 值不可以更改 |

```
如果存储的值不变 如数学中的常量 PI等 使用const 浏览器不用时时监控 提高性能
```

#### 10.3  解构赋值

```
数组解构
let [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
相当于
let a = 1;
let b = 2;
let c = 3;

但是
let [a, b, c] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined
```



```
对象解构
变量名与对象的属性名一一匹配 匹配了就把值赋值给变量名
let person = {name: 'kk', age: 18, sex: '男'};
let {name, age, sex} = person;
console.log(name); // kk
console.log(age); // 18
console.log(sex); // 男
```

```
对象解构的另一种写法
let person = {name: 'kk', age: 18, sex: '男'};
let {name: myname, age: myage, sex: mysex} = person; // 左边的值用来匹配person对象 右边的值才是真真的变量名
console.log(myname); // kk
console.log(myage); // 18
console.log(mysex); // 男
```

#### 10.4 箭头函数

```
箭头函数是用来简化函数定义的语法的
const sum = (n1, n2) => {
	return n1 + n2;
}

// 如果{}函数体只有一句话 且返回函数值{} 可以省略
const sum = (n1, n2) => return n1 + n2;
// 如果() 参数只有一个参数 ()可以省略
const sum = n => console.log(n);
sum(2);
```

```
箭头不绑定 this 箭头函数里面没有this 箭头函数内部的this指向箭头函数定义位置中的this
function fn() {
	return () => {
		consoel.log(this);
	};
};
const obj = {name: 'kk', age: 18};
const refn = fn.call(obj); // 改变fn函数的指向 指向obj 
refn(); // obj = {name: 'kk', age: 18}; refn 接收箭头函数 箭头函数在fn() 中定义 this 就是 fn() 中的this 所以指向了obj
```

```
经典面试题
var obj = {
	age: 20,
	say: () => {
		alert(this.age);
	}
}
obj.say(); // undefined
// 因为var没有块级作用域 箭头函数相当于定义在全局作用域中 所以this指向全局作用域 undefined
```

#### 10.5 剩余参数

```
const sum = (...args) => {
	let totle = 0;
	args.forEach(item => totle += item);
	return totle;
}
console.log(sum(10, 20)); // 30
console.log(sum(10, 20, 30)); // 60
// ... 接收剩余参数 args是一个数组
```

#### 10.6 剩余参数 和 解构赋值 结合使用

```
let arr1 = ['张三', '李四', '王五'];
let [s1, ...s2] = arr1;
console.log(s1); // '张三'
console.log(s2); // ['李四', '王五'];
```

#### 10.7 内置对象的扩展运算符

```
扩展运算符可以将数组拆分成以逗号分割的参数序列
let ary = ['a', 'b', 'c'];
// ...ary // 'a', 'b', 'c'
console.log(..ary) // a b c
// console.log('a', 'b', 'c'); 逗号被当成了console.log()的逗号
```

```
扩展运算符合并数组
// 方法1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]; // let arr3 = [1,2,3,4,5,6];
// 方法2
arr1.push(...arr2); /// arr1.push(4, 5, 6);
```

```
利用扩展运算符 将类数组转换为真正的数组
var divs = document.getElementsByTagName('div');
var arr = [...divs];
```

#### 10.8 扩展方法 Array.form()

```
将类数组或可遍历对象转换为真正的数组
let arrayLike = {
	'0': 1,
	'1': 2, 
	'length': 2
}
let newAry = Array.form(arrayLike, item => item * 2);
// arrLike 遍历每一个属性 第二个参数函数 对每一个属性值进行操作 返回一个数组 [2,4]
```

#### 10.9 扩展方法 Array.find()

```
查找数组中第一个满足条件的元素并返回 如果没有返回undefined
var ary = [{
	id: 1,
	name: '张三'
}, {
	id: 2,
	name: '李四'
}];
let target = arr.find(item => item.id == 2);
// 返回 {
	id: 2,
	name: '李四'
}
```

#### 10.10 扩展方法findIndex()

```
查找数组中满足条件的第一个元素的索引 没有返回 -1
let ary = [10, 20, 50];
let index = ary.findIndex(item => item > 15);
console.log(index); // 1
```

#### 10 .11  includes()

```
检测数组是否包含某个值 包含返回true 不包含false
[1, 2, 3, 4].includes(1); // true
[1, 2, 3, 4].includes(5); // false
```

#### 10.12 模板字符串

```
利用反引号定义的字符串 tab键上边
作用
1. 可以解析变量
var name = '张三';
var str = `我的名字是${name}`;
console.log(str); // 我的名字是张三

2. 模板字符可以换行
let html = `<div>
				<span> </span>
			</div>`;

3. 可以解析函数
let sayHello = function () {
	return '123';
}
let str = `${sayHello()}哈哈`;
// 123哈哈
```

#### 10 .13 String 扩展方法

```
startsWith('字符串'); 判断字符串是否以某一个字符串开头
endsWith('字符串'); 判断字符串是否以某一个字符串结尾
// 是返回true 
let str = 'hello word';
str.startsWith('hello'); // true
str.endsWith('word'); // true
```

#### repeat()

```
repeat(); 将字符串重复多少次返回一个新字符串
'hello'.repret(2); // hellohello
```

#### 10.15 set 数据结构

```
它类似与数组 但是成员值是唯一的没有重复的值
Set本身是一个构造函数 用来乘车Set数据结构
Set函数可以接收一个数组作为参数
const s = new Set([1, 2, 3, 4, 4]);
// {1,2,3,4}
```

```
数组去重
const s1 = new Set(["a", "b", "a"]);
const ary = [...s1]; // s1 伪数组
console.log(ary);
```

```
方法
const s4 = new Set();
// 向Set结构添加值 返回Set结构本身
s4.add(1).add(2);
// 从Set结构中删除值 删除成功返回true
s4.delete(1); // 返回 true
// 判断Set结构中是否存在某个值 存在返回true
s4.has(2); // true
// 清空Set结构中的值
s4.clear();
```

##### 遍历set

```
和数组一样也有forEach()方法
const s5 = new Set([1, 2, 3]);
s5.forEach(value => console.log(value)); // 1 2 3
```

##### 10.16 浅拷贝 和 深拷贝

```
var obj = {
	name: 'kk',
	age: 12,
	msg: {
		sex: '男'
	}
}

var o = {};
for (avr k in obj) {
	o[k] = obj[k]; 
}
这是浅拷贝 只是把属性 msg 的地址给了 对象 o 如果修改 msg obj 和 o 的 msg 都被修改

// es6 新增的浅拷贝方法
Object.assign(o, obj); // obj 拷贝给 o 浅拷贝
```

```
利用递归封装一个深拷贝函数
var obj = {
	id: 1,
	name: 'andy',
	msg: {
		age: 18
	},
	color: ['red', 'blue', 'green]
};
var o = {};
function deepCopy(newobj, oldobj) {
	for (var k in oldobj) {
		// 判断我们的属性值属于那种数据类型
		// 1. 获取属性值
		Var item = oldobj[k];
		// 2. 判断这个值是否是数组 数组要放到对象前面判断 因为数组也是对象
		if (item instanceof Array) {
            newobj[k] = [];
            deepCopy(newobj[k], item);
		} else if (item instanceof Object) {
            newobj[k] = {};
            deepCopy(newobj[k], item);
		} else {
            newobj[k] = item;
		}
	}
}
```

