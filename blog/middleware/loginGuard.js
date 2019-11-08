const guard = (req, res, next) => {
    // 判断用户是否登陆
    if (req.url != '/login' && !req.session.userName) {
        res.redirect('/admin/login');
    } else {
        // 判读用户是否是超级管理员
        if (req.session.role == 'normal') {
            return res.redirect('/home/');
        }
        next();
    }
};
module.exports = guard;