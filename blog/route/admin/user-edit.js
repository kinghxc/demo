const {User}= require('../../model/user');
module.exports = async(req, res) => {
    req.app.locals.currentLink = 'use';
    const {message, id} = req.query;
    // 判断是添加路由还是修改路由
    if (id) {
        // 修改路由
        let user = await User.findOne({_id: id});
        // 渲染模板
        res.render('admin/user-edit', {
            message,
            user,
            link: '/admin/user-modify?id=' + id,
            button: '修改'
        })
    } else {
        // 添加路由
        res.render('admin/user-edit', {
            message,
            link: '/admin/user-edit',
            button: '添加'
        });
    }
}