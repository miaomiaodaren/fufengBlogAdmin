var express = require('express');
var router = express.Router();
var isUser = require('../models/user');

var http = require('http');
var captchapng = require('captchapng');
var fs = require('fs');

var crypto = require('crypto');
var superagent = require('superagent');

var multer  = require('multer');
var upload = multer({ dest: '../public/uploads/' });


// //在文件上传的时候需要使用的中间件, 可以使用req.files读取到数据信息
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();


import Users from '../controller/user.js'
import uploads from '../common/multerUtil';

/* 返回统一格式 */
var resData = {};

// router.use(function(req,res,next){
//     responseData={
//         code:0,
//         message:''
//     }
//     next();
// });

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
});
router.get('/weixin', Users.getweixintoken);

//图片上传尝试
router.post('/uploader', uploads.single('file'), Users.imgUploader);

//用户注册(同时兼容GET/POST二种接口)
router.all('/UserReginer', Users.reginer);

//删除指定用户
router.post('/RemoveUser', Users.removeUser);

//获取图形验证码
router.get('/GetImgCode', function(req, res, next) {
    var codes = parseInt(Math.random()*9000+1000);
    var p = new captchapng(80, 30, codes); // width,height,numeric captcha
    // res.cookie('imgcode', codes, { maxAge: 900000, httpOnly: true, domain: 'localhost:8388'});
    res.cookie('imgcode', codes, { maxAge: 900000, httpOnly: true});
    console.log(codes, '222');
    console.info(req.cookies.imgcode, '3333');
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
});

//用户登录
router.post('/reginer', function(req, res, next) {
    var DataInfo = {};
    var username = req.body.name || req.query.name;
    var password = req.body.psw || req.query.psw;
    var imgcode = req.body.imgcode || req.query.imgcode;
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
        if(!info) {
            DataInfo.code = 2;
            DataInfo.message = '帐号密码错误';
            res.json(DataInfo);
            return false
        }
        if(req.cookies.imgcode !== imgcode) {
            DataInfo.message = '验证码错误！'
            DataInfo.code = 2;
            DataInfo.message = '验证码错误'
            res.json(DataInfo);
            return
        }
        DataInfo.code = 1;
        DataInfo.userInfo = {
            _id: info._id,
            username: info.name
        },
        // req.session.User = DataInfo.userInfo;
        DataInfo.message= '用户登录成功';
        res.json(DataInfo);
        return
    })
});


// router.all('/Getlogin', function(req, res, next) {
//     var param = '';
//     console.log(req.body);
//     if(req.method == 'POST') {
//         param = req.body;
//     } else {
//         param = req.query || req.params;
//     }
//     var username = param.name;
//     var password = param.psw;
//     if(username == '' || password == '') {
//         resData.code = 2;
//         resData.message = '帐号密码不能为空'
//         res.json(resData);
//         return
//     };
//     console.log(req.cookies); console.log('3333');

//     if(req.cookies.imgcode !== req.body.imgcode) {
//         resData.message = '验证码错误！'
//         resData.code = 2;
//         resData.message = '验证码错误'
//         res.json(resData);
//         return
//     }
    
//     isUser.findOne({
//         name: username
//     }).then(function(userInfo) {
//         console.log(userInfo);
//         if(userInfo) {
//             resData.code = 2;
//             resData.message = '用户已经存在'
//             res.json(resData);
//             return
//         } else {
//             var user = new isUser({
//                 name: username,
//                 psw: password,
//             });
//         }
//         return user.save();
//     }).then(function() {
//         resData.code = 1;
//         resData.message = '用户注册成功'
//         res.json(resData);
//         return
//     })
// });

//获取所有的用户列表 sort -1为倒序, 1为正序
router.all('/GetAllUser', Users.GetUsers);


//更新用户数据
router.post('/UpdateUser', function(req, res, next) {
    var DataInfo = {};
    var id = req.body._id;
    console.log(id); console.log(req.body.psw);
    if(id) {
        isUser.findOne({
            _id : id
        }).then(function(info) {
            if(!info) {
                DataInfo.code = 2;
                DataInfo.message = "用户不存在";
                res.json(DataInfo)
                return
            }
            isUser.update({
                _id: id
            }, {
                $set: {
                    psw: req.body.psw
                }
            },
            { upsert: true }, function(err, result) {
                if(err) {
                    DataInfo.code = 2;
                    DataInfo.message = "更新失败";
                } else {
                    DataInfo.code = 1;
                    DataInfo.message = "用户更新成功";
                }
                res.json(DataInfo)
                return
            })
        })
    } else {
        DataInfo.code = 2;
        DataInfo.message = '参数不能为空'
        res.json(DataInfo);
        return
    }

})

module.exports = router;
 