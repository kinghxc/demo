$('#modifyForm').on('submit', function () {
    // 获取表单参数并且解析
    var params = $(this).serialize();
    $.ajax({
        type: 'put',
        url: '/users/password',
        data: params,
        success: function () {
            location.href = '/admin/login.html';
        },
        error: function (data) {
            console.log(data);
        }

    });
    return false;
})