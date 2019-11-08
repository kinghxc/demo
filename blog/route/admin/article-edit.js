const {Article} = require('../../model/article');
module.exports = async(req, res) => {
    req.app.locals.currentLink = 'article';
    // 判断是文章添加路由还是文章修改路由
    const {id} = req.query;
    // res.send(id);
    if (id) {
        // 文章修改路由
        let article = await Article.findOne({_id: id}).populate('author');
        res.render('admin/article-edit', {
            article: article,
            link: '/admin/article-modify?id='+ id,
            button: '修改'
        })
    }else {
        // 文章添加luyou
         res.render('admin/article-edit.art', {
             link: '/admin/article-add',
             button: '提交'
         });
    }
   
}