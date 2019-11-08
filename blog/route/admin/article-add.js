// 引入formidable 第三方模块
const formidable = require('formidable');
const path = require('path');
const {Article} = require('../../model/article');
module.exports = (req, res) => {
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2. 配置文件上传位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    console.log(form.uploadDir);
    // 保留文件上传后缀
    form.keepExtensions = true;
    // 解析表单
    form.parse(req, async(err, fields, files) => {
        // err 错误对象
        // fields 普通表单数据 对象类型
        // files 文件表单数据 对象类型
      await Article.create({
           title: fields.title,
           author: fields.author,
           publishDate: fields.publishDate,
           cover: files.cover.path.split('public')[1],
           content: fields.content
       });
       res.redirect('/admin/article');
    });
}