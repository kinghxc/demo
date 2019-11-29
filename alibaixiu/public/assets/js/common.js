$('#logout').on('click', function () {
    // 返回一个布尔值
    var isConfirm = confirm('请确定是否退出?');
    // 确定退出
    if (isConfirm) {
    location.href = 'login.html';
    }
});

// 向服务器发送请求，索要登陆用户信息
$.ajax({
    type: 'get',
    url: '/users/' + userId,
    success: function (response) {
        $('.avatar').attr('src', response.avatar);
        $('.profile .name').html(response.nickName);
    }
});