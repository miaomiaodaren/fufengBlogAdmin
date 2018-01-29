var news = require('../models/news');
var superagent = require('superagent');

class News {
	constructor() {

	}
	async newslist(req, res, next) {
		const params = req.method == 'POST' ? req.body : req.query, pagelimit = 10;
		let count, dateInfo = {}, skip;
		if(params.page) {
			skip = params.page ? 10 * Number(params.page - 1) : 0;    //skip 是指要跳过的条数，也就是第1页的话不用跳过前面的
			delete params.page;
		}
		// {$or: [{title: {$regex: s_value, $options: "$i"}}, {content: {$regex: s_value, $options: "$i"}}] }
		//如果没有加try catct 第一个ajax请求如果失败了，第二个不会触发，只有加了，第一个失败的时候，第二个还是触发
		try {
			count = await news.find({}).count();
		} catch(err) {
			res.json(err)
			return
		}
		const nlist = await news.find({...params}).sort({_id: -1}).limit(pagelimit).skip(skip);
		dateInfo['count'] = count;  dateInfo['information'] = nlist; dateInfo['page'] = req.body.page || 1;
		res.json(dateInfo);
	}

	//删除博客消息
	async delNews(req, res, next) {
		const _id = req.body._id || req.query._id;
		if(_id) {
			const info = await news.remove({'_id': _id});
			if(info) {
				res.json({code: 1, msg: '消息删除成功'});
			}
		} else {
			res.json({msg: '缺少必要参数'});
		}
	}
	// async midapiware(req, res, next) {
	// 	//曾经报过json格式的错误,所以要一定使用bodyParser.json()  https://kaifa.huaqiaobao.cn/manageApi/userType
	// 	// const cnnodedata = await superagent.get('https://cnodejs.org/api/v1/topics').query('page=1&tab=ask&limit=5&mdrender=false');
	// 	const cnnodedata = await superagent.post('http://api.ppwhale.com/Classes/Live/Controller/Live_Error_Release.ashx')
	// 		.send({"userId": 346, "houseId": 14, "show_status": 2, "time": Date.parse(new Date())/1000});

	// 	// superagent.post('http://api.ppwhale.com/Classes/Live/Controller/Live_Error_Release.ashx')
	// 	// .send({userId:346, houseId: 14, show_status:2, time: Date.parse(new Date())/1000})
	// 	// .set('Content-Type', 'application/json')
	// 	// .end(function(rv){
	// 	// 	console.info(rv, '数据插入成功');
	// 	// 	res.send(rv);
	// 	// })
	// 	console.info(cnnodedata, 3333);
	// 	res.send(cnnodedata.text);
	// 	// res.send(JSON.parse(cnnodedata.text));
	// }
	midapiware(req, res, next) {
		return superagent.post('http://api.ppwhale.com/Classes/Live/Controller/Live_Error_Release.ashx')
		.send({userId:346, houseId: 14, show_status:2, time: Date.parse(new Date())/1000})
		.set('Content-Type', 'application/json')
		.end(function(err, rv){
			console.info(rv.text)
		})
	}
	async serachnews(req, res, next) {
		let datainfo = {};
		const s_value = req.body.value;
		if(!s_value) {
			datainfo.code = 1;
			datainfo.information = [];
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
		var addtime = new Date();
		var _id = req.body._id || void 0;
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
		if(_id) {
			const info = await news.update({'_id': _id}, {$set: {'title': title, 'type': type, 'content': content, 'addtime': addtime}});
	    	if(info) {
		        res.json({
		        	status: 1,
					type: 'SUCCESS_ADD_NEWS',
					message: '添加新闻成功'
		        });
		        return
		    } else {
		    	res.json({
		        	status: 2,
					type: 'ERROR_ADD_NEWS',
					message: '添加新闻失败'
		        });
		    }
		} else {
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
}

export default new News()