// 选择图片文件
$('#file').on('change', function () {
    // 获取图片文件
    var file = this.files[0];
    // 创建文件对象
    var formData = new FormData();
    // 为文件表单对象添加文件属性
    formData.append('image', file);
    // 向服务器发送请求上传图片文件
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            $('#image').val(response[0].image);
        }
    });
});

// 图片轮播提交
$('#slidesForm').on('submit', function () {
    // 获取表单参数
    var params = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/slides',
        data: params,
        success: function () {
            location.reload();
        }
    });
    return false;
});

// 向服务求索要轮播图列表
$.ajax({
    type: 'get',
    url: '/slides',
    success: function (response) {
        var html = template('slidesTpl', {data: response});
        $('#slidesBox').html(html);
    }
});

// 删除轮播图
$('#slidesBox').on('click', '.delete', function () {
    // 获取删除轮播图的id
    var id = $(this).attr('data-id');
    if (confirm('确定要删除吗?')) {
        $.ajax({
            type: 'delete',
            url: '/slides/' + id,
            success: function () {
                location.reload();
            }
        });
    }

})