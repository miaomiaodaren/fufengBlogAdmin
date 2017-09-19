var User = require('../models/user');
var superagent = require('superagent');
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
	async imgUploader(req, res, next) {
		// console.info(req.body, '33333');
	}

}

export default new Users()