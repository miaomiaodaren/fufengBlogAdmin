var express = require('express');
var router = express.Router();
var news = require('../models/news');
var superagent = require('superagent');
var http = require('http');

import News from '../controller/news.js'
//显示新闻列表
router.all('/newslist', News.newslist);

//通过http模块使得node.js成为中间件，用来现实接口中间模块处理平台。
router.get('/aa', News.midapiware);

router.post('/search', News.serachnews);

//添加新闻
router.post('/addNews', News.addNews);

module.exports = router;