module.exports =  (req, res) => {
    // 删除session
     req.session.destroy(function () {
         // 清除cookie
        res.clearCookie('connect.sid');
          // 清除模板中的userInfo对象
          req.app.locals.userInfo = null;
        // 重定位
        res.redirect('/admin/login');
      
    })
 }