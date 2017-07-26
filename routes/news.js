var express = require('express');
var router = express.Router();
var news = require('../models/news');

//显示新闻列表
router.get('/newslist', function(req, res, next) {
    news.find().sort({_id: -1}).then(function(info) {
        res.json(info);
        return
    })
})
//添加新闻
router.post('/addNews', function(req, res, next) {
    var datainfo = {};
    var title = req.body.title;
    var type = req.body.type;
    var content = req.body.content;
    var addtime = new Date();
    if(!title) {
        datainfo.code = 2;
        datainfo.message = '标题不能为空';
        res.json(datainfo);
        return
    }
    if(!type) {
        datainfo.code = 2;
        datainfo.message = '类别不能为空';
        res.json(datainfo);
        return
    }
    if(!content) {
        datainfo.code = 2;
        datainfo.message = '内容不能为空';
        res.json(datainfo);
        return
    }
    var addnew = new news({
        title: title,
        type: type,
        content: content,
        addtime: addtime
    });
    addnew.save().then(function() {
        datainfo.code = 1;
        datainfo.message = '新闻发布成功';
        res.json(datainfo);
        return
    })
})

module.exports = router;