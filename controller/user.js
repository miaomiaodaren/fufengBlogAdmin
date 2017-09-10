var User = require('../models/user');

class Users{
    constructor() {
        this.name = 'fufeng'
    }
    async getweixintoken(req, res, next) {
	    if(req.query.code) {
	        const weixintoken = await superagent.get('https://api.weixin.qq.com/sns/oauth2/access_token').query('appid=wxe5dfd16048e8d9ae&secret=5519c4e7a5913c015971cff9359d5d61&code='+ req.query.code +'&grant_type=authorization_code');
	        console.info(weixintoken);
	    }
	    res.render('weixin', {title: 'woshifufeng'});
    }

}

export default new Users()