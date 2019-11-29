// 网站设置图片文件上传
$('#logo').on('change', function () {
    // 获取图片文件
    var file = this.files[0];
    // 创建空白的表单对象
    var formData = new FormData();
    // 向文件表单添加文件属性
    formData.append('logo', file);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            $('#hiddenLogo').val(response[0].logo);
            $('#preview').attr('src', response[0].logo);
        }
    });
});

// 点击保存设置按钮
$('#settingsForm').on('submit', function () {
    // 获取表单中的参数
    var params = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/settings',
        data: params,
        success: function () {
            location.reload();
        }
    });
    return false;
});

// 向服务器发送请求 在网站设置页面显示
$.ajax({
    typr: 'get',
    url: '/settings',
    success: function (response) {
        if (response) {
            $('#hiddenLogo').val(response.logo);
            $('#preview').attr('src', response.logo);
            $('input[name="title"]').val(response.title);
            $('input[name="comment"]').prop('checked', response.comment);
            $('input[name="review"]').prop('checked', response.review);


        }
    }
})