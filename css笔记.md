### 1.css引入四种方法

``` 
1. 行内样式表
<标签 style="属性 : 属性值； 属性 : 属性值； 属性 : 属性值....  " ></标签>
2.内部样式表（嵌入式）
3.外部样式表
<link rel="stylesheet" src="路径" />
4.导入式
<style>
	@import url("css文件路径");
</style>
```

### 2.css选择器

#### 2.1标签选择器

```
div {
	color：red;
}
```

#### 2.2类选择器

```
.类名 {
	属性： 属性值；
	属性： 属性值；
	属性： 属性值；
}

// 多类名 一个标签只有一个calss
<span class="red font100"> </span>
```

#### 2.3 id选择器

```
#red {
	color: red;
}

// <div id="red"> </div>
// id是唯一的
```

#### 2.4 通配符选择器 *

```
* {
	margin: 0;
	padding: 0;
}

// 就是选择所有标签
// 不建议随便使用  会匹配页面所有元素 降低页面响应数度
```

### 3. font字体

#### 3.1 font-size 字体大小

```
font-size： 16px;
// 谷歌浏览器默认字体大小16px
```

#### 3.2 foont-family 字体类型

```
font-family: Arial;

// 多个字体
font-family: Arial， "微软雅黑"， "黑体"；
// 按顺序匹配电脑 中文加引号

Unicode字体
font-family: Arial， "\5B8B\4F53";  // 宋体
// 防止中文乱码
```

#### 3.3 fone-weight 字体粗细

```
font-weight: 700;
属性
1. normal  默认值不加粗  （400）
2. bold  定义粗体（加粗）  （700）
3. 100-900（必须为100的倍数） 其中 normal 相当于 400 bold 相当于 700
```

#### 3.4 font-style字体样式（字体倾斜）

```
font-style： normal;
属性
1. normal  // 让倾斜字体不倾斜
2. italic  // 让字体倾斜
```

#### 3.5 font综合写法

```
font: font-style font-weigth font-size font-family;

// font: italic 700 20px "微软雅黑";
注意： 
// 1. 必须按照顺序写
// 2. font-size  和 fant-family 不能省略
```

### 4. css外观属性

####  4.1 color文本颜色

| 表示方法                   | 属性值           |
| -------------------------- | ---------------- |
| 预定义的颜色 color： red;  | red blue .....   |
| 十六进制   color： #0000ff | #000000  #ffffff |
| rgb    rab(0, 0, 255)      | 0-255            |

#### 4.2 text-align 文字水平对齐方式

```
text-align: center;
属性：
left 文字左对齐
right 文字右对齐
center 文字居中对齐
```

#### 4.3 line-hright 行间距（行高） 

```
line-height： 24px;

// 一般行高比文大 7 8 px
// 单位  px em %  一般用px
```

#### 4.4 text-indent 首行缩进

```
text-indent: 2em;
作用： 设置文本首行缩进
单位：建议使用em  em 字符宽度的倍数 1个em就是一个汉字的宽度
```

#### 4.5 text-decoration 文本修饰

| 属性值       | 描述            |
| ------------ | --------------- |
| none         | 默认 取消下划线 |
| underline    | 下划线          |
| overline     | 上划线          |
| lint-through | 贯穿线          |

### 5.css复合选择器

#### 5.1 后代选择器（包含选择器）

```
div span {
	color: red;
}
// 后代包括所有后代
```

#### 5.2 子代选择器（子元素选择器）

```
div > span {
	color: red;
}
// span 必须是div的子儿代 
```

#### 5.3 交集选择器 （既是....又是...)

```
p.red {
 color: red;
}
// 既是p标签并且类名为red
```

#### 5.4 并集选择器

```
p,
div,
.red {
 color: red;
}

// 同时设置多个标签用,隔开
```

#### 5.5 链接伪类选择器

```
a:link  未访问的链接
a:visited 已访问的链接
a:hover 鼠标移动到连接上
a:active 选定的链接

// 注意： 顺序不能变（love   hate）
// a 链接有浏览器默认的样式 所以要单独设置a的样式
一般开发
a {
font-size: 16px;
font-weigth: 700;
color: gray;
text-decoration: none;
}
a:hover {
	color: red;
}
```

### 6. 标签的显示默认（display）

#### 6.1 块级元素

```
常见的块级元素： h1~h6  p div ul ol li 
特点：
	1. 独占一行
	2. 可以设置宽高和内外边距
	3. 宽度不写默认是父级元素的100%，
	4. 是一个容器 里面可以放块级元素和行内元素
注意： 
	<p> 标签特殊 里面不能放块级元素
	同理 h1~h5 dt 也不能放块级元素
```



#### 6.2 行内元素

```
常见的行内元素 a strong b em i del s ins span
特点： 
 	1. 一行可以放多个
 	2. 不能设置宽和高
 	3. 默认的宽度就是内容本身的宽度
 	4. 行内元素只能放文本和其他行内元素 
注意： 
    a 超链接标签 里 不能放 超链接
    a 标签可以放块级元素 但是给a转换一下块级模式最安全
```



#### 6.3 行内块级元素

```
特殊标签 <img /> <input /> <td>
特点： 
	1. 多个标签可以在一行显示 但是相邻的标签会有空白缝隙
	2. 可以设置标签的宽和高 内外边距
	3. 默认宽度就是它本身内容的宽度
```

#### 6.4 模式的转换

```
转换为块级元素 display： block;
转换为行内元素 display： inline;
转换为行内块级元素 display： inline-block;
```

### 7.行高详解line-height

```
1. 文字 有顶线 中线 基线 低线
2. 行高是基线到基线的距离
3. 测量行高时底线到底线
4. 行高 = 高度  文字垂直居中
   行高 > 高度  文字垂直居中偏下
   行高 < 高度  文字垂直居中偏上
```

### 8. 背景（background）

#### 8.1  背景颜色 （backgroun-color）

```

```



#### 8.2 背景图片 （background-image）

```
background-image: url(路径);
// url() 建议不要加引号
```



#### 8.3 背景平铺（background-repeat）

```
background-repeat: repeat;
属性： 
	repeat 平铺 （默认）
	no-repeat 不平铺
	repeat-x 水平平铺
	repeat-y 竖直平铺
```



#### 8.4 背景位置（background-position）

```
background-position: x坐标 y坐标；
// 有两个值用空格隔开
1. x  y 可以为具体的数值 3px 4px 
	如果是精确数值 第一个代表 x  第二个代表 y
	如果只有一个数值 另一个默认 center
2. 可以为方位名词 （left right top bottom center）
   当为方位名词时顺序可调换
   只写一个方位名词 另一个默认 center
```

#### 8.5 背景附着（background-attachment）

```
背景附着： 就是背景是固定的还是滚动的
background-attachment: scroll;
属性： 
	scroll 背景滚动 （默认）
	fixed 背景固定 
```

#### 8.6 背景简写

```
官方没有规定背景简写的顺寻 但一般开发人员默认
background： background-color background-image background-repeat background-attachment background-position;
// background: #ccc url(路径) no-repeat fixed center top;
```

#### 8.7 背景半透明（rgba(0, 0, 0, 0.2)）

```
前三个值 设置颜色 最后一个透明度 0 - 1
兼容性 ie9以上
```

### 9. css三大特性

#### 9.1 层叠性

```
属性样式冲突会层叠
```



#### 9.1 继承性

```
子承父业 
-font  -text -line color 会继承
```



#### 9.2优先级

| 选择器                 | 权重        |
| ---------------------- | ----------- |
| 继承 和 * （没有权重） | 0，0，0，0  |
| 标签选择器             | 0， 0，0，1 |
| 类选择器 伪类          | 0，0，1，0  |
| id 选择器              | 0 ，1，0，0 |
| 行内样式 style=""      | 1，0，0，0  |
| ！important            | 无穷大      |

### 10.盒子模型

#### 10.1 盒子模型

```
border content padding margin
```

#### 10.2 边框

```
border: 1px solid red;
border-width: 1px;
border-style: solid； // 实线
			  dashed; // 虚线
			  dotted； // 点线
border-color: red;

// 单独指定
border-top:
border-left
border-right
border-bottom
```

#### 10.3 表格细线边框

```
// 表格中每个单元格的边框会重叠使边框变粗
table {
border-collapse: collapse;
}
```

#### 10.4 内边距 padding

```
padding-left
padding-right
padding-top
padding-bottom
padding: 1px 2px 3px 4px; 上 右 下 左
padding: 1px 2px 3px; 上1px 左右 2px  下 3px
padding: 1px 2px; 上下 1px  左右 2px
padding: 1px 上下左右1px

padding 会撑大盒子
特例：
	如果盒子没有宽度 padding 不会撑开盒子
```

#### 10.5 外边距 margin

```
margin-top
margin-bottom
margin-left
margin-right
margin: 1px 2px 3px 4px; 上 右 下 左
margin: 1px 2px 3px; 上 左右 下
margin：1px 2px; 上下  左右
margin: 1px; 上右下左

```

#### 10.6 块级元素水平居中

```
// 2个条件
1. 盒子必须有宽度
2.margin-left: auto;
  margin-right: auto;
  或
  margin: auto;
  或
  margin: 0 auto;
  
  // 注意 text-align: center;
  // 使文字水平居中 也可以使块级元素内地行内元素和行内块级元素水平居中
```

```
注意：
	行内元素为了照顾兼容性尽量只设置左右内外边距 不设置上下内外边距
```

#### 10.7 解决嵌套盒子外边距塌陷

```
// 三种方法
1. 给父盒子一个上边框
border-top： 1px solid transparent; // 透明色
2. 给父盒子一个内边距
3. 给父盒子添加 voerflow: hidden; 属性
```

#### 10.8 圆角边框 border-radius

```
圆 border-radius： 50%；
矩形 一般为高度的一般
```

#### 10.9 盒子阴影

```
box-shadow: 水平阴影 垂直阴影 模糊距离（虚实） 阴影大小（影子大小）阴影颜色 内外阴影；
box-shawow: 2px 3px 3px 10px rgba(0,0,0,0.2) inset;
阴影颜色 一般采用rgba() 设置阴影透明度
内外阴影 outset(外 默认) inset（内阴影）
	注意： outset 默认不用写写了会出错
```

### 11.css三种布局机制

#### 11.1 三种机制

```
普通流 浮动 定位
```

#### 11.2 浮动

```
float： left;
属性： 
	none 不浮动
	left 左浮动
	right 右浮动
注意： 
	1.浮动的盒子脱标
	2. 浮动把元素转换为行内块级元素 （相邻盒子没有空白间隙）
	
浮动盒子参照父盒子
浮动子盒子 不会和父盒子边框重叠 也不会超过父盒子的内边距
```

#### 11.3 清除浮动

```
1. 为什么清除浮动
  在开发中很多情况下父盒子不给高度 子盒子浮动 父盒子的高度为0 
  会影响后面的标准流
```

#### 11.4 清除浮动四种方法

```
1.额外标签法
在浮动盒子后面加一个div空标签 属性 clear="both"
<div clear="both"></div>

2. 父级元素添加overflow: hidden; 属性(auto scroll 也行)
<div style="overflow:hidden">
	<div></div>
</div>

3.after伪元素清除浮动
在浮动盒子的父盒子声明类 clearfix
.clearfix:after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
.clearfix {
	*zoom: 1; // ie6 ie7 清除浮动的方法
}

4. before after 双伪元素清除浮动 （给父元素添加）
.clearfix:before,
.clearfix:after {
	content: "";
	display: table;
}
.clearfix:after {
	clear: both;
}
.clearfix {
	*zoom: 1;
}
```

#### 11.5 常见的图片格式

```
1. jpg
2. gif
3. png
4.PSD
5. DPG 京东研发 （压缩50%）
5.webp 谷歌研发
```

#### 11.6 css属性书写顺序

```
建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
```

```
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

#### 11.7 定位（position）

```
1. 静态定位（static）
	没有定位 默认 几乎不用
2.相对定位（relative）
	相对自己原来的位置
	原来在标准流的位置保留继续占有
3. 绝对定位（absolute）
	相对与带有定位的最近的父级元素来定位（子决父相）
	不保留原来的位置完全脱标的
4. 固定定位（fixed）
 	完全脱标不占位置
 	相对浏览器的可视窗口
```

#### 11.8 定位的盒子居中

```
/ 1. 先走父盒子的一半
/ 2. 往回走自身的一半
// 假如 div width=100px height=100px
div {
	position: absolute;
	left: 50%
	top: 50%;
	margin-left: -50px;
    margin-top: -50px;
}
```

#### 11.9 z-index(堆叠顺序) 

数值越大越往上 整数（0 正数 负数）

注意： z-index 只能在 定位中用（静态定位不能用）

#### 11.10 定位改变display属性

```
绝对定位（固定定位）
转换为行内块级元素
（不写宽 内容撑开）
// 浮动 和 绝对定位 不会发生外边塌陷问题
```

### 12.元素的显示和隐藏

```
1.display: block; // 显示
  display: none; // 隐藏
  // display 隐藏不保留位置
2.visibility: visible // 显示
  visibility: hidden // 隐藏
  // visibility 隐藏保留位置
3. overflow：hidden； // 超出部分隐藏（溢出隐藏）
  overflow：visible; // 溢出正常显示（默认）
  overflow： scroll; // 总会滚动条显示
  overflow: auto; // 超出滚动条显示 不超出不显示滚动条
  
```

### 13.css用户界面样式

#### 13.1 鼠标样式（cursor）

| 属性值      | 描述      |
| ----------- | --------- |
| default     | 小白 默认 |
| position    | 小手      |
| move        | 移动      |
| text        | 文本      |
| not-allowed | 禁止      |

#### 13.2 轮廓线 outline

```
主要针对文本框
一般不用 去掉
outline：none;  // 取消轮廓线
```

#### 13.3 防止拖拽文本域

```
resize: none;
```

#### 13.4  垂直居中（vertical-align）

```
只针对于行内元素和行内块级元素对块级元素无用
vertical: baseline | top | middle | bottom;
baseline 基线对齐 （默认）
top 顶线对齐
middle 中线对齐
bottom 底线对齐

// 图片在盒子可能露底 （原因图片和文字基线对齐）
// 解决方案
1. 其他方式对齐
vertical: top | middle | bottom;
2. 转化为块级元素（vertical-align 对块级元素不起作用）
```

#### 13.5 溢出的文字省略号显示 （三部曲）

```
1. white-space: normal; // 正常显示
   white-space: nowarp; // 强制一行显示 除了<br /> 标签
2. overflow: hidden; // 溢出隐藏
3.text-overflow：clip; // 溢出裁剪 （默认）
  text-overflow: ellipsis; // 溢出省略号显示
  
  {
   white-space: nowarp; // 强制一行显示 除了<br /> 标签
   overflow: hidden; // 溢出隐藏
    text-overflow: ellipsis; // 溢出省略号显示
  }
```

#### 13.6 margin负值

```
1. 盒子居中
2. 相邻盒子边框重叠 （1 + 1 = 1）
```

#### 13.7 css三角

```
p {
	width: 0;
	height: 0;
	border-width: 10px;
	border-style: solid;
	border-color: red transparent transparent transparent; // transparent 透明色 上三角 右三角 下三角 左三角
}
```

### 14.html5

```
html5新增的标签（语义化）
header 头部标签
nav   导航标签
artical 内容标签
section 块级标签
aside 侧边栏标签
footer 尾部标签
注意： 
   1. 这种语义化标准主要针对搜索引擎的
   2. 这些新标签页面中可多次使用
   3. 在IE9中，需要把这些元素转化为块级元素
   4. 其实， 移动端更喜欢这些标签
   5. HTML5还有很多标签
```

#### 14.1 h5新增的多媒体标签

```
audio 音频标签
video 视频标签

音频标签
<audio src="文件路径"></audio>
属性： 
controls 显示播放控件
autoplay 自动播放
loop 循环播放
src 路径
// 注意： 在谷歌浏览器中autoplay被禁用

// 为了兼容浏览器一般如下写
<audio controls="controls" autplay="autoplay" loop="loop">
	<source src="snow.mp3" type="audio/mpeg">
	<source src="snow.ogg" type="audio/ogg">
    您的浏览器不支持audio播放
</audio>


视频标签
<video src="文件路径"></video>
属性： 
controls 显示播放控件
autoplay 自动播放
loop 循环播放
muted 静音播放
poster 加载等待的画面图片  poster="pig.png";
width
height
src 路径
// 注意： 在谷歌浏览器中autoplay被禁用  （解决方法： 添加静音属性muted）

// 为了兼容浏览器一般如下写
<video controls="controls" autplay="autoplay" loop="loop">
	<source src="snow.mp4" type="audio/mp4">
	<source src="snow.ogg" type="audio/ogg">
    您的浏览器不支持播放此视频
</video>

```

#### 14.2 h5新增的input表单属性

| 属性值                                      | 说明                    |
| ------------------------------------------- | ----------------------- |
| type="email"                                | 限制用户输入为email格式 |
| type="url"                                  | 限制用户输入为网址格式  |
| type="data"                                 | 限制用户输入日期格式    |
| type="time"                                 | 限制用户输入为时间格式  |
| type="month"                                | 限制用户输入为月格式    |
| type="week"                                 | 限制用户输入为周格式    |
| type="number"      （e可以输入 科学计数法） | 限制用户输入为数字格式  |
| type="tel"                                  | 限制用户输入为手机格式  |
| type="search"   (可以全部删除内容)          | 收索框                  |
| type="color"                                | 生成一个颜色选择版      |

新增的属性

| 属性         | 属性               | 说明                                                         |
| ------------ | ------------------ | ------------------------------------------------------------ |
| required     | required           | input不能为空                                                |
| placeholder  | 提示文本（占位符） | 提示文本                                                     |
| autofocus    | autofocus          | 页面加载完成是自动聚焦到表单                                 |
| autocomplete | on/off             | 记录之前输入的内容   on 默认打开此功能  off  关闭  （条件 必须给表单添加name属性 并提交表单） |
| multiple     | multiple           | 可以选择多个文件提交                                         |

### 15.css3

#### 15.1 css3新增的选择器

```
1. 属性选择器
  元素[属性]  // button[disable]
  元素[属性="属性值"] // input[type="search"]
   元素[属性^="xxxx"] // 选择以xxxx开头的
   元素[属性$="xxxx"] // 选择以xxxx结尾的
   元素[属性*="xxxx"] // 选择内容有xxxx的
  // 类选择器 伪类选择器 标签选择器 都为0010
  
2. 结构伪类选择器
 元素 :first-child {} // 父元素第一个元素
 元素 :last-child {} // 父元素最后一个元素
 元素 :nth-child(n) {} // 父元素第n个元素
 // n可以是数字 关键词 公式
 // 关键词 even 偶数 odd 奇数
 // n为公式 n 从 0 开始 （2n 偶数）（2n + 1 奇数）
 // 如果 n=0 或 n < 0 忽略
 
 父元素 子元素:first-of-type {} // 选择父元素的指定指定子元素的第一个元素
 父元素 子元素:last-of-type {} // 选择父元素的指定指定子元素的最后一个元素
 父元素 子元素:nth-of-type(n) {} // 选择父元素的指定指定子元素的第n个元素
 // 类选择器 伪类选择器 标签选择器 都为0010
 
 3. 伪元素选择器
 ::after 在元素的内容前面插入
 ::before 在元素的内容后面插入
 
 注意： 
   before after 必须有 content 属性
   before after 是创建一个元素 但是是行内元素
   在dom中没有标签 所以是伪元素
   // 权重 0001
```

#### 15.2 transform

##### translate 移动

```
translate 移动

transform: translate(x,y); //沿 x y轴移动
transform: translateX(n); //沿 x轴移动
transform: translateY(n); //沿 x轴移动
重点： 
	translate 最大特点不会影响到其他元素
	translate 单位为%时是相对于自身元素
	对行内表签没有效果
```

##### rotate 旋转

```
rotate 旋转
transform: rotate(30deg) // 顺时针旋转30度
transform: rotate(-30deg) // 逆时针旋转30度
// 旋转和过度效果连用
```

##### transform-origin: x y; // 设置旋转中心点

```
transform-origin: x y; // 设置旋转中心点

重点： 
	1. x y 空格隔开
	2. x y 旋转中心点默认（50% 50%）
	3. 可以给xy 设置具体的px 或方位名词（top bottom left right center）
```

##### scale（缩放）

```
transform: scale(x,y); // 缩放宽度和高度

重点：
	1. x y 用逗号隔开
	2. transform: scale(2,2) // 宽度高度都放大两倍
	3. transform: scale(2) // 一个参数 默认scale(2,2)
	4. reansform: scale(0.5,0.5) // 小于1 缩小 
	5. 特点： 缩放不会影响到其他盒子 通过 transform-origin 可以改变缩放中心点
```

##### 综合写法

```
transform: tanslate() rotate() scale();
// 注意： 
1. 空格隔开
2. 顺序会影响效果
3. 如果有translate（） 把他放在第一
```

#### 15.3 transition(过度)

```
transition 过度

transition: 要过渡的属性  花费时间  运动曲线  何时开始;

```

| 属性                       | 描述                                         | CSS  |
| -------------------------- | -------------------------------------------- | ---- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 | 3    |
| transition-property        | 规定应用过渡的 CSS 属性的名称。              | 3    |
| transition-duration        | 定义过渡效果花费的时间。默认是 0。           | 3    |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。      | 3    |
| transition-delay           | 规定过渡效果何时开始。默认是 0               | 3    |



```
img {
  width:80px; height: 80px; border:8px solid #ccc; border-radius: 50%;
  transition:transform 0.5s ease-in 0s;
}
img:hover {
  transform:rotate(180deg);
} // 谁过度给谁加过度
```

#### 15.4 动画（animation）

```
// 使用动画两部
	1. 声明动画
	@keyframes 动画名（自定义）{
		0% { // 百分比为整数 百分比代表运动总时间的百分比
		
		}
		.
		.
		.
		100% {
		
		}
	}
	或
	@keyframes 动画名（自定义） {
		form { // 相当于0%
		
		}
		to { // 相当于100%
		
		}
	} 
	
	2. 调用动画
	animation-name: 动画名; // 调用那个动画  （必须写）
    anmation-duration: 10s; // 动画运动持续时间 （必须写）
    
    // 动画还有其他属性
```

| 属性                      | 属性值  描述                                                |
| :------------------------ | ----------------------------------------------------------- |
| animation-name            | 动画名称（必写）                                            |
| animation-duration        | 动画持续时间默认是0秒s 毫秒ms（必写）                       |
| animation-timing-function | 动画运动曲线 默认ease                                       |
| animation-delay           | 动画开始时间 默认是 0                                       |
| animation-iteration-count | 动画播放次数 默认是1 infinite(循环)                         |
| animation-direction       | 动画是否逆向运动 默认normal   alternate(逆向)               |
| animation-play-state      | 正在运行的动画是否停止 running默认  paused 停止             |
| animation-fill-mode       | d动画结束后的状态 保持 forwards  回到起始 backwards（默认） |

#### 动画简写

```
animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否逆向 保持状态；
animation： move 2s linear(匀速) 1s infinite alternate forwards;

// 多个动画用逗号隔开
animation： move 2s linear(匀速) 1s infinite alternate forwards, stop 2s linear(匀速) 1s infinite alternate forwards;
```

#### 运动曲线细节

| 值          | 描述                                 |
| ----------- | ------------------------------------ |
| linear      | 匀速                                 |
| ease        | 默认 低速开始 然后加速 在结束前变慢  |
| ease-in     | 以低速开始                           |
| ease-out    | 以低速结束                           |
| ease-in-out | 以低俗开始和结束                     |
| steps()     | 步长   （）数值  分几步完成 有停顿感 |

#### 15.6 3D (transform: translate3d();)

```
transform: translateX(); // 沿x轴移动
transform: translateY(); // 沿y轴移动
transform: translateZ(); // 沿z轴移动
简写
transform: translate3d(x,y,z);
// 注意：
 1.  x y z 不能省略 不移动写0
 2. z轴 屏幕向外为正直
```

```
透视 perspective: 200px;
近大远小
透视写在被观察元素的父盒子中
数值越小 盒子越大
// 3d 效果和透视合用
```

#### 3d旋转 rotate3d

```
transform: rotateX(45deg) // 沿x轴正向旋转45度
transform: rotateY(45deg) // 沿y轴正向旋转45度
transform: rotateZ(45deg) // 沿z轴正向旋转45度
transform: rotate3d(x,y,z,deg)沿自定义轴旋转 deg为角度
// 沿矢量和的方向
transform: rotate3d(1,0,0,45deg)沿x轴旋转 45deg为角度
transform: rotate3d(0,1,0,45deg)沿y轴旋转 45deg为角度
transform: rotate3d(1,1,0,45deg)沿对角线轴旋转 45deg为角度
```

#### 3d呈现 transform-style

```
重点： 
1. 控制子元素是否开启三维立体环境
2. transform-style: falt; 子元素不开启3d立体环境 （默认的）
3. transform-style: preserve-3d; 子元素开启立体环境
4. 代码写给父级，但是影响的是子盒子
5. 这个属性很重要
```

### 16. 浏览器私有前缀

```
-moz-: 代表firefox浏览器私有属性
-ms-: 代表ie浏览器私有属性
-webkit-: 代表safari chrome 私有属性
-o-:代表Opera 私有属性


2. 提倡的写法
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
-o-border-radius: 10px;
border-radius: 10px;
```

 

