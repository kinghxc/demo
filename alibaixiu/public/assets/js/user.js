// 提交添加用户表单
$('#formData').on('submit', function () {
    // 获取表单参数并且格式化参数为&形式参数
    var formData = $(this).serialize();
    // 向服务器发送请求
    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function (data) {
            // 重新刷新页面
            location.reload();
        },
        error: function () {
            alert('数据错误');
        }
    });
    // 阻止表单默认行为
    return false;
});

// 通过事件委托把文件提交给服务器并在客户端显示
$('#modifyBox').on('change', '#avatar', function () {
    // 创建表单对象
    var formData = new FormData();
    // 为表单对象添加表单属性
    formData.append('avatar', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        // 告诉$.ajax不要解析请求参数
        processData: false,
        // 告诉$.ajax方法不要设置请求参数类型
        contentType: false,
        success: function (data) {
            // 在客户端显示图片
            $('#preview').attr('src', data[0].avatar);
            // 在隐藏域中保存图片的地址
            $('#hidden').val(data[0].avatar);
        }
    });
})

// 向服务器端发送请求在客服端呈现用户列表
$.ajax({
    type: 'get',
    url: '/users',
    success: function (response) {
        // 拼接模板与参数
        var html = template('userTpl', {data: response});
        $('#userBox').html(html);
    }
});

// 通过事件委托点击编辑按钮把用户信息呈现在修改列表
$('#userBox').on('click', '.edit', function () {
    // 获取需要编辑用户的id
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/users/' + id,
        success: function (response) {
            // console.log(response);
            var html = template('modifyTpl', response);
            // console.log(html);
            $('#modifyBox').html(html);
        }
    })
})

// 通过事件委托提交修改信息并且把信息呈现在用户列表
$('#modifyBox').on('submit', '#modifyForm', function () {
    var formData = $(this).serialize();
    var id = $(this).attr('data-id');
    // console.log(id);
    // console.log(formData);
    $.ajax({
        type: 'put',
        url: '/users/' + id,
        data: formData,
        success: function (response) {
          // 重新刷新页面
          location.reload();
        }
    })
    // 阻止默认行为
    return false;
});

// 通过事件委托删除用户并且重新渲染列表
$('#userBox').on('click', '#delete', function () {
    if(confirm('您确定要删除用户吗?')) {
        // 获取要删除的用户id
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/users/' + id,
            success: function () {
                location.reload();
            }
        })
    }
})

// 获取用户列表的全选复选框
var selectAll = $('#selectAll');
// 为全选复选框的状态注册改变事件
selectAll.on('change', function () {
    // 获取全选复选框的状态 true false
    var selectAllStatus = $(this).prop('checked');
    // 使全选复选框和其他复选框状态保持一致
    $('#userBox').find('input').prop('checked', selectAllStatus);
    if (selectAllStatus) {
        // 全选复选框的状态为真 显示批量删除
        $('#deleteMany').show();
    } else {
        // 隐藏批量删除
        $('#deleteMany').hide();
    }
});

// 通过事件委托注册用户的复选框的状态
$('#userBox').on('change', '#userStatus', function () {
    // 获取所有的input标签
    var inputs = $('#userBox').find('input');
    // 判断所有的input标签的个数 和 含有checked的input标签的个数是否相等
    if (inputs.length == inputs.filter(':checked').length) {
        // 复选框全被选中设置全选复选框的checked为true
       $('#selectAll').prop('checked', true);
    } else {
        // 复选框没有全被选中设置全选复选框的checked为false
       $('#selectAll').prop('checked', false);
    }
    // 如果复选框被选中的个数大于0
    if (inputs.filter(':checked').length > 0) {
        // 显示批量删除
        $('#deleteMany').show();
    } else {
        // 隐藏批量删除
        $('#deleteMany').hide();
    }
})

// 批量删除
$('#deleteMany').on('click', function () {
    var ids = [];
    // 获取所有被选中的用户复选框
    var inputs = $('#userBox').find('input').filter(':checked');
    // 循环被选中的input把用户id存放到数组中
    inputs.each(function (index, element) {
        ids.push($(element).attr('data-id'));
    })
    if (confirm('确定要批量删除吗？')) {
        $.ajax({
            type: 'delete',
            url: '/users/' + ids.join('-'),
            success: function () {
                location.reload();
            }
        });
    }
})