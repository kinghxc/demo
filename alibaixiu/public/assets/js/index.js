// 文章统计
$.ajax({
    type: 'get',
    url: '/posts/count',
    success: function (response) {
        $('#posts').html('<strong>'+ response.postCount +'</strong>篇文章（<strong>'+ response.draftCount+'</strong>篇草稿）');
    }
});

// 文章分类统计
$.ajax({
    type: 'get',
    url: '/categories/count',
    success: function (response) {
        $('#categories').html('<strong>'+ response.categoryCount +'</strong>个分类');
    }
});

// 获取评论统计
$.ajax({
    type: 'get',
    url: '/comments/count',
    success: function (response) {
        $('#comments').html('<strong>'+ response.commentCount +'</strong>条评论');
    }
});