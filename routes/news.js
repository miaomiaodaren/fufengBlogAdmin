var express = require('express');
var router = express.Router();
var news = require('../models/news');
var superagent = require('superagent');
var http = require('http');

import News from '../controller/news.js'
//显示新闻列表
router.get('/newslist', News.newslist);

//通过http模块使得node.js成为中间件，用来现实接口中间模块处理平台。
router.get('/aa', News.midapiware);

router.post('/search', News.serachnews);

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