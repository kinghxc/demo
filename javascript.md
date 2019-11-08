### 1.javascript输入输出语句

```
alert("计算结果") 浏览器弹出警示框           归属浏览器
console.log(msg) 浏览器控制器台打印输出信息  归属浏览器
prompt("请输入您的年龄")                   归属浏览器
```

### 2.变量

```
// 声明多个变量
var age = 18,
	address = '河北',
	gz = 9999;
// 声明的特殊情况
	1.// 只声明 不赋值 undefined
    var sex;
    console.log(sex) // 输出 undefined
    2. // 不声明 不赋值 直接使用变量 会报错
    console.log(tel);
    3. // 不声明 直接赋值 使用
    qq = 101;
    console.log(qq); // 110
    
// 变量命名规范
1. 由字母 数字 下划线 美元符号组成
2. 严格区分大小写
3. 不能以数字开头
4. 不能是关键字和保留字 例如 var for while
5. 变量名必须有意义
6. 遵守驼峰命名法
7. 推荐翻译网址 有道 爱词霸
```

### 3.数据类型

```
简单数据类型
Number String Boolean Undefined  NUll
复杂数据类型
object
```

#### 3.1 Number

```
数字型 默认 0
1. 八进制  数字前加0  
var num1 = 010 // 8
2. 十六进制 在前面加 0X
var num2 = 0xa; // 10

// js 中数字型的最大值
Number.MAX_VALUE;
// js中数字型的最小值
Number.MIN_VALUE;

// 特殊值
Infinity  // 无穷大
-Infinity // 无穷小
NaN // 非数字


// isNaN() 方法 用来判断非数字 并且返回一个值 如果是数字返回false 否则返回true;

```

#### 3.2 String

```
字符串型
字符串嵌套 （外双内单  或 外单内双）
转义字符 以\ 开头
\n 换行
\\ 斜杠 \
\' 单引号
\" 双引号
\t tab 缩进
\b 空格 blank


// 获取字符串长度
var str = "hello world";
console.log(str.length); // 11 (含空格)
// 字符串拼接 (数值相加 字符相连)
```

#### 3.3 布尔型 Boolean

```
值  true false 
true + 1 = 2
false + 1 = 1
```

#### 3.4 Undefined Null

```
如果一个变量未声明 就是 Undefined
Undefined + ‘1’ = Undefined1；
Undefined + 1 = NaN;
// 空值
unll + 'pink' = unllpink;
unll + 1 = 1;
```

#### 3.5 typeof 获取数据类型

```
typeof 得到的数据类型
number string boolean undefined object (Null 的类型是 object)
```

#### 3.6 类型转换

```
1. 转换为字符串类型
toString()          var num = 1; num.toString();
String()            var num = 1; String(num);
利用拼接字符串方法     var num = 1; num + ''; // 隐式转换
```

```
2.转换为数字型
praseInt(变量);  整数 不进位
parseInt('120px') // 120
parseInt('rem120px')// NaN
parseFloat(变量); 小数
Number(变量);
运算符 - * / 隐式转换 
'12' - '1' = 11 (数字型)
```

```
3. 转换为布尔值
Boolean() 
代表 空 否定的都转换为 false 如 ''  0 NaN null undefined
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined)); 
// 都是 false
```

### 4 . 运算符

```
1 . 算数运算符 + - * / % ； （注意小数直接运算会出问题）
```

```
2. 比较运算符
== ！=  === ！==
== 判断值是否相等 （会转换） 例如 18 == '18' // true 会把'18' 转换为数字型18
=== 判断数值和类型是否全相等 例如 18 === '18'  // false
```

```
3. 逻辑运算符
&& 与  都为true 则为 true
|| 或  都为 false 则为 false
！ 非 取反

短路运算
如果 左边的表达式可以判断结果 则返回左边的表达式 不再执行右边的表达式
例如 123 && 456 // 返回 456
	0 && 123 // 返回 0
```

#### 优先级

| 优先级 | 运算符      | 顺序               |
| ------ | ----------- | ------------------ |
| 1      | x小括号     | （）               |
| 2      | y一元运算符 | ++ -- ！           |
| 3      | 算数运算符  | 先 / * % 后 + -    |
| 4      | 关系运算符  | >  >=     <    < = |
| 5      | 相等运算符  | == ！=   ===  !==  |
| 6      | 逻辑运算符  | 先&&   后 \|\|     |
| 7      | 赋值运算符  | =                  |
| 8      | 逗号运算符  | ，                 |

#### 三元表达式

```
条件表达式 ？ 表达式1 ： 表达式2 // 条件表达式为真 返回表达式1 否则 返回表达式2
```

### 5 . 分支判断

```
switch（表达式） {
	case value1:
	语句1；
	break;
	case value2:
		语句1;
	break;
	.
	.
	.
	default: 
		语句;
	
}

注意 switch（表达式）  是===全等
```

### 6. 数组

```
// 创建数组的两种方法
// 1.利用new
var arr = new Array(); // 空数组 
var arr = new Array(2); // 数组的长度为2 empt*2
var arr = new Array(2, 3); // arr[2, 3];
// 2.利用字面量
var arr = []; // 空数组

// 数组里面可以放任意类型的数据
```

### 7.函数

```
函数形参多余实参的个数， 多出的实参默认为undefined
函数形参少于实参个数， 多出的实参不取值

// 注意
函数没有 return 返回 undefined 
```

#### 7.1 arguments 伪数组

```
只有函数才有 arguments 并且没有函数都有 arguments
不是数组 
arguments 里面具有传递过来的所有实参
具有数组的 length 属性
可以按照索引查找实参
```

#### 7.2 函数的两种声明

```
// 1. 命名函数
function fn() {

}
fn();

// 2. 表达式命名
var foo = function() {

}
foo();
```

#### 7.3 变量的作用域

```
全局变量： 在全局声明的变量 和函数内部没有声明变量直接赋值变量（num = 1;)
局部变量： 在函数内部声明的变量 和 函数的形参

块级作用域： js中没有块级作用域 在es6以后有 {} 里就是块级作用域 块级作用域里面定义的变量外面不能使用
```

#### 7.4 预解析

```
1. 变量提升
就是把所有的变量声明提升到当前作用域的最前面
2. 函数提升
就是把所有的函数声明提示到当前作用域的最前面
注意： 函数表达式的函数不提升函数
```

```
// 案例
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
var a = b = c = 9;
console.log(a);
console.log(b);
console.log(c);
}

// 提升
function f1() {
var a;
a = b = c = 9 (b 和 c 是全局变量)
console.log(a);
console.log(b);
console.log(c);
}
f1();
console.log(c);
console.log(b);
console.log(a);
// 输出
9
9
9
9
9
undefined
```

### 8.对象

```
创建对象的三种方法
// 1. 字面量创建
var dog = {
    name: '可可',
    age: 2,
    eat: function() {
		console.log('好吃');
    }
}
// 调用对象属性
dog.name;
dog['name'];
// 调用对象方法
dog.eat();

// 2. 利用new Object()
var dog = new Object();
dog.name = '可可';
dog.age = 2;
dog.eat = function() {
	console.log('好吃');
};

// 3. 利用构造函数
function Star() {
	this.name = name;
	this.age = age;
	this.eat = function() {
	
	};
}
var dog = new Star('可可', 2);

```

```
new 关键字过程
1. 在内存中创建一个空的对象
2. this指向这个新的对象
3. 执行构造函数里面的代码，给这个新对象添加属性和方法
4. 返回这个新对象
```

#### 8.1 对象遍历 for...in

```
for (var 变量 in 对象) {
 console.log(k); // 输出属性和方法名
 console.log(对象[k]); // 输出属性值不加引号
}
```

#### 8.3 内置对象

#### 8.3.1 Math内置对象

```
Math内置对象
Math.PI  // 圆周率
Math.floor() // 向下取整
Math.ceil()// 向上取整
Math.round()// 四舍五入 注意 -1.5 取 -1
Math.abs() // 绝对值
Math.max() Math.min() // 求最大值和最小值
Math.random() // [0, 1) 之间的随机数
// 获取[min, max] 之间的随机整数 
function getRandom(min, max) {
return Math.floor(Math.random() * (max - min +1)) + min;
}
```

#### 8.3.2 Date内置对象

```
获取当前时间
var now = new Date();
// 参数
参数为数字
var time = new Date(2019, 5, 1) // 返回 2019年 6月 1 号 的时间
参数为字符串
var time = new Date('2019-5-1 8:8:8') // 返回2019-5-1 8：8：8;

//方法 var time = new Date();
time.getFullYear() 获取年份
time.getMonth() 获取当月（0-11）
time.getDate() 获取日期
time.getDay() 获取星期几 （返回一个数字 周日0 周一到周六 1-6）
time.getHours() 获取当前小时
time.getMinutes() 获取当前分钟
time.getSeconds() 获取当前秒钟

// 获取毫秒数 距离1970-1-1
var time = new Date();
time.valueOf(); 
time.getTime();
简单的写法 
var date = +new Date(); // 返回一个毫秒数
H5新增的
Date.now();
```

#### 8.3.3 检测是否为数组

```
// 1. instanceof
arr instanceof Array // 返回true 是数组 false 不是数组
// Array.isArray(arr) // h5新增的 ie9
Array.isArray(arr) // 返回true 是数组 false 不是数组
```

#### 8.3.4 数组的添加与删除

```
// 1. push()在数组的尾部添加一个或多个元素
arr.push(1,2,3); 
// 返回的是新数组的长度 改变了原来的数组

// 2. unshift() 在数组的开头添加一个或多个元素
arr.unshift(1, 3);
// 返回的是新数组的长度 改变了原来的数组

// 3.pop() 删除最后一个元素
arr.pop(); 没有参数 一次只能删除一个 返回被删除的元素

// 4.shift() 删除第一个元素 
arr.shift(); 没有参数 一次只能删除一个元素 返回被删除的元素
```

#### 8.3.5 数组的翻转和排序

```
// 1. arr.reverse();
翻转数组
// 2. arr.sort();
arr.sort(function(a, b) {
	return a-b;  // 升序排列
	return b-a; // 降序排列
});
```

#### 8.3.6 获取数组元素的索引

```
// arr.indexOf('数组元素')  // 返回第一个匹配的元素索引
// arr.lastIndexOf('数组元素') // 从最后往前查找 返回第一个匹配的数组元素索引
```

#### 8.3.7 数组去重

```
function unique(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) === -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
```

#### 8.3.8 数组转化为字符串

```
// 1. toString();
var arr = [1,2,3];
arr.toString() // 输出 1,2,3

// 2. join('分隔符');
var arr = [1,2,3];
arr.join() // 默认用逗号分隔 1,2,3
arr.join('&') // 输出 1&2&3；

```

#### 8.3.9 截取数组 参数数组 连接数组

```
concat() 拼接 同string
slice(begin,end) 截取 通 string
splice(第几个开始，要删除个数，可选) // 改变原来的数组
str.splice(1,0,3); // 在索引1的位置插入 3
str.splice(1,1) // 删除从索引1的字符删除一个
str.splice(1,2) // 删除从索引1的字符删除2个
```

### 9 . 基本包装类型

```
js 中有三个基本包装类型 String Number Boolean
把简单类型包装成复杂数据类型
```

### 10.字符串不可变性

```
字符串会开辟一个新的空间
不要大量的拼接字符串
字符串的所有方法不会改变原来的字符串 只会返回一个新的字符串
```

#### 10.1 根据字符返回索引

```
indexOf('要查找的字符', 开始的位置) // 第二个参数可不写
lastIndexOf();
// 和数组的方法一样
```

#### 10.2  根据索引查找字符

```
1. charAt(index);

2. charCodeAt(index) // 返回字符的AscII码

3. str[index] // h5新增的 兼容性
```

#### 10.3 字符串的方法

```
// 1. concat 拼接字符串
var str = 'andy';
str.concat('red');    // andyred

// 2. substr('索引', '截取几个')； 截取字符
var str = '我是中国人';
str.substr(2, 2); // 中国

// 3. 替换字符串 replace('被替换的字符'，'替换为什么字符')；只能替换第一个字符
var str = 'adasfa';
str.replace('a', 'x'); // xdasfa

// 替换所有字符
var str = 'adasfa';
while (str.indexOf('a') !== -1) {
	str = str.replace('a', 'x');
}

// 4. 字符转换为数组 split('分隔符');
var str = '1,2,3,4';
str.split(',') // 返回 [1,2,3,4];
var str = '1&2&3&4';
str.split('&) // 返回 [1,2,3,4] 
// 分隔符由字符串本身来确定

// 5. toUpperCase() 转换成大写
str.toUpperCase(); 
'abc'.toUpperCase(); // 'ABC'

// 6. toLowerCase() 转换为小写
str.toLowerCase(); 
'ABC'.toLowerCase();// 'abc'

// 另外
slice() 提取某个字符串的一部分
参数 第一个 索引 从0开始 第二个可以省略 提取到第几个-1 就是提取到的索引
例如 var str = 'abcd efg dfge'; // 共13个
str.slice(2); // 获取索引2到结束的字符  cd efg dfge
str.slice(2,6) // 获取索引 2- 5 的字符 cd e
srt.slice(-5,-3) // 相当与length-5 length-3 （8, 10) ' d'


substring() 截取字符串
两个参数 第一个截取的索引 第二个可以不写 结束的索引但不包含这个既-1就是结束的索引
var str = 'abcd efg dfge'; // 共13个
str.substring(2, 5) // 2-4 的索引 'c '

```

### 11. 简单数类型和复杂数据类型

```
简单数据类型（基本数据类型） 
String Number null Boolean undefined
复杂数据类型（引用类型）
Object Array Date 等
简单数据类型 放在 栈里
复杂数据类型 放在 堆里 但是地址放在栈里面 指向堆里面的数据
```

#### 11.1 复杂数据类型

```
function Person(name) {
	this.name = name;
}
function f1(x) {
	console.log(x.name); // 2
	x.name = '张学友';
	console.log(x.name); // 3
}
var p = new Person('刘德华');
console.log(p.name); // 1
f1(p);
console.log(p.name);  // 4

// new 在栈中开辟一个新空间 p 中放一个地址 在堆中开辟一个空间放值
// 1. 输出 刘德华
// f1(p) 在栈中开辟一个新空间 X = p 把p的地址复制给x  指向推中的p的原值
// 2 . 输出 刘德华
//  x.name = '张学友' 改变原来堆中 P 的值
// 3.输出 张学友
// 4. 输出 张学友
```

### 12 . webApI

#### 12.1 DOM(文档对象模型)

#####  12.1.1 获取页面元素

``` 
// 1. 通过id获取元素
var element = document.getElementById('id');
返回的是一个元素对象

// 2. 通过标签名获取元素
var lis = document.getElementsByTagName('标签名')；
返回元素对象集合 为数组 通过索引获取某个元素

// 3.通过类名获取元素 （h5新增的）
var div = document.getElementByClassName('类名');
返回一个伪数组

// 4.h5新增的 可以通过所有方法获取
var div = document.querySelector('.类名|#id|标签元素名') // 但是只能返回匹配的第一个元素
var div = document.querySelectorALL('.类名|#id|标签元素名') // 返回符合要求的所有元素 伪数组

// 特殊获取doby
var bodyElem = document.body;
// 特殊获取html
var htmlElem = document.documentElement;
```

##### 12.1.2 事件的三个组成部分

```
事件源 事件类型 事件出路程序
按钮    点击事件  事件处理函数
```

##### 12.1.3 改变元素内容给innerText innerHTML

```
1. innerText
获取或修改元素的内容但不识别HTML标签
var div = document.querySelector('div')
div.innerText = '中国'； // 修改内容
div.innerText; // 获取内容
2. innerHTML 
获取或修改元素内容识别HTML标签
div.innerHTML = '<p>中国</p>'； // 修改内容
div.innerHTML; // 获取内容 并且获取标签里面的HTML标签

```

##### 12.1.4 表单获取内容 value 

```
var input = document..getElementById('txt');
input.value = '中国';
```

##### 12.1.5 事件

```
1. 点击事件 onclick
2. 获取焦点事件 onfocus
3. 失去焦点事件 onblur
4. 鼠标经过 onmouseover
5. 鼠标离开 onmouseout
```

##### 12.1.6 行内样式 和 类样式

```
行内样式 element.style.backgroundColor = 'red';

类样式 element.className = '类名'; // 覆盖原来的类名
```

##### 12.1. 7 获取元素的属性值

```
element.属性 // box.id  获取内置属性值
element.getAttribute('属性') // 可获取内置属性 也可获取自定义属性
```

##### 12.1.8 设置属性值

```
element.属性 = '值' // 修改内置属性的值
element.setAttribute('属性', '值') // 自定义属性
// 为了区别自定义数值 h5规范 自定义属性以 data- 开头
// h5 新增的 获取自定义属性
element.dataset.index // element.dataset 获取所有以data 开头的自定义属性 data-index 如果是 data-list-name 则采用驼峰命名法 element.dataset.listName  (兼容性问题 ie11)


element.removeAttribute('属性')； // 移除属性
```

#### 12.2 节点操作

```
节点至少有 nodeType(节点类型) nodeName（节点名称） nodeValue(节点值)
元素节点 nodeType == 1
属性节点 nodeType == 2
文本节点 nodeType == 3 (文本节点包括文字 空格 换行等）
```

##### 12.2.1 父子兄节点

```
获取父节点
node.parentNode; // 获取最近父节点 没有返回为空

获取子节点
node.childNodes // 获取所有子节点 包含文本节点等
node.children // 获取所有子元素节点

// 获取第一个和最后一个节点
node.firstChild  // 获取第一个子节点 包含文本节点
node.lastChild  // 获取最后一个子节点 包含文本节点

node.firstElementChild // 获取第一个子元素节点
node.lastElementChild // 获取最后一个子元素节点
// 但是有兼容性问题 ie 9 以上


// 兄弟节点
node.nextSibling // 获取下一个兄弟节点 包含文本节点等
node.previousSibling // 获取上一个兄弟节点 包含文本节点等

// node.nextElementSibling // 获取下一个兄弟元素节点
// node.previousElementSibling // 获取上一个兄弟节点
// 但是有兼容性问题

```

##### 12.2.2 常见元素节点操作

```
// 创建节点
var element = document.createElement('标签名字');
// 添加节点
parent.appendChild(element); // 在父节点的后面添加
parent.insertBefore(element, 指定元素)； // 在指定子元素前添加element
// 例如
parent.insertBefore(element. parent.children[0]);

// 删除节点
parent.removeChild(child); // 删除父元素里面的子节点 返回被删除的节点

```

##### 12.2.3 拷贝节点（复制节点）

```
node.cloneNode() // 括号为空 或 为 false 为浅拷贝 只复制标签不复制内容

node.cloneNode(true) // true 为深拷贝 复制标签和内容 并且动态变化

// 复制完标签要添加到页面
parent.appendChild(复制节点)
```

#####  

```
document.write()// 导致页面重绘
innerHTML 创建多个元素效率更高 （但是不要拼接字符串 采用数组形式拼接），结构复杂
createElement() 创建多个元素稍微低一点点， 但结构清晰

<script> 
	var arr = [];
	for (var i = 0; i < 1000; i++) {
		arr.push('<a href="http://www.baidu.com">百度</a>');
	}
	var div = document.getElementById('box');
	div.innerHTML = arr.join('');
</script>
```

#### 12.3 注册事件的两种放法

```
// 传统的
btn.onclick = function () {};
// 事件监听方法 ie9
btn.addEventListener('事件名', 监听器（事件函数），可选（默认false）); 
// 可以给同一个元素注册多个同一个事件
// 事件名不带on 例如 click mouseover 
// 有兼容问题 ie9 以前 有 attachEvent（'onclick', 事件处理函数）； 有两个参数 第一个事件名带on 但是不建议使用 非标准
```

#### 12.4  移除注册事件

```
// 传统的注册事件
btn.onclick = function () {
	alert('123');
	btn.onclick = unll; // 点击后弹一次 移除事件
}
// 事件监听移除
btn.addEventListener('click', fn); // 不能采用匿名函数
function fn() {
	alert(123);
	btn.removeEventListener('click', fn);
}

// ie 678
btn.attachEvent('onclick', fn1);
function fn1() {
	alert('123');
	btn.detachEvent('onclick', fn1);
}

```

#### 12.5 DOM事件流的三个阶段

```
捕获阶段
当前目标阶段
冒泡阶段

// js 只会执行捕获 或则 冒泡一个阶段
// onclick 和 attachEvent() 只有冒泡没有捕获
// 但是 特殊的 onblur onfocus onmouseover onmouseleave 没有事件冒泡
// addEventListener 有事件捕获 和事件冒泡  当第三个参数为 false 或 为 空时是事件冒泡 执行顺序  子元素（自己） -> 父元素 -> body-> html -> document 
// addEventListener  当第三个参数为true 时是 事件捕获 执行顺序  document -> html -> body -> 父元素 -> 子元素（自己）
```

#### 12.6 事件对象

```
e event evt 跟事件相关的事件集合
有兼容性问题 ie 678  通过 window.event 获取
btn.onclick = function (e) {
	e = e || window.event; // 处理兼容性问题
}
```

#### 12.7 事件对象的常见属性和方法

| 属性和方法          | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| e.target            | 返回触发事件对象 标准 和this区别    e.target 返回真正触发事件对象  this返回绑定事件（例如 绑定ul点击事件 当点击ul里面的li 时e.target返回点击的li标签  this返回绑定的 ul 标签 ） |
| e.srcElement        | 返回触发事件对象  非标准 ie 6 7   8                          |
| e.type              | 返回事件类型 比如 click mouseover 不带 on                    |
| e.cancelBubble      | 阻止事件冒泡 非标准 ie 678 使用                              |
| e.returnValue       | 阻止默认事件 （默认行为） 非标准 ie678使用 比如不让连接跳转  |
| e.preventDefault()  | 方法 阻止默认行为 标准                                       |
| e.stopPropagation() | 阻止冒泡 标准                                                |

#### 12.8 事件委托

```
原理： 给节点添加侦听器 利用事件冒泡影响子节点
使用 e.target 操作当前点击元素的改变
```

#### 12.9 鼠标事件 禁用鼠标右键事件 contextmenu

```
// 阻止鼠标右键
document.addEventListener('contextmenu', function(e) {
 e.preventDefault();
})

// 阻止选中文字
document.addEventListener('selectstart', function(e) {
	e.preventDefault();
});
```

#### 12.10 获取鼠标的坐标位置

| 鼠标事件对象 | 说明                                                       |
| ------------ | ---------------------------------------------------------- |
| e.clientX    | 返回鼠标相对浏览器窗口可视区的X坐标    只返回数字 不带单位 |
| e.clientY    | 返回鼠标相对浏览器窗口可视区的y坐标   只返回数字 不带单位  |
| e.pageX      | 返回鼠标相对整个文档的X坐标  只返回数字 不带单位           |
| e.pageY      | 返回鼠标相对整个文档的y坐标  只返回数字 不带单位           |
| e.screenX    | 返回鼠标相对电脑屏幕的X坐标 只返回数字 不带单位            |
| e.screenY    | 返回鼠标相对电脑屏幕的y坐标  只返回数字 不带单位           |

#### 12.11 键盘事件

| 事件     | 说明                                       |
| -------- | ------------------------------------------ |
| keyup    | 键盘弹起                                   |
| keydown  | 按下键盘                                   |
| keypress | 按下键盘 不能识别功能键 shift ctrl  方向键 |

```
三个事件执行顺序
keydown 先执行
keypress 后执行
keyup 最后执行
```

##### 12.11.1 键盘事件对象 keyCode

```
e.keyCode   返回该键的ASCLL码
// 注意
1. onkeydown  onkeyup 不区分大小写 a 和 A 都是 65 但是 onkeypress 区分大小写 A 65  a 97
```

### 13 BOM （浏览器对象模型） 

```
window对象 是浏览器的顶级对象
他是一个全局对象 定义在全局作用域中的变量 函数 都会变成window对象的属性和方法
注意： window下的一个特殊属性 window.name
```

#### 13.1 DOM常见事件

```
window.onload = function () {

}
// load 等页面内容全部加载完毕 包含dom元素 图片 flash css等等
也可以使用
window.addEventListener('load', function () {});

// DOMContentLoaded 是DOM加载完毕 不包括 图片 flash css 等 加载速度快
document.addEventListener('DOMContentLoaded', function () {});


// 调整窗口大小事件
window.onresize = function（） {}; //  当窗口大小发生变化是触发事件
window.addEventListener('resize', function () {})// 当窗口大小发生变化是触发事件
// 注意一个属性 window.innerWidth 当前屏幕的宽度
// window.innerHeight 当前屏幕的高度
```

#### 13.2 定时器

```
// 1. window.setTimeout(调用函数，[延迟毫秒数]); // 只执行一次
// 2. 调用函数 可以直接写函数 也可以在外面写函数 在里面写函数名 比如 fn 或则 在里面调用函数但加引号 比如 'fn()'
// 3. 可以给定时定义一个标识符
	var timer = setTimeout(调用函数，[延迟毫秒数]); 
	window 可以省略
	
// 4. 停止定时器 clearTimeout(定时器标识符);
```

```
// 1. window.setInterval(调用函数,[延迟毫秒数])； // 每个延迟毫秒数执行一次
// 2. 停止定时器 clearInterval(定时器标识符)
```

#### 13.3 倒计时案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            height: 50px;
            width: 200px;
            margin: 0 auto;
        }
        
        .box span {
            display: inline-block;
            width: 50px;
            height: 50px;
            background-color: #000;
            color: #fff;
            line-height: 50px;
            text-align: center;
            font-size: 24px;
        }
    </style>
</head>

<body>
    <div class="box">
        <span class='hour'>1</span>
        <span class="minute">1</span>
        <span class="second">1</span>
    </div>
    <script>
        // 获取输入时间毫秒数
        var inputTime = +new Date('2019-10-6 15:32:0');
        // 获取span盒子
        var hour = document.querySelector('.hour');
        var minute = document.querySelector('.minute');
        var second = document.querySelector('.second');
        // 先调用一次避免出现空白时间
        countDown();
        // 调用定时器
        setInterval(countDown, 1000);
        // 倒计时函数
        function countDown() {
            // 获取当前时间毫秒数
            var nowTime = +new Date();
            // 获取倒计时秒数
            var times = (inputTime - nowTime) / 1000;
            // 获取小时
            var h = parseInt(times / 60 / 60 % 24);
            h = h > 9 ? h : '0' + h;
            hour.innerHTML = h;
            var m = parseInt(times / 60 % 60);
            m = m > 9 ? m : '0' + m;
            minute.innerHTML = m;
            var s = parseInt(times % 60);
            s = s > 9 ? s : '0' + s;
            second.innerHTML = s;
        }
    </script>
</body>

</html>
```

#### 13.4 this指向问题

```
1. 在全局作用域或普通函数中this指向window (定时器里的this指向 window)
2. 方法中的this 指向方法的对象
3. 构造函数里的this指向 构造函数的实例
```

#### 13.5 js执行机制

```
把同步任务方到主线程执行栈 执行同步任务
把异步任务（回调函数） 放到 任务队列中
执行完同步任务 在把异步任务方到执行栈执行

js中的异步任务通过回调函数实现
一般而言有三种类型
1. 普通事件 如 click resize等
2. 资源加载 如 load error
3. 定时器 

// 事件在触发时才会把回调函数放到执行队列中 
// 定时器在完成延迟事件后才会把回调函数放到执行队列中
```

#### 13.6 URL

```
url
protocol://host[:post]/pash/[?query]#fragment
ptotocol 通信协议
host 域名（主机） www.baidu.com
port 端口号 可选 http 默认 80
path 文件路径
query 参数 
fragment 连接 锚点

```

#### 13.7 location 对象

```
获取url的信息
location.href = 'http://www.baidu.com'; // 跳转页面
```

| 对象属性          | 返回值                             |
| ----------------- | ---------------------------------- |
| location.href     | 获取或设置整个url                  |
| location.host     | 获取域名                           |
| location.port     | 获取端口号 如果没有 返回空字符串   |
| location.pathname | 返回路径                           |
| location.search   | 返回参数                           |
| location.hash     | 返回片段 #后面内容 常见与链接 锚点 |

| 对象方法           | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟href一样 可以跳转页面（也称重定向页面） 记录以前页面按后退返回前一个页面 location.assign('http://www.baidu.com') |
| location.replace() | 替换当前页面 不记录历史                                      |
| location.reload()  | 重新加载页面 相当于f5  如果参数为true 强制刷新 相当于 ctrl + f5 |

#### 13.8 navigator 对象

```
获取浏览器的相关信息 我们常用的是 userAgent 该属性可以返回由客户机发送服务器的 user-agent头部的值
```

#### 13.9 history 对象

| history对象方法 | 作用                                                   |
| --------------- | ------------------------------------------------------ |
| back()          | 可以后退功能                                           |
| forward()       | 前进功能                                               |
| go(参数)        | 前进后退功能 参数是1 前进1个页面 参数为-1 后退一个页面 |

#### 13.10 元素偏移量 offset 系列

| offset系列属性       | 作用                                                     |
| -------------------- | -------------------------------------------------------- |
| element.offsetParent | 返回作为该元素带有定位的父级元素 如果没有定位 则返回body |
| element.offsetTop    | 返回元素相对带有定位父元素上方偏移 自读属性不能赋值      |
| element.offsetLeft   | 返回元素相对带有定位元素的左方 自读属性不能赋值          |
| element.offsetWidth  | 返回自身包括padding 边框 内容区的宽度 自读属性不能赋值   |
| element.offsetHeight | 返回自身包括padding 边框 内容区的高度 自读属性不能赋值   |

```
返回的都是数字 不带单位
```

#### 13.11 放大镜案例的比例问题

```
遮盖层移动距离 / 遮盖层移动最大距离 = 图片移动距离 / 图片移动最大距离
```

#### 13.12 元素可视区 client 系列

| 属性                 | 作用                                           |
| -------------------- | ---------------------------------------------- |
| element.clientTop    | 获取元素上边框大小                             |
| element.clientLeft   | 获取元素左边框大小                             |
| element.clientWidth  | 返回自身宽度（padding content）不包含border    |
| element.clientHeight | 返回自身的高度（padding content）不包含 border |

#### 13.13 自调用函数

```
写法
（function（） {}）（）  或   (function() {}())
创建一个新的作用域 避免命名冲突
多个自调用函数用分号隔开
```

#### 13.14 pageshow 页面刷新事件

```
pageshow 页面刷新触发事件
e.persisted 如果返回值为true 说明页面是从电脑缓存取过来的
```

#### 13.15 scroll 系列

```
scroll 可设置滚动条滚动事件
```

| 属性                | 说明                      |
| ------------------- | ------------------------- |
| element.scrollTop   | 获取滚动出去的上边距离    |
| element.scrollLeft  | 获取滚动出去的左边距离    |
| element.scrollWidth | 获取自身宽度 不包含边框   |
| element.scrollWidth | 获取自身的高度 不包含边框 |

```
不带单位 
如果内容超出盒子
element.scrollWidth  element.scrollWidth
获取内容的宽度 和 高度
```

#### 13.16 获取整个页面滚出去的距离

```
window.pageXOffset // 页面的上方滚动出去的距离
window.pageYOffset //  页面的左方滚动出去的距离

// 有兼容性问题 ie9
1. 声明了 DTD （<!DOCTYPE html>）
	document.documentElement.scrollTop
2. 未声明 DTD
	document.body.scrollTop
封装
function getScroll() {
	return {
		left: window.pageXOffset || document.documentElement.scrollLeft || 				               document.body.scrollLeft || 0; 
		top: window.pageYOffset || document.documentElement.scrollTop ||     						 document.body.scrollTop || 0; 
	};
}
```

#### 13.17 mouseover mouseout 和 mouseenter mouseleave 区别

```
mouseover mouseout 会触发事件冒泡
mouseenter mouseleave 不会触发事件冒泡
```

#### 13.18 封装缓慢动画并且添加回调函数

```js
function animate(obj, target, callback) {
    // 清除定时器 保证只有一个定时器在执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 设置步长
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15);
}
```

#### 13.19 页面滚动 window.scroll(x,y)

```
页面滚动 window.srcoll(x, y); // 不带单位
```

### 14.移动端特效

#### 14.1 触摸事件touch

| 事件       | 说明           |
| ---------- | -------------- |
| touchstart | 手指触摸时发生 |
| touchmove  | 手指移动时发生 |
| touchend   | 手指离开时发生 |

#### 14.2 触摸事件对象

| 对象           | 说明                          |
| -------------- | ----------------------------- |
| touches        | 正在触摸屏幕的所有手指列表    |
| targetTouches  | 正在触摸当前dom元素的手指列表 |
| changedTouches | 手指状态发生变化时的手指列表  |

#### 14.3  移动端拖动元素

```javascript
<script>
	var div = document.querySelector('div');
	// 定义手指初始位置
	var startX = 0;
	var startY = 0;
	// 定义元素初始位置
	var x = 0;
	var y = 0;
	// 绑定触摸事件 获取手指和元素的当前坐标
	div.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
        x = this.offsetLeft;
        y = this.offsetTop;
    });
	// 绑定移动事件 获取手指移动的距离
	div.addEventListener('touchmove', function(e) {
        // 手指现在的位置 - 手指初始的位置
        var moveX = e.targetTouches[0].pageX - startX;
        var moveY = e.targetTouches[0].pageY - startY;
        // 设置元素现在的坐标 原来的坐标 + 手指移动的距离 
        this.style.left = x + moveX + 'px';
        this.style.top = y + moveY + 'px';
        // 防止屏幕跟着滚动 阻止默认行为
        e.preventDefault();
    })
</script>
```

#### 14.4 过度是否完成事件

```
transitionend 过度完成触发
```

#### 14.5 返回元素类名 classList

```
element.calssList[0] // 返回第一个类名
element.calssList.add('red'); // 添加类名
element.calssList.remove('red') // 删除某个类名
element.classList.toggle('bg') // 切换类 有去掉 没有添加
// 有很大兼容性问题 ie10 但是移动端不影响
```

#### 14.6 解决移动端点击事件300ms延时

```
1. 禁止缩放
  <meta name="viewport" content="user-scalable=no">
  
2. 封装一个函数
//封装tap，解决click 300ms 延时
function tap (obj, callback) {
        var isMove = false;
        var startTime = 0; // 记录触摸时候的时间变量
        obj.addEventListener('touchstart', function (e) {
            startTime = Date.now(); // 记录触摸时间
        });
        obj.addEventListener('touchmove', function (e) {
            isMove = true;  // 看看是否有滑动，有滑动算拖拽，不算点击
        });
        obj.addEventListener('touchend', function (e) {
            if (!isMove && (Date.now() - startTime) < 150) {  // 如果手指触摸和离开时间小于150ms 算点击
                callback && callback(); // 执行回调函数
            }
            isMove = false;  //  取反 重置
            startTime = 0;
        });
}
//调用  
  tap(div, function(){   // 执行代码  });
  
3. 使用插件 fastclick
使用方法
1. 引入js文件
2. 在script中写
<script>
	if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
	}
</script>
```

#### 14.7 swiper 插件开发

```
http://www.swiper.com.cn
```

```
其他插件
superslide http://www.superslide2.com
iscroll  http://github.com/cubiq/iscroll
```

#### 14.8 移动端视频样式插件

```
zy.media.js
```

### 15.本地存储

```
1. 数据存储在用户浏览器中
2. 设置 读取方便 甚至页面刷新不丢失数据
3. 容量较大 sessionStorage约5M localStorage约20M
4. 只能存储字符串 可以将对象JSON.stringify()编码后存储
```

#### 15.1 window.sessionStorage

```
1. 生命周期为关闭浏览器窗口
2. 在用同一个窗口（页面）下数据可以共享
3. 以键值对的形式存储使用
// 存储数据
sessionStorage.setItem(key, value);
// 获取数据
sessionStorage.gteItem(key);
// 删除数据
sessionStorage.removeItem(key);
// 删除所有数据
sessionStorage.clear();
```

#### 15.2 window.localStorage

```
1. 生命周期永久生效， 除非手动删除否则关闭页面也会存在
2. 可以多窗口（页面）共享（同一浏览器可以共享）
3. 以键值对的形式存储使用
// 存储数据
localStorage.setItme(key, value);
// 获取数据
localStorage.getItem(key);
// 删除数据
localStorage.removeItem(key);
// 删除所有数据
localStoage.clear();
```

```
change 事件 发生改变时触发
```

