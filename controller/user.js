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

	//获取用户信息
	async GetUsers(req, res, next) {
		let DataInfo = {},
			_id = req.body._id || req.query._id,
			isAdmin = req.body.isAdmin || req.query.isAdmin,
			name = req.body.name || req.query.name,
			//在后台传入的参数中进行了一次赛选,把有值的参数进行重组。同时支持GET/POST
			params = {};
		['_id', 'isAdmin', 'name'].map(v => {
			eval(v) ? params[v] = eval(v) : '';
		});
		const count = await User.find(params).count();
		if(count) {
			const info = await User.find(params).sort({_id: -1});
		 	DataInfo.total = count || 0;
            DataInfo.data = info;
            res.json(DataInfo);
            return
		} else {
			DataInfo.total = count || 0;
            DataInfo.data = [];
            res.json(DataInfo);
            return
		}
	    // User.find({}).count().then(count => {
	    //     isUser.find().sort({_id: -1}).then(function(info) {
	    //         DataInfo.total = count || 0;
	    //         DataInfo.data = info;
	    //         res.json(DataInfo);
	    //         return
	    //     })
	    // })
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
		const resData = {},
			param = req.method == 'POST' ? req.body : req.query || req.params,
			username = param.name, 
			password = param.psw,
			method = param.method || '',
			_id = param._id || '',
			isAdmin = param.isAdmin || false;
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
	    //如果method传入了upadte则是更新用户
	    if(method) {
	    	const userInfo = await User.findOne({'_id': _id});
	    	if(!userInfo) {
	    		resData.code = 2;
	            resData.message = '用户不存在'
	            res.json(resData);
	            return
	    	}
	    	const info = await User.update({'_id': _id}, {$set: {'name': username, 'psw': password, 'isAdmin': isAdmin}});
	    	if(info) {
		    	resData.code = 1;
		        resData.message = '用户更新成功'
		        res.json(info);
		        return
		    }
	    } else {
	    	const userInfo = await User.findOne({'name': username});
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

}

export default new Users()