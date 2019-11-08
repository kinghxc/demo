// 引入express框架
const express = require('express');
// 创建博客管理路由
const admin = express.Router();
// 为路由挂二级目录 显示登陆页面路由
admin.get('/login', require('./admin/loginPage'));
// 实现登陆路由
admin.post('/login', require('./admin/login'));
// 实现用户列表路由
admin.get('/user', require('./admin/userPage'));
// 实现退出路由
admin.get('/logout',require('./admin/logout'));
// 新增用户路由
admin.get('/user-edit', require('./admin/user-edit'));
// 提交新用户路由
admin.post('/user-edit', require('./admin/user-edit-fn'));
//  修改用户路由
admin.post('/user-modify', require('./admin/user-modify'));
// 删除用户路由
admin.get('/delete', require('./admin/delete'));
// 文章列表路由
admin.get('/article', require('./admin/article'));
// 文章编辑路由
admin.get('/article-edit', require('./admin/article-edit'));
// 文章发布路由
admin.post('/article-add', require('./admin/article-add'));
// 文章修改路由
admin.post('/article-modify', require('./admin/article-modify'));
// 文章删除路由
admin.get('/article-delete', require('./admin/article-delete'));
// 暴露路由对象
module.exports = admin;