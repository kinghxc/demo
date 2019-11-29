// 所属分类下拉列表呈现
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        var html = template('categoryTpl', {data: response});
        $('#category').html(html);
    }
});

// 文章封面文件上传
$('#feature').on('change', function () {
    // 获取上传文件
    var file = this.files[0];
    // 创建表单对象
    var formData = new FormData();
    // 向表单对象中添加一个文件属性
    formData.append('cover', file);
    // 向服务器端发送请求
    $.ajax({
        type: 'post',
        url: '/upload',
        // 设置不解析表单对象
        processData: false,
        // 设置不要参数类型
        contentType: false,
        data: formData,
        success: function (response) {
            // console.log(response[0].cover);
            // 在隐藏域中保存文件的地址
            $('#thumbnail').val(response[0].cover);
        }
    });
})

// 提交文章内容
$('#addForm').on('submit', function () {
    // 获取表单参数
    var params = $(this).serialize();
    console.log(params)
    $.ajax({
        type: 'post',
        url: '/posts',
        data: params,
        success: function () {
            // 跳转的所有文章列表页面
            location.href = '/admin/posts.html';
        }
    });
    return false;
});

// 获取修改文章的id
var id = getUrlParams("id");
 // 进入文章编辑页面
if (id != -1) {
    // 进入文章编辑页面
    $.ajax({
        type: 'get', 
        url: '/posts/' + id,
        success: function (response) {
            // 所属分类下拉列表呈现
            $.ajax({
                type: 'get',
                url: '/categories',
                success: function (categories) {
                    response.categories = categories;
                    console.log(response);
                    var html = template('modifyFormTpl', response);
                    console.log(html);
                    $('#modifyBox').html(html);
                }
            });
        }
    })
}

// 提交文章的修改内容
$('#modifyBox').on('submit', '#modifyForm', function () {
    // 获取修改表单参数
    var params = $(this).serialize();
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/posts/' + id,
        data: params,
        success: function () {
            location.href = '/admin/posts.html';
        }
    });
    return false;
})

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
