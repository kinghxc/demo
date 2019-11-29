// 点击文章分类目录表单提交表单
$('#categorieForm').on('submit', function () {
    // 解析表单
    var params = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/categories',
        data: params,
        success: function () {
            location.reload();
        }
    });
    return false;
})

// 呈现分类目录的请求
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        var html = template('categoriesListTpl', {data: response});
        $('#categoriesBox').html(html);
    }
});

// 根据id获取分类列表的修改功能
$('#categoriesBox').on('click', '.edit', function () {
    // 获取分类名称的id
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get', 
        url: '/categories/' + id,
        success: function (response) {
           var html = template('modifyCategoryTpl', response);
           $('#modifyBox').html(html);
        }
    });
});

// 提交修改内容并渲染
$('#modifyBox').on('submit', '#modifyCategorieForm', function () {
    //获取修改列表的id
    var id = $(this).attr('data-id');
    // 解析表单参数
    var params = $(this).serialize();
    $.ajax({
        type: 'put',
        url: '/categories/' + id,
        data: params,
        success: function (response) {
           location.reload();
        }
    });
    return false;
});

// 删除列表分类
$('#categoriesBox').on('click', '.delete', function () {
   // 获取删除目录的id
   var id = $(this).attr('data-id');
   if (confirm('确定要删除？')) {
        $.ajax({
            type: 'delete',
            url: '/categories/' + id,
            success: function () {
                location.reload();
            }
        })  
   }
 
})
