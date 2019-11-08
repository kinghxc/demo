module.exports = async(req, res, next) => {
    // 引入数据库集合
    const {User, validateUser} = require('../../model/user');
    // 引入bcrypt进行加密
    const bcrypt = require('bcrypt');
    try {
       await validateUser(req.body);
    }catch(e) {
        // 重定向
        // return res.redirect('/admin/user-edit?message=' + e.message);
        // JSON.stringify 把对象类型转换为字符串类型
        return next(JSON.stringify({path: '/admin/user-edit', message: e.message}));
    }
    // 如果验证通过 判断注册用户邮箱在数据库是否唯一
    const user = await User.findOne({email: req.body.email});
    // 有过邮箱已被占用
    if (user) {
        // return res.redirect(`/admin/user-edit?message=邮箱地址已被占用`);
        return next(JSON.stringify({path: '/admin/user-edit', message: '邮箱地址已被占用'}))
    }
    // 邮箱没被占用 对密码进行加密
    // 生成盐
    const salt = await bcrypt.genSalt(10);
    // 加密密码
    const password = await bcrypt.hash(req.body.password, salt);
    // 替换密码
    req.body.password = password;
    await User.create(req.body);
    res.redirect('/admin/user');
}