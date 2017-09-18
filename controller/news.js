var news = require('../models/news');
var superagent = require('superagent');

class News {
	constructor() {

	}
	async newslist(req, res, next) {
		let params = req.method == 'POST' ? req.body : req.query;
		console.info(params, 'nishishabi');
		const nlist = await news.find(params).sort({_id: -1});
		res.json(nlist);
	}
	async midapiware(req, res, next) {
		const cnnodedata = await superagent.get('https://cnodejs.org/api/v1/topics').query('page=1&tab=ask&limit=5&mdrender=false');
		res.send(JSON.parse(cnnodedata.text));
	}
	async serachnews(req, res, next) {
		let datainfo = {};
		const s_value = req.body.value;
		if(!s_value) {
			datainfo.code = 1;
			datainfo.information = '';
			res.json(datainfo);
			return
		}
		const searchjg = await news.find({$or: [{title: {$regex: s_value, $options: "$i"}}, {content: {$regex: s_value, $options: "$i"}}] });
		res.json(searchjg);
	}
}

export default new News()