// 引入User集合
const {User} = require('../../model/user');
// 引入bcrypt
const bcrypt = require('bcrypt');
module.exports = async(req, res) => {
    // 接收请求参数
    const {email, password} = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', {
            msg: '邮箱密码错误'
        });
    }
    let user = await User.findOne({email: email});
    if (user) {
        let isCompare = await bcrypt.compare(password, user.password);
        // 密码比对成功
        if (isCompare) {
            req.session.userName = user.userName;
            // 将用户对象的角色存储在session中
            req.session.role = user.role;
            // 把查询到的对象设置到app的locals属性下 req中有app的属性不需要引入app
            req.app.locals.userInfo = user;
            if (user.role == 'admin') {
                // express框架的重定向
                res.redirect('/admin/user');
            } else {
                // 定位到博客页面
                res.redirect('/home/');
            }
         
        } else {
            res.status(400).render('admin/error', {
                msg: '密码错误'
            });
        }
    } else {
        res.status(400).render('admin/error', {
            msg: '邮箱错误'
        })
    }
}