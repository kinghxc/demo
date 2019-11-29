// 呈现评论列表
$.ajax({
    type: 'get', 
    url: '/comments',
    success: function (response) {
        console.log(response);
        var html = template('commentsTpl', {data: response});
        console.log(html);
        $('#commentsBox').html(html);
        var pageHtml = template('pageTpl', response);
        $('#pageBox').html(pageHtml);
    }
});
// 分页
function changePage(page) {
    // 呈现评论列表
$.ajax({
    type: 'get', 
    url: '/comments',
    data: {
        page: page
    },
    success: function (response) {
        console.log(response);
        var html = template('commentsTpl', {data: response});
        console.log(html);
        $('#commentsBox').html(html);
        var pageHtml = template('pageTpl', response);
        $('#pageBox').html(pageHtml);
    }
});
}

// 驳回 批准
$('#commentsBox').on('click', '.states', function () {
    // 获取修改评论id
    var id = $(this).attr('data-id');
    // 获取状态
    var state = $(this).attr('data-states');
    $.ajax({
        type: 'put',
        url: '/comments/' + id,
        data: {
            state: state == 0 ? 1 : 0
        },
        success: function () {
            location.reload();
        }
    });
})

// 删除
$('#commentsBox').on('click', '.delete', function () {
    // 获取id
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'delete',
        url: '/comments/' + id,
        success: function () {
            location.reload();
        }
    })
});