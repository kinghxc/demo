const {Article} = require('../../model/article');
const pagination = require('mongoose-sex-page');
module.exports = async(req, res) => {
    // 接收客户端的页码
    let page = req.query.page;
    console.log(page);
    req.app.locals.currentLink = 'article';
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
    console.log( articles);
    res.render('admin/article.art', {
        articles
    });
}