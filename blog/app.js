// 引入express框架
const express = require('express');
// 引入path模块
const path = require('path');
// 引入body-parser模块 用来处理post请求参数
const bodyParser = require('body-parser');
// 引入express-session
const session = require('express-session');
// 导入dateformat
const dateFormat = require('dateformat');
// 导入 art-tempalte
const template = require('art-template');
// 引入数据库
require('./model/connect');
// 创建服务器
const app = express();
// 处理请求参数post
app.use(bodyParser.urlencoded({extended: false}));
// 配置session
app.use(session({
    secret: 'secret key',
    saveUninitialized: false
    // cookie: {
    //     maxAge: 24 * 60 * 60 * 1000
    // }
}));
// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
// 告诉express框架模板默认后缀是什么
app.set('view engine', 'art');
// 当渲染后缀为art的模板时 所使用的模板框架是什么
app.engine('art', require('express-art-template'));
// 向模板内部导入dateformat方法
template.defaults.imports.dateformat = dateFormat;
// 开放静态资源
app.use(express.static(path.join(__dirname, 'public')));
// 引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');
// 请求拦截
app.use('/admin', require('./middleware/loginGuard'));
// 为路由对象绑定路径
app.use('/home', home);
app.use('/admin', admin);
// 中间件错误处理
app.use((err, req, res, next) => {
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != path) {
            params.push(attr + '=' + result[attr]);
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`);
});
// 监听端口 80
app.listen(80);
console.log('服务器已启动');