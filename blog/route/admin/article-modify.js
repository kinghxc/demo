const {Article} = require('../../model/article');
// 引入文件表单参数解析模块
const formidable = require('formidable');
const path = require('path');
// 创建文件解析对象
const form = new formidable.IncomingForm();
// 设置文件上传路径
form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
// 配置文件带后缀
form.keepExtensions = true;
module.exports = async(req, res) => {
    // 接收get请求的id参数
    const {id} = req.query;
    // 接收表单修改以后的参数
    form.parse(req, async(req, fields, flies) => {
        let article = await Article.findOne({_id: id});
        await Article.updateOne({_id: id}, {
        title: fields.title,
        cover: flies.cover.path.split('public')[1],
        publishDate: fields.publishDate,
        content: fields.content
    });
    res.redirect('/admin/article');
    })
    // console.log(body);
    // // 根据id在数据库查询用户
    // let article = await Article.findOne({_id: id});
    // await Article.updateOne({_id: id}, {
    //     title: body.title,
    //     cover: body.cover,
    //     publishDate: body.publishDate,
    //     content: body.content
    // });
    // res.redirect('/admin/article');
}