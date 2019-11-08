### 1. jquery的入口函数

```
// 1.
$(function () {
	代码
});
// 2.
$(document).ready(function () {
	代码
});

// 3. 
	$是jquery的顶级对象
```

### 2.DOM对象 和 jQuery对象

```
dom对象 通过原生js获取的元素
jQuery对象 通过jQuery获取的元素

// DOM对象 转化为 jQuery对象
$('div')
// jQuery对象 转化为 DOM对象
$('video')[index]
$('video').get(index)
// 例如 
$('video')[0].play();
$('video').get(0).play();
```

### 3.jQuery选择器

| 选择器名称 | 用法            | 描述                   |
| :--------- | --------------- | ---------------------- |
| ID选择器   | $('#id')        | 获取指定的id元素       |
| 全选选择器 | $('*')          | 匹配所有元素           |
| 类选择器   | $('.calss')     | 获取同一类class的元素  |
| 标签选择器 | $('div')        | 获取同一类标签的元素   |
| 并集选择器 | $('div,p,li')   | 获取多个元素           |
| 交集选择器 | $('li.current') | 交集元素               |
| 子代选择器 | $('ul > li')    | 使用>号 获取亲儿子元素 |
| 后代选择器 | $('ul li')      | 使用空格 获取后代元素  |

### 4.隐式迭代

```
匹配到的元素进行了循环遍历
$('div').css('backgroundColor', 'red') //给所有的div背景颜色变为red 隐式迭代
```

### 5.jQuery 筛选选择器

| 语法        | 用法             | 描述                     |
| ----------- | ---------------- | ------------------------ |
| ：first     | $('ul li:first') | 获取第一个li元素         |
| ：last      | $('ul li:last')  | 获取最后一个li元素       |
| ：eq(index) | $('ul li:eq(2)') | 获取索引号为2 的li 元素  |
| ：odd       | $('ul li:odd')   | 获取索引号为奇数的li元素 |
| :even       | $('ul li:even')  | 获取索引号为偶数的li元素 |

### 6.jQuery筛选方法

| 语法               | 用法                           | 说明                                        |
| ------------------ | ------------------------------ | ------------------------------------------- |
| parents('选择器')  | $('.fore').parents('.one');    | 查找指定的祖先元素                          |
| parent()           | $('li').parent();              | 查找父级                                    |
| children(selector) | $('ul').children('li')         | 相当于$('ul>li') 最近一级（亲儿子）         |
| find(select)       | $('ul').find('li')             | 相当于$('ul li') 后代选择器                 |
| siblings(selector) | $('.first').siblings('li')     | 查找兄弟节点 不包括自己本身                 |
| nextAll()          | $('.first').nextAll()          | 查找当前元素之后的所有兄弟元素              |
| prevtAll()         | $('.first').prevtAll()         | 查找当前元素之前的所有的兄弟元素            |
| hasClass(class)    | $('div').hasClass('protected') | 检擦当前元素是否含有某个特定的类 有返回true |
| eq(index)          | $('li').eq(2)                  | 相当于$('li:eq(2)') index从0开始            |

### 7.操作css方法

```
1. 参数只写属性名 则返回属性值
$(this).css('color'); 
2. 设置一组样式
$(this).css('color', 'red');
3. 设置多组样式 采用对象的形式
$(this).css({
	'color': 'red',
	 'fontSize': '16px'
}); // 不同属性用逗号隔开
```

### 8.类操作（添加 删除 切换）

```
// 1. 添加类
$('div').addClass('current');
// 2.删除类
$('div').removeClass('current');
// 3.切换类
$('div').toggleClass('current'); // 有删除 没有添加

// 不影响以前的类名
```

### 9.显示 隐藏 切换效果

```
// 隐藏 
hide([speed], [easing],[fn]); // 三个参数可以省略
// 参数
1. speed 三种预定速度的字符串（'slow' 'normal' 'fast'）或则表示动画时常的毫秒数（如 1000）
2. easing 用来指定切换动画 默认是’swing'(慢快慢) 'linear'(匀速)
3. fn 回调函数 在动画完成后 每一个元素执行一次

// 显示
hide();

// 切换
toggle(); // 显示就隐藏 隐藏就显示
```

### 10.滑动（上滑动 下滑动 切换滑动）

```
// 1.向下滑动
slideDown()
// 2. 向上滑动
slideUp()
// 3. 切换滑动
slideToggle()
// 参数同显示隐藏
```

### 11.事件切换 hover()

```
// 参数
两个参数
$('div').hover(function() {},function() {});
// 第一个函数鼠标进入触发
// 第二个参数鼠标离开触发

// 一个参数
$('div').hover(function() {});
// 鼠标进入和离开触发同一个函数
```

### 12.停止动画 stop()

```
多次触发动画会使动画排队
// 停止动画
stop()
stop()写到动画或则效果的前面，相当于停止结束上一次动画
$('div').hover(function () {
	$(this).stop().slideToggle();
});
```

### 13. 淡入 淡出效果

```
// 1. 淡入 
fadeIn();
// 2.淡出
fadeOut();
// 3. 淡入 淡出切换
fadeToggle();
// 以上参数通 显示隐藏
// 4. 设置透明度
fadeTo([speed], opacity, [easing], [fn]);
opacity 透明度必写
其他参数同上
```

### 14 .自定义动画 animate

```
animate(params, [speed], [easing], [fn]);
// 参数
1. params 想要更该的样式属性，以对象形式传递，必须写 属性名可以不带引号 其余参数可以省略 同上

$('div').animate({
	left: 200,
	top: 200,
	opacity: .5
}, 30)
```

### 15.获取 设置元素属性

```
1. 设置获取元素固有属性
// 获取属性值
$('a').prop('href');
// 设置属性值
$('a').prop('href', 'http://www.baidu.com');

2. 设置获取元素自定义属性
// 设置自定义属性
$('div').attr('index', 1);
// 获取自定义属性值
$('div').attr('index');

// 3. 数据缓存 data() 这个里面的数据是存放在元素内存中
//把键 和值存到 span里面
$('span').data('uname', 'andy');
// 获取值
$('span').data('uname');
// 另外还可以获取h5 以 data-开头的自定义属性
$('div').data('index'); // 获取 data-index的值 不用写 data-
```

### 16. 获取 设置元素的内容

```
获取值
$('div').html(); // 相当于innerHTML
$('div').text(); // 相当于innerText
设置值
$('div').html('123'); // 相当于innerHTML
$('div').text('123'); // 相当于innerText
表单获取设置值
$('input').val() // 获取值 相当于 value
$('input').val('123'); // 设置值

// 方法保留几位小数
toFixed(2); // 保留2为小数 
```

### 17. 元素操作

```
1. 遍历元素 each
var arr = ['blue', 'red', 'green'];
$('div').each(function (index, domEle) {
// index 遍历元素对应的索引号 从0开始
// domELme 索引号对应的每一个元素 是 DOM元素 要包装成 jQuery元素
	$(domEle).css('color', arr[index]);
});

2.遍历任何对象  $.each()
$.each(obj, function (index. domEle) {

})
```

```
创建标签
var li = $('<li>创建元素</li>');
添加元素
 	1. 内部添加成为父子关系
 	$('ul').append(li); // 添加到后面
 	$('ul').prepend(li); // 添加到前面
 	2. 外部添加成为兄弟关系
 	$('div').after(div); // 添加到当前元素后面
 	$('div').before(div); // 添加到当前元素前面
删除元素
	1. 删除匹配元素 包含自己
	element.remove();
	2. 删除所有子元素 不包含自己
	$('ul').empty();
	$('ul').html('');// 空字符串
```

### 18. 事件绑定

```
1. 绑定单个事件
$('div').click(function() {
	$(this).css('backgroundColor', 'red');
} );
2. 采用on 绑定多个事件 采用对象的形式
$('div').on({
	mouseover: function () {
		$(this).css('backgroundColor', 'red');
	},
	mouseout: function () {
		$(this).css('backgroundColor', 'blue');
	}
})

// 如果是同一个事件 可以简写
$('div').on("mouseover mouseout", function () {
	$(this).toggleClass('red');
})

(2). 采用 on 可以实现事件委托
$('ul').on('click', 'li', function () {
	alert('11');
}) // 为ul绑定点击事件 点击li 触发事件

（3）. on 可以实现给未来创建的元素绑定事件
$('ol').on('click', 'li', function () {
	alert('123');
})
var li = $('<li>我是刚创建的</li>');
$('ol').append(li); // 刚刚创建的li 也绑定了click事件
```

### 19. 解绑事件

```
通过 off 解绑事件
1. $('div').off(); // 解绑div所有事件
2. $('div').off('click'); // 解绑div点击事件
// 解绑委托事件
$('ul').off('click', 'li');
// 通过 one() 绑定事件和on一样但是只能触发一次
$('div').one('click', function () {
	$(this).css('backgroundColor','red');
})
```

### 20 . 自动触发事件

```
// 1. 元素.事件（）;
$('div').click();
// 2. trigger('事件')；
$('div').trigger('click');
// 3. triggerHandler('事件');
$('div').triggerHandler('click');
// 区别 第三个不会触发元素的默认行为
```

### 21. 事件对象e

```
和原生js事件对象一样
```

### 22 jQuery 对象拷贝$.extend()（浅拷贝 深拷贝）

```
var obj = {
	age: 20，
	mes： {
		name: 'xx'
	}
};
var oldobj = {
 	age: 19,
 	name: 'kke',
 	mse: {
 		age: 18
 	}
}
$.extend(obj, oldobj); // 把第二个对象拷贝给第一个对象 如果属性冲突覆盖
$(false, obj, oldobj); // 浅拷贝 默认的 只是把第二个对象的地址复制给了第一个 任何一个对象改变属性两个都会改变
$(true, obj, oldobj); // 深拷贝 把第二个对象复制一份给第一个 并且如果属性冲突 合并
```

### 23 . 解决jQuery 多库共存

```
// 1. $ 冲突 可以使用 jQuery 代替
// 2. 开发$符号权限 var shuibian = $.noConflict(); // shuibian 就可以代替 $
```

### 24. jQuery 插件

```
瀑布流
懒加载等等

// 全屏滚动插件（fillpage.js）
hithub: http://github.com/alvarotrigo/fullPage.js
中文翻译网站 http://www.dowebok.com/demo/2014/77/
```

### 25. JSON.stringify() 和 JSON.parse()

```
1. 在本地存储localStorage里面只能存储字符串格式 因此需要把对象转换为字符串 JSON.stringify(data);
2. 获取本地数据， 需要把里面的字符串转化为对象格式JSON.parse(data);
```

### 26.获取元素的宽高

| 方法                                   | 说明                                                  |
| -------------------------------------- | ----------------------------------------------------- |
| width()    /    height()               | 获取元素的宽 和 高 但是 不包含  padding margin border |
| innerWidth()  /  innerHeight()         | 获取元素的宽 和 高 包含 padding                       |
| outerWidth()  /  outerHeight()         | 获取元素的宽 和 高 包含 padding  border               |
| outerWidth(true)  /  outerHeight(true) | 获取元素的宽 和 高 包含 padding  border margin        |

```
获取的都是数字型不带单位
不写参数  获取数据
写参数 设置数据 参数不用带单位
```

### 27. 获取元素位置

#### 27.1 offset() 

```
offset() 获取元素相对于文档的位置 返回一个对象
// 获取距离文档上放位置
$('div').offset().top;
// 获取距离文档左方位置
$('div').offset().left;
// 设置位置
$('div').offset({
	top: 200,
	left: 300
});
```

#### 27.2 position()

```
获取距离带有定位父级元素的位置
$('div').position().top;
$('div').position().left;
// 但是不能设置
```

#### 27.3 scrollTop()  scrollLeft()

```
scrollTop() 设置获取元素头部被卷去的部分
scrollLeft() 设置获取元素左部被卷去的部分
// 加参数就是设置
```

