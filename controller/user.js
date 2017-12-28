import { request } from 'http';


var User = require('../models/user');
var superagent = require('superagent');
var fs = require('fs');


// import muilter from '../common/multerUtil';

class Users{
    constructor() {
        this.name = 'fufeng'
    }
    async getweixintoken(req, res, next) {
	    if(req.query.code) {
	    	console.info(req.query.code, '我是code')
	        const weixintoken = await superagent.get('https://api.weixin.qq.com/sns/oauth2/access_token').query('appid=wxe5dfd16048e8d9ae&secret=5519c4e7a5913c015971cff9359d5d61&code='+ req.query.code +'&grant_type=authorization_code');
	        const usertoken = JSON.parse(weixintoken.text);
	        console.info(usertoken, '我是token');
	        const token = usertoken.access_token;
	        const userinfo = await superagent.get('https://api.weixin.qq.com/sns/userinfo').query('access_token='+ usertoken.access_token +'openid=' + usertoken.openid + 'lang=zh_CN');
	        console.info(userinfo.text, '我是得到的用户信息');
	        console.info('我要发送修改消息模板了！');
	        const gethy = await superagent.get('https://api.weixin.qq.com/cgi-bin/template/get_industry').query('access_token=' + token);
	        console.info(gethy.text, '我是行业');
	    }
	    res.render('weixin', {title: 'woshifufeng'});
	}











	//初版用户头像上传，效果实现
	async imgUploader(req, res, next) {
		res.json({image: req.file.path});
		// res.json({data: 'success'});
	}

	//删除用户
	async removeUser(req, res, next) {
		var DataInfo = {};
	    var id = req.body.id;
	    if(id) {
	        User.findOne({
	            _id : id
	        }).then(function(info) {
	            if(!info) {
	                DataInfo.code = 2;
	                DataInfo.message = '该用户不存在';
	                res.json(DataInfo);
	                return
	            }
	            return User.remove({
	                _id: id
	            })
	        }).then(function(){
	            DataInfo.code = 1;
	            DataInfo.message = "用户删除成功";
	            res.json(DataInfo)
	            return
	        });
	    } else {
	        DataInfo.code = 2;
	        DataInfo.message = '参数不能为空'
	        res.json(DataInfo);
	        return
	    }
	}


	//用户注册
	async reginer(req, res, next) {
		const resData = {};
		var param = '';
	    if(req.method == 'POST') {
	        param = req.body;
	    } else {
	        param = req.query || req.params;
	    }
	    var username = param.name;
	    var password = param.psw;
	    if(username == '' || password == '') {
	        resData.code = 2;
	        resData.message = '帐号密码不能为空'
	        res.json(resData);
	        return
	    };
	    // console.log(req.cookies); console.log('3333');

	    // if(req.cookies.imgcode !== req.body.imgcode) {
	    //     resData.message = '验证码错误！'
	    //     resData.code = 2;
	    //     resData.message = '验证码错误'
	    //     res.json(resData);
	    //     return
	    // }
	    const userInfo = await User.findOne({name: username});
	    if(userInfo) {
    	 	resData.code = 2;
            resData.message = '用户已经存在'
            res.json(resData);
            return
	    }
    	const user = new User({
            name: username,
            psw: password,
            isAdmin: req.body.isAdmin
        });
	    const addsuccer = await user.save();
	    if(addsuccer) {
	    	resData.code = 1;
	        resData.message = '用户注册成功'
	        res.json(resData);
	        return
	    }
	}

}

export default new Users()