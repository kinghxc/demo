// 导入Article集合
const {Article} = require('../../model/article');
// 引入分页模块
const pagination = require('mongoose-sex-page');
module.exports = async(req, res) => {
    // 获取page
    const page = req.query.page;
    // 查询数据库
    let article  = await pagination(Article).page(page).size(4).display(4).find().populate('author').exec();
    // res.send(article);
    res.render('home/default.art', {
        article
    });
}