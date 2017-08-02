var express = require('express');
var router = express.Router();
var superagent = require('superagent');
require('superagent-charset')(superagent);  //手动指定编码功能
var cheerio = require('cheerio');
var books = require('../models/books');
var async = require('async');


var id = 0 //计数器
//将Unicode转汉字
function reconvert(str) {
    str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
    });
    return str
}

function fetchUrl(url, callback, id) {
    superagent.get(url).charset('gbk').end(function(err, res) {
        var $ = cheerio.load(res.text);
        var content = reconvert($("#content").html());
        //分析结构后分割html
        // const arr = []
        // const contentArr = content.split('<br><br>')
        // contentArr.forEach(elem => {
        //     const data = trim(elem.toString())
        //     arr.push(data)
        // })
        console.log('正在抓取的是', url);
        var obj = {
            id: id,
            err: 0,
            bookName: $('.footer_cont a').text(),
            title: $('.bookname h1').text(),
            content: content
        }
        callback(null, obj)
    })
}


router.get('/showbook', function(req, res, next) {
    books.find({}, {"title": 1, "_id": 1}).then(function(info) {
        res.json(info);
        return
    }).catch(function(err) {
        console.log(err);
    })
});

//获取章节列表
router.post('/getZlist', function(req, res, next) {
    var id = req.body.id;
    if(id) {
        books.findOne({_id: id}, {"title": 1, "_id": 1, "author": 1, "jianjie": 1, "zview.title": 1, "zview.id": 1}).then(function(info) {
            res.json(info);
            return
        })
    }
})

//获取指定章内容
router.post('/showcontent', function(req, res, next) {
    var ids = req.body.id;
    var _ids = req.body._id;
    if(ids && _ids) {
        books.aggregate([
            {$unwind: "$zview"},
            {$match: {"zview.id": parseInt(ids)}},      //不转换成类型会出错
            {$project: {_id: _ids, "zview": 1}}
        ])
        // books.find({'zview.id': ids}, {"zview.$": 1, _id: '59814025e51a2412b49d1aa0'})
            .then(function(info) {
            res.json(info)
            return
        }).catch(function(err) {
            console.log(err)
        })
    }
})

router.get('/deleteBook', function(req, res, next) {
    books.remove({}).then(function() {
        res.send({'code': 1})
        return
    })
})

router.get('/addBook', function(req, res, next) {
    superagent.get('http://www.zwdu.com/book/8634/').charset('gbk').end(function(err, sres) {
        if(err) {
            return next(err)
        }
        var $ = cheerio.load(sres.text);
        var title = reconvert($('#info h1').html());   //小说标题
        var author = reconvert($('#info p').eq(0).html());    //作者
        var jianjie = reconvert($('#intro p').eq(0).html());  //小说简介
        var content = [];
        var urls = [];
        $('#list dd').each(function(v, n) {
            var $element = $(n);
            var zhref = $element.find('a').attr('href');
            urls.push('http://www.zwdu.com/' + zhref);
            // var sb = {};
            // sb.id = v;
            // sb.title = reconvert($element.text());
            // var zhref = $element.find('a').attr('href');
            // superagent.get('http://www.zwdu.com/' + zhref).charset('gbk').end(function(aas, aab) {
            //     if(aas) {return next(aas)}
            //     var $2 = cheerio.load(aab.text);
            //     sb.zcon = reconvert($2('#content').html());
            // })
        });
        //使用async 控制并发抓包
        async.mapLimit(urls, 5, function(url, callback) {
            id++
            fetchUrl(url, callback, id)
        }, function(err, results) {
            // content.push(results);
            var addbook = new books({
                title: title,
                author: author,
                jianjie: jianjie,
                zview: results
            });
            addbook.save().then(function() {
                res.send({code: 1, data: '上传成功'})
                return
            })
        })
    })
})

module.exports = router;
