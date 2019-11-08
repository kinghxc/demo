const {Article} = require('../../model/article');
module.exports = async(req, res) => {
    // 接收客户端的数据
    // res.send(req.query.id);
    await Article.findOneAndDelete({_id: req.query.id});
    // 重定位
    res.redirect('/admin/article');
}