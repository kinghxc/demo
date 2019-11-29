// 向服务器发送请求呈现所有文章列表
$.ajax({
    type: 'get',
    url: '/posts',
    success: function (response) {
      // console.log(response);
      var html = template('postsTpl', {data: response});
      $('#postsBox').html(html);
      var page = template('pageTpl', {data: response});
      // console.log(page);
      $("#pageBox").html(page);
    }
});
 
// 向服务器发送请求 索要文章分类列表
$.ajax({
  type: 'get',
  url: '/categories',
  success: function (response) {
    // console.log(response);
    var html = template('categoryTpl', {data: response});
    // console.log(html);
    $('#categoryBox').html(html);
  }
}); 

// 提交筛选内容并渲染客服端
$('#filterForm').on('submit', function () {
  // 解析表单
  var params = $(this).serialize();
  $.ajax({
    type: 'get',
    url: '/posts',
    data: params,
    success: function (response) {
      // console.log(response);
      var html = template('postsTpl', {data: response});
      $('#postsBox').html(html);
      var page = template('pageTpl', {data: response});
      // console.log(page);
      $("#pageBox").html(page);
    }
});
  return false;
})

// 删除文章按钮
$('#postsBox').on('click', '.delete', function () {
  var id = $(this).attr('data-id');
  $.ajax({
    type: 'delete', 
    url: '/posts/' + id,
    success: function () {
      location.reload();
    }
  });
})
// 时间格式化函数
function formateDate(date) {
  // 将日期字符串转化为日期对象
  date = new Date(date);
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
};
// 分页
function changePage(page) {
  // 向服务器发送请求呈现所有文章列表
  // console.log(page);
  $.ajax({
    type: 'get',
    url: '/posts',
    data: {
      page: page
    },
    success: function (response) {
      // console.log(response);
      var html = template('postsTpl', {data: response});
      $('#postsBox').html(html);
      var page = template('pageTpl', {data: response});
      // console.log(page);
      $("#pageBox").html(page);
    }
  });
}
