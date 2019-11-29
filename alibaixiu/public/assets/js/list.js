// 获取文章列表id
var categoryId = getUrlParams('id');

// 根据文章列表id获取文章列表信息
$.ajax({
    type: 'get',
    url: '/posts/category/' +  categoryId,
    success: function (response) {
        var html = template('listTpl', {data: response});
        $('#listBox').html(html);
    }
});

// 根据分类id获取分类标题
$.ajax({
    type: 'get',
    url: '/categories/' + categoryId,
    success: function (response) {
        $('#categoryTitle').html(response.title);
    }
})