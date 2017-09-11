var news = require('../models/news');
var superagent = require('superagent');

class News {
	constructor() {

	}
	async newslist(req, res, next) {
		console.info('22222');
		const nlist = await news.find().sort({_id: -1});
		res.json(nlist);
	}
	async midapiware(req, res, next) {
		const cnnodedata = await superagent.get('https://cnodejs.org/api/v1/topics').query('page=1&tab=ask&limit=5&mdrender=false');
		res.send(JSON.parse(cnnodedata.text));
	}
}

export default new News()