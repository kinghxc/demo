const {User} = require('../../model/user');
module.exports = async(req, res) => {
    req.app.locals.currentLink = 'use';
    // 接收客户端传送过来的页数
    let page = req.query.page || 1;
    // 设定每也最多显示的条数
    let pageSize = 10;
    // 查询数据库的总共用户数量
    let count = await User.countDocuments({});
    // 在客户端显示的页数
    let totle = Math.ceil(count / pageSize);
    // 设置页面开始的数据
    let start = (page - 1) * pageSize;
    // 从数据库查询所有数据 limit(10) 限制每页查询条数 skip() 每页开始的那一条
    let users = await User.find({}).limit(pageSize).skip(start);
    res.render('admin/user', {
        users: users,
        totle: totle,
        page: page
    });
}