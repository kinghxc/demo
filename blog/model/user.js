// 引入mongoose
const mongoose = require('mongoose');
// 引入bcrypt
const bcrypt = require('bcrypt');
// 引入Joi
const Joi = require('joi');
// 创建集合规则
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // 保证邮箱唯一性
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        // admin 超级管理员
        // normal 普通用户
        type: String,
        required: true
    },
    state: {
        // 0 启用状态
        // 1 禁用状态
        type: String,
        default: 0
    }
});
// 创建集合
const User = mongoose.model('User', userSchema);
// 创建验证规则 并验证
const validateUser = user => {
    // 创建验证规则
    const schema = {
        userName: Joi.string().min(2).max(20).required().error(new Error('请输入2-20位用户名')),
        email: Joi.string().email().required().error(new Error('输入邮箱不符合规则')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,20}/).required().error(new Error('请输入3-20位大小写字母或数字')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色不符合规则')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态不符合规则'))
    }
    // 实施验证
   return Joi.validate(user, schema);
}
// async function createUser() {
//     // 生成盐
//     const salt = await bcrypt.genSalt(10);
//     // 给明文密码加密
//     const pass = await bcrypt.hash('123', salt);
//     const user = await User.create({
//         userName: '张三',
//         email: 'zhangsan@qq.com',
//         password: pass,
//         role: 'admin',
//         state: 0
//     });
// };
// createUser();
// 将用户集合作为模块成员进行导出 采用对象的形式 可导出多个成员
module.exports = {
    // 在es6中 键 与 值 相同 简写 User: User
    User,
    validateUser
}