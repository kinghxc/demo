// 引入express框架
const express = require('express');
// 创建路由对象
const home = express.Router();
// 为路由对象挂二级目录 文章列表路由
home.get('/', require('./home/index'));
// 文章内容路由
home.get('/article', require('./home/article'));
// 文章评论路由
home.post('/comment', require('./home/comment'));
// 退出路由
home.get('/logout', require('./admin/logout'));
// 暴露出路由对象
module.exports = home;