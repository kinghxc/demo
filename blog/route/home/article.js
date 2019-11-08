const {Article} = require('../../model/article');
// 引入评论集合
const {Comment} = require('../../model/comment');
module.exports = async(req, res) => {
    // 获取文章作者id
    const id = req.query.id;
    // 从数据库查询
    const article = await Article.findOne({_id: id}).populate('author');
    // 从数据库查询评论信息
    const comments = await Comment.find({aid: id}).populate('uid');
    res.render('home/article.art', {
        article,
        comments
    });
}