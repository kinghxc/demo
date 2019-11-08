### 块级元素 

```
address - 地址
blockquote - 块引用
center - 举中对齐块
dir - 目录列表
div - 常用块级容易，也是 css layout 的主要标签
dl - 定义列表
fieldset - form控制组
form - 交互表单
h3-大标题
h4 - 副标题
h3 - 3级标题
h4 - 4级标题
h5 - 5级标题
h6 - 6级标题
hr - 水平分隔线
isindex - input prompt
menu - 菜单列表
noframes - frames可选内容，（对于不支持 frame 的浏览器显示此区块内容
noscript - ）可选脚本内容（对于不支持 script 的浏览器显示此内容）
ol - 排序表单
p - 段落
pre - 格式化文本
table - 表格
ul - 非排序列表
```

### 行内元素

```
a - 锚点
abbr - 缩写
acronym - 首字
b - 粗体 ( 不推荐 )
bdo - bidi override
big - 大字体
br - 换行
cite - 引用
code - 计算机代码 ( 在引用源码的时候需要 )
dfn - 定义字段
em - 强调
font - 字体设定 ( 不推荐 )
i - 斜体
img - 图片
input - 输入框
kbd - 定义键盘文本
label - 表格标签
q - 短引用
s - 中划线 ( 不推荐 )
samp - 定义范例计算机代码
select - 项目选择
small - 小字体文本
span - 常用内联容器，定义文本内区块
strike - 中划线
strong - 粗体强调
sub - 下标
sup - 上标
textarea - 多行文本输入框
tt - 电传文本
u - 下划线
var - 定义变量
```

### 常见的浏览器及内核

| 浏览器  |  内核   |          备注           |
| :-----: | :-----: | :---------------------: |
|   IE    | Trident |                         |
| firefox |  Gecko  |                         |
| safsri  | webkit  |                         |
| chrome  |  Blink  | Blink其实是Webkit的分支 |
|  Opera  |  Blink  |                         |

### 网页web标准的三层结构

```
结构html  表现css   行为JavaScript
```

### HTML骨架

```html
<html lang="en"> // lang 语言  en 英文  zh-CN 中文
<head>
    <meta charset="UTF-8"> // 字符集 UFT-8 包含全世界所有国家的字符
    <title></title>
</head>
<body>
    
</body>
</html>
```

### html常见标签

#### 	排版标签

##### 		标题标签h

```
<h1> </h1>
<h2> </h2>
<h3> </h3>
<h4> </h4>
<h5> </h5>
<h6> </h6>
```

##### 	段落标签p

```
<p> </p>
```

##### 	水平线标签hr(单表签)

```
<hr />
```

##### 	换行标签br(单表签)

```
<br /> 强制换行
```

##### 	div和span标签(重点)

```
<div> </div> 一行只能放一个div
<span> <span> 一行可以放多个span
```

#### 文本格式化标签

| 标签                        | 显示效果                        |
| :-------------------------- | :------------------------------ |
| <b></b>   <strong></strong> | 文字加粗  推荐<strong></strong> |
| <i></i> <em></em>           | 文字倾斜  推荐<em></em>         |
| <s></s> <del></del>         | 文字加删除线 推荐<del></del>    |
| <u></u> <ins></ins>         | 文字加下划线 推荐<ins></ins>    |

#### 标签的属性

```
<标签 属性="属性值" 属性="属性值" 属性="属性值".....></标签>
```

#### 图片标签img(单表签)

| 属性   | 属性值                         | 描述                     |
| ------ | ------------------------------ | ------------------------ |
| src    | URL（必须写）                  | 图像的路径               |
| alt    | 文本                           | 图像不能显示时替换的文字 |
| title  | 文本                           | 鼠标悬停时显示的内容     |
| width  | 像素（XHTML不支持%页面百分比） | 设置图像的宽度           |
| height | 像素（XHTML不支持%页面百分比） | 设置图像的高度           |
| border | 数字                           | 设置图像的边框的宽度     |

```
<img src="路径" alt="图片加载失败" title="显示文字" />
```

#### 超链接标签a标签

| 属性         | 属性值                                         |
| ------------ | ---------------------------------------------- |
| href(必须写) | 跳转路径                                       |
| target       | _self(默认值)在当前窗口打开 _blank在新窗口打开 |

```
<a href="http://www.baidu.com" target="_blank"></a> // 在新窗口打开百度链接
```

####  注释标签

```
<!-- 注释 -->
快捷键 ctrl + /  或  ctrl + shift + /
推荐写法
<!-- 注释 -->
<div> <div>
不推荐写法
<div></div> <!-- 注释 -->
```

#### 锚点定位

```
通过创建锚点定位，用户可以快速定位到目标内容
创建锚点链接分为两步：
1. 使用相应的id名标注目标跳转位子
	<h3 id="two"> 第二集 </h3>
2. 使用<a href="#two"> 跳转到第二集</a>
```

#### base标签(单表签）

```
base标签可以设置所有超链接在新窗口打开
<base target="_blank"/>
base标签写在head之间
```

#### 预格式化文本pre标签

```
<pre>
	文本怎么写
	就怎么显示
		1234
</pre>
其他标签显示（不识别空格和换行）
	文本怎么写就怎么显示1234
pre标签显示（可以识别空格和换行）
	文本怎么写
	就怎么显示
		1234
```

### 特殊字符

| 特殊字符 | 描述   | 字符的代码 |
| -------- | ------ | ---------- |
| 空格     | 空格符 | &nbsp;     |
| >        | 大于   | &gt;       |
| <        | 小于   | &lt;       |

### 表格标签和属性

```html
<table width="500" height="300" border="1" cellspacing="0" cellpadding="10" align="center">
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
```

| 属性名      | 含义                                     | 常用属性值            |
| ----------- | :--------------------------------------- | --------------------- |
| border      | 设置表格的边框（默认border="0" 无边框）  | 像素值                |
| cellspacing | 设置单元格与单元格之间的距离             | 像素值（默认值2像素） |
| cellpadding | 设置单元格文字与单元格边框之间的空白距离 | 像素值（默认为1像素） |
| width       | 设置表格table的宽度                      | 像素值                |
| height      | 设置表格table的高度                      | 像素值                |
| align       | 设置表格在网页中水平对齐方式             | left    right  center |

### 表头单元格

```html
<table width="500" height="300" border="1" cellspacing="0" cellpadding="10" align="center">
    <caption>我是表格的标题</caption> 
	<tr>
		<th></th>
		<th></th>
		<th></th>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>

// th 表头 th中的内容默认加粗文字居中显示
// 1.caption 元素定义表格标题， 通常这个标题会被居中显示位于表格之上
// 2. caption 标签必须紧跟table标签之后
// 3. 这个标签只存在表格里才有意义
```

### 合并单元格

```html
// 跨行合并 rowspan="合并单元格数量"；
// 跨列合并 colspan="合并单元格数量"；
<table width="500" height="300" border="1" cellspacing="0" cellpadding="10" align="center">
    <caption>我是表格的标题</caption> 
	<tr>
		<th></th>
		<th></th>
		<th></th>
	</tr>
	<tr>
		<td rowspan="2"></td>
		<td colspan="2"></td>
		<--!<td></td>--> // 跨列合并后删除他（colspan="2"）
	</tr>
    <tr>
		<--!<td></td>--> // 跨行合并后删除他(rowspan="2")
		<td></td>
		<td></td>
	</tr>
</table>

```

### 表格划分结构

```html
<table width="500" height="300" border="1" cellspacing="0" cellpadding="10" align="center">
    <caption>我是表格的标题</caption> 
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
		</tr>
    </thead>
	<tbody>
    	<tr>
            <td></td>
            <td></td>
            <td></td>
		</tr>
    </tbody>
	<tfoot>
    	<tr>
        	<td></td>
        </tr>
    </tfoot>
</table>

// 1. <thead></thead>用于定义表格的头部 thead中必须有tr标签
// 2. <tbody></tbody>用于定义表格是主体
// 3. <tfoot></tfoot>用于定义表格脚注之类
```

### 列表

#### 无序列表

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
// 1. ul里只能放li  
// 2. li里可以放任何标签
```

#### 有序列表

```html
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>
// 1. ol里只能放li  
// 2. li里可以放任何标签
```

#### 自定义列表

```html
<dl>
    <dt>动物</dt>
    <dd>猫</dd>
    <dd>狗</dd>
    <dd>老虎</dd>
    <dd>老鼠</dd>
</dl>

// dd 用来描述 dt
```

### 表单标签

####   input标签(单表签)

​	

| 属性      | 属性值       | 描述                                   |
| --------- | ------------ | -------------------------------------- |
| type      | text         | 单行文本框输入                         |
|           | password     | 密码框输入                             |
|           | radio        | 单选按钮                               |
|           | checkbox     | 复选框                                 |
|           | button       | 普通按钮                               |
|           | submit       | 提交按钮                               |
|           | reset        | 重置按钮                               |
|           | image        | 图像形式提交的按钮                     |
|           | file         | 文本域（上传文件）                     |
| name      | 由用户自定义 | 控件的名称                             |
| value     | 由用户自定义 | input控件中默认的文本值                |
| checked   | checked      | 定义选择控件默认被选中的项             |
| size      | 正整数       | input控件在页面中显示的宽度( 一般不用) |
| maxlength | 正整数       | 允许控件输入最多的字符数（一般不用）   |

```
// radio 单选按钮 必须设置相同的name 
<input type="radio" name="sex">男
<inptu type="radio" name="sex">女

// image 必须设置src属性
<input type="image" src="路径">
```

#### label标签

```
作用：当鼠标点击label标签的文字时，光标会定位到表单里面
有两种方法
方法一： label 标签直接包裹 input 标签

<label>用户名：<input type="text" value="请输入用户名"> </label>

方法二： label 的 for 属性值 和 input 的 id 属性值相同来绑定 

<label for="nc"> 用户名：</label> 
<input type="text" value="请输入用户名" id="nc"> 
```

#### 文本域textarea

```
<textarea rows="显示的行数" cols="每行显示的字符数">

</textarea>

// rows 和 cols 在开发中基本不用
```

#### 下拉列表select

```html
<select>
	<option>河北</option>
    <option selected="selected">山东</option>
    <option>河南</option>
</select>
// 属性 selected 当前项为默认项
```

#### 表单域form

```
<form action="demo.php" method="get" name="表单的名字">

</form>
```

| 属性   | 属性值             | 作用                                             |
| ------ | ------------------ | ------------------------------------------------ |
| action | url地址            | 用于指定接受并处理表单数据的服务器程序的url地址  |
| method | get/post(请求方式) | 用于设置表单数据提交的方式，取其值为get或post    |
| name   | 表单名称           | 用于指定表单的名称，以区分同一个页面中的多个表单 |

### 查文档

w3c http://www.w3school.com.cn/
MDN http://developer.mozilla.org/zh-CN/





