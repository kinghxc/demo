const {User} = require('../../model/user');
const bcrypt = require('bcrypt')
module.exports = async(req, res, next) => {
    // 接收客户端post的请求参数
    const body = req.body;
    // 获取get请求要修改用户的id 
    const id = req.query.id;
    // 根据id在数据库查询用户
    let user = await User.findOne({_id: id});
    // 因为密码不能在修改与页面修改 所以进行密码比对
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (isValid) {
        // 密码比对成功 可以修改
        // 更新数据库
        await User.updateOne({_id: id}, {
            userName: body.userName,
            email: body.email,
            role: body.role,
            state: body.state
        });
        // 重定向到列表页面
        res.redirect('/admin/user');
    } else {
        // 密码比对失败 不可修改
        let obj = {path: '/admin/user-edit', message: '密码比对错误,不能进行修改', id: id};
        next(JSON.stringify(obj));
    }

}