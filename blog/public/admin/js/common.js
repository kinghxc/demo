function serializeToJson(form) {
    var result = {};
    // 获取表单提交的内容 es6 数组元素是对象
    // [{name: 'email', value: '用户输入的内容'}]
    var f = form.serializeArray();
    // 遍历数组
    f.forEach(element => {
        result[element.name] = element.value;
    });
    return result;
}