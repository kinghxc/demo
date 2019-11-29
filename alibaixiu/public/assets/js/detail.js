// 获取文章详细id
var id = getUrlParams('id');
// 是否人工审核评论
var review;
// 从服务器获取文章详细内容
$.ajax({
    type: 'get',
    url: '/posts/' + id,
    success: function (response) {
        var html = template('detailTpl', response);
        $('#detailBox').html(html);
    }
});

// 点赞
$('#detailBox').on('click', '#like', function () {
    $.ajax({
        type: 'post',
        url: '/posts/fabulous/' + id,
        success: function () {
            alert('点赞成功，感谢你的支持!');
        }
    });
});

// 获取网站配置信息
$.ajax({
    type: 'get',
    url: '/settings',
    success: function (response) {
        review = response.review;
        console.log(response);
        if (response.comment) {
            var html = template('commentTpl');
            $('#comment').html(html);
        }
    }
});

// 提交评论
$('#comment').on('submit', 'form', function () {
    // 获取评论内容
    var content = $(this).find('textarea').val();
    // 设置评论状态
    var state;
    if (review) {
        // 人工审核
        state = 0;
    } else {
        // 不需要人工审核
        state = 1;
    }
    $.ajax({
        type: 'post',
        url: '/comments',
        data: {
            content: content,
            post: id,
            state: state
        },
        success: function (response) {
            console.log(response);
            alert('评论成功');
            location.reload();
        }
    });
    return false;
})