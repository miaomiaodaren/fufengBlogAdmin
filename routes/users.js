var express = require('express');
var router = express.Router();
var isUser = require('../models/user');

/* 返回统一格式 */
var resData = {};

router.use(function(req,res,next){
    responseData={
        code:0,
        message:''
    }
    next();
});

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/reginer', function(req, res, next) {
    res.render('login', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    res.render('login1', { title: 'Express' });
})

//用户注册
router.post('/Getlogin', function(req, res, next) {
    var username = req.body.name || req.query.name;
    var password = req.body.psw || req.query.psw;
    if(username == '' || password == '') {
        resData.code = 2;
        resData.message = '帐号密码不能为空'
        res.json(resData);
        return
    };
    isUser.findOne({
        name: username
    }).then(function(userInfo) {
        console.log(userInfo);
        if(userInfo) {
            resData.code = 2;
            resData.message = '用户已经存在'
            res.json(resData);
            return
        } else {
            var user = new isUser({
                name: username,
                psw: password,
            });
        }
        return user.save();
    }).then(function() {
        resData.code = 1;
        resData.message = '用户注册成功'
        res.json(resData);
        return
    })
});

//获取所有的用户列表
router.post('/GetAllUser', function(req, res, next) {
    isUser.find().then(function(DataInfo) {
        res.json(DataInfo);
        return
    })
});

//用户登录
router.post('/reginer', function(req, res, next) {
    var DataInfo = {};
    var username = req.body.name;
    var password = req.body.psw;
    if(username == '' || password == '') {
        DataInfo.code = 2;
        DataInfo.message = '帐号密码不能为空'
        res.json(DataInfo);
        return
    };
    isUser.findOne({
        name: username,
        psw: password,
    }).then(function(info) {
        console.log(info);
        if(!info) {
            DataInfo.code = 2;
            DataInfo.message = '帐号密码错误';
            res.json(DataInfo);
            return false
        }
        DataInfo.code = 1;
        DataInfo.userInfo = {
            _id: info._id,
            username: info.username
        },
        req.session.User = DataInfo.userInfo;
        DataInfo.message= '用户登录成功';
        res.json(DataInfo);
        return
    })
})

module.exports = router;
 