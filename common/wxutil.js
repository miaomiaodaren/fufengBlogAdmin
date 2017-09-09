var crypto = require('crypto'),
	utils = {};

//微信签名认证中间件
utils.sign = function(config) {
	return function(req, res, next) {
		config = config || {};
		var q = req.query,
			token = config.wechat.token,
			signature = q.signature,
			nonce = q.nonce,
			timestamp = q.timestamp,
			echostr = q.echostr;
		var str = [token, timestamp, nonce].sort().join('');
	    const hashCode = crypto.createHash('sha1');
    	var resultCode = hashCode.update(str, 'utf8').digest('hex');
    	if(req.method == 'GET') {
    		if(resultCode === signature) {
    			res.send(echostr)
    		} else {
    			res.send('err')
    		}
    	} else if(req.method == 'POST') {
    		if(resultCode != signature) {
    			return
    		}
    		next();
    	}
}

module.exports = utils;