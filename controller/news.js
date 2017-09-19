var news = require('../models/news');
var superagent = require('superagent');

class News {
	constructor() {

	}
	async newslist(req, res, next) {
		let params = req.method == 'POST' ? req.body : req.query;
		const skip = params.page ? 10 * Number(params.page - 1) : 0;
		const nlist = await news.find({}).sort({_id: -1}).limit(10).skip(skip);
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
	async addNews(req, res, next) {
		var title = req.body.title;
		var type = req.body.type;
		var content = req.body.content;
		console.info(content);
		var addtime = new Date();
		if(!title) {
			res.json({
				status: 0,
				type: 'ERROR_ADD_NEWS',
				message: '标题不能为空'
			});
			return
		}
		if(!type) {
			res.json({
				status: 0,
				type: 'ERROR_ADD_NEWS',
				message: '类别不能为空'
			});
			return
		}
		if(!content) {
			res.json({
				status: 0,
				type: 'ERROR_ADD_NEWS',
				message: '内容不能为空'
			});
			return
		}
		var addnew = new news({
			title: title,
			type: type,
			content: content,
			addtime: addtime
		});
		//使用try catch 可以有效监控数据是否出错
		try {
			await addnew.save();
			res.json({
				status: 1,
				message: '新闻发布成功'
			});
		} catch(err) {
			res.json({
				status: 0,
				type: 'ERROR_ADD_NEWS',
				message: '添加新闻失败'
			});
			return
		};
	}
}

export default new News()