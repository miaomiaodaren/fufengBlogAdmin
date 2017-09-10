var User = require('../models/user');
var superagent = require('superagent');

class Users{
    constructor() {
        this.name = 'fufeng'
    }
    async getweixintoken(req, res, next) {
	    if(req.query.code) {
	        const weixintoken = await superagent.get('https://api.weixin.qq.com/sns/oauth2/access_token').query('appid=wxe5dfd16048e8d9ae&secret=5519c4e7a5913c015971cff9359d5d61&code='+ req.query.code +'&grant_type=authorization_code');
	        const usertoken = JSON.parse(cnnodedata.text);
	        const userinfo = await superagent.get('https://api.weixin.qq.com/sns/userinfo').query('access_token='+ usertoken.access_token +'openid=' + usertoken.openid + 'lang=zh_CN');
	        console.info(userinfo);
	        
	    }
	    res.render('weixin', {title: 'woshifufeng', userinfos: userinfo || {} });
    }

}

export default new Users()