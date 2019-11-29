// 时间格式化函数
function formateDate(date) {
    // 将日期字符串转化为日期对象
    date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  };

// 函数获取浏览器地址栏的参数
function getUrlParams(name) {
    // location.search 获取浏览器地址？和后面的字符串 ?id=5dd3e0c4678ba7336058500b
    // substr(1)截取？后面的字符串 id=5dd3e0c4678ba7336058500b
    // split('&') 用&把字符串分割成数组 ["id=5dd3e0c4678ba7336058500b", "age=13"]
    var params = location.search.substr(1).split('&');
    for (var i = 0; i < params.length; i++) {
        // split('=') 用=把字符串分割成数组 ["id", "5dd3e0c4678ba7336058500b"] ["age", "13"]
        var tem = params[i].split('=');
        if (tem[0] == name) {
            return tem[1];
        };
    }
    return -1;
}

// 向服务器获取热门推荐
$.ajax({
    type: 'get',
    url: '/posts/recommend',
    success: function (response) {
        var recommendTpl = `
        {{each data}}
            <li>
                <a href="/detail.html?id={{$value._id}}">
                <img src="{{$value.thumbnail}}" alt="">
                <span>{{$value.title}}</span>
                </a>
            </li>
        {{/each}}
        `;
        var html = template.render(recommendTpl, {data: response});
        $('#recommendBox').html(html);
    }
});

// 向服务器获取随机推荐
$.ajax({
    type: 'get',
    url: '/posts/random',
    success: function (response) {
        var randomTpl = `
        {{each data}}
            <li>
                <a href="detail.html?id={{$value._id}}">
                <p class="title">{{$value.title}}</p>
                <p class="reading">阅读({{$value.meta.views}})</p>
                <div class="pic">
                    <img src="{{$value.thumbnail}}" alt="">
                </div>
                </a>
            </li>
        {{/each}}
        `;
        var html = template.render(randomTpl, {data: response});
        $('#randomBox').html(html);
    }
})

// 向服务器获取评论信息
$.ajax({
    type: 'get', 
    url: '/comments/lasted',
    success: function (response) {
        var commentsTpl = `
        {{each data}}
            <li>
                <a href="javascript:;">
                <div class="avatar">
                    <img src="{{$value.author.avatar}}" alt="">
                </div>
                <div class="txt">
                    <p>
                    <span>{{$value.author.nickName}}</span>{{$imports.formateDate($value.createAt)}}说:
                    </p>
                    <p>{{$value.content}}</p>
                </div>
                </a>
            </li>
        {{/each}}
        `;
        var html = template.render(commentsTpl, {data: response});
        $('#commentsBox').html(html);
    }
});

// 向服务器索要文章分类信息
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        console.log(response);
        var navTpl = `
        {{each data}}
            <li><a href="list.html?id={{$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a></li>
        {{/each}}
        `;
        var html = template.render(navTpl, {data: response});
        $('#navBox').html(html);
        $('#topNavBox').html(html);
    }
});

// 点击搜索按钮时跳转
$('.search form').on('submit', function () {
   var key = $(this).find('.keys').val();
   location.href = '/search.html?key=' + key;
    return false;
})