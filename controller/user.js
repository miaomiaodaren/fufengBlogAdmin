var User = require('../models/user');
var superagent = require('superagent');

class Users{
    constructor() {
        this.name = 'fufeng'
    }
    getweixintoken(req, res, next) {
    	console.log('222222');
	    if(req.query.code) {
	    	console.info(req.query.code, '我是code')
	        const weixintoken = await superagent.get('https://api.weixin.qq.com/sns/oauth2/access_token').query('appid=wxe5dfd16048e8d9ae&secret=5519c4e7a5913c015971cff9359d5d61&code='+ req.query.code +'&grant_type=authorization_code');
	        const usertoken = JSON.parse(weixintoken.text);
	        console.info(usertoken, '我是token');
	        const userinfo = await superagent.get('https://api.weixin.qq.com/sns/userinfo').query('access_token='+ usertoken.access_token +'openid=' + usertoken.openid + 'lang=zh_CN');
	        console.info(userinfo, '我是得到的用户信息');
	    }
	    res.render('weixin', {title: 'woshifufeng'});
    }

}

export default new Users()