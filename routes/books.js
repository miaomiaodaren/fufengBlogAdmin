var express = require('express');
var router = express.Router();
var superagent = require('superagent');
require('superagent-charset')(superagent);  //手动指定编码功能
var cheerio = require('cheerio');
var async1 = require('async');
const path = require('path');
const request = require('request');
const fs = require('fs');


// var books = require('../models/books');
import { Books, BooksType } from '../models/books';
import anBooks from '../controller/books.js'

var id = 0; //计数器
var uid = 0;
//将Unicode转汉字
function reconvert(str) {
    str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
    });
    return str
}

async function fetchUrl(url, callback, id) {
    // try{
    //     let fetchU = await superagent.get(url).charset('gbk'), $ = cheerio.load(fetchU.text), content = reconvert($("#content").html());
    //     console.log('正在抓取的是', url);
    //     var obj = {
    //         id: id,
    //         err: 0,
    //         bookName: $('.footer_cont a').text(),
    //         title: $('.bookname h1').text(),
    //         content: content
    //     }
    //     callback(null, obj)
    // } catch(err) {
    //     console.info(err)
    // }
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
        console.info('第' + id + '章抓取成功！');
        callback(null, obj)
    })
}

router.get('/showbook', anBooks.getBookList);

//获取章节列表
router.post('/getZlist', function(req, res, next) {
    var id = req.body.id;
    console.info(req.body, 'wodetian');
    if(id) {
        Books.findOne({_id: id}, {"title": 1, "_id": 1, "author": 1, "jianjie": 1, "zview.title": 1, "zview.id": 1}).then(function(info) {
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
        Books.aggregate([
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
});

//用来存放下载下载的小说图片
const IMAGE_DIR = './public/images/cheerioimg', PATH_URL = 'http://www.zwdu.com';

function download_img(url, filename) {
    request({
        url: url,
        encoding: 'binary'
    }, function(error, resoponse, body) {
        fs.writeFile(IMAGE_DIR + '/'+ filename +'.jpg', body, 'binary', function(err) {
            console.info('图片下载完成');
        });
    })
}

//尝试写一套完整的小说爬虫方法
async function bookPc() {
    superagent.get(PATH_URL).charset('gbk').end((err, res) => {
        let $ = cheerio.load(res.text), reldata = [];
        for(let i = 1; i < $('.nav li').length; i++) {
            // console.info($('.nav li a').eq(i).attr('href'), $('.nav li a').eq(i).attr('href').replace(/\//g, ''));
            //参考了node的文档引用http://devdocs.io/node/path
            // console.info(path.posix.basename($('.content li a').eq(i).attr('href')));
            // reldata.push({title: $('.content li').eq(i).text(), introduce: $('.content li a').eq(i).attr('href').replace(/\//g, '')});
            reldata.push($('.nav li a').eq(i).attr('href').replace(/\//g, ''));


            //以下是用来添加类目的
            // let addBookType = new BooksType({
            //     title: $('.content li').eq(i).text(),
            //     introduce: $('.content li a').eq(i).attr('href').replace(/\//g, ''),
            // });
            // addBookType.save().then(function() {
            //     console.info('类目抓取成功！');
            //     BooksType.find({}, {"_id": 1}).then(res=> {
            //         console.info(res, '希望有好吧');
            //     })
            //     return
            // });
        }
        reldata.pop();
        if(reldata.length) {
            let bookbox = [];
            reldata.forEach(v => {
                superagent.get(PATH_URL + '/' + v + '/').charset('gbk').end((err, res)=> {
                    // if(err) {return next(err)};
                    let $2 = cheerio.load(res.text), sbookbox = $2('.r li');
                    if(sbookbox.length) {
                        // for(let i = 0; i < sbookbox.length; i++) {
                        //     console.info(sbookbox.eq(i).find('.author').text(), '333')
                        // }
                        sbookbox.each((v, n)=> {
                            var $$e = $2(n);
                            bookbox.push(PATH_URL + $$e.find('a').attr('href'))
                        });
                        // bookbox.map((v, n) => {
                        //     bookviewpc(v);
                        // })
                        async1.mapLimit(bookbox, 1, function(books, callback) {
                            bookviewpc(books, callback)
                        }, function(err, results) {
                            console.info('牛了，无级别!!!')
                        })
                    }
                })

            })
        }
        //尝试了批量插入
        // BooksType.insertMany(reldata);
        // BooksType.find({}).then(res => {
        //     console.info(res, 2222);
        // });
    })
}


async function bookviewpc(url, ncb) {
    try{
        let fb = await superagent.get(url).charset('gbk'), $ = cheerio.load(fb.text), 
            title = reconvert($('#info h1').html()),   //小说标题
            author = reconvert($('#info p').eq(0).html()),    //作者
            jianjie = reconvert($('#intro p').eq(0).html()),  //小说简介
            bookid = url.split('/')[4];
        download_img($('#fmimg img').attr('src'), bookid);
        var content = [];
        var urls = []; 
        $('#list dd').each(function(v, n) {
            var $element = $(n);
            var zhref = $element.find('a').attr('href');
            urls.push(PATH_URL + '/' + zhref);
        });
        Books.findOne({
            title: title
        }).then(function(userInfo) {
            if(!userInfo) {
                async1.mapLimit(urls, 5, function(url, callback) {
                    id++
                    fetchUrl(url, callback, id)
                }, function(err, results) {
                    var addbook = new Books({
                        title: title,
                        author: author,
                        jianjie: jianjie,
                        zview: results
                    });
                    addbook.save();
                    console.info('又吃一鸡！！！');
                    ncb(null, 'aa')
                })
            }
        })
    } catch(err) {
        console.info(err, 'woshierr');
    }
}
// bookPc();

//获取小说分类列表
router.get('/BookTypeList', anBooks.BookTypeList);
//删除小说分类列表
router.get('/delBookTypeList', anBooks.delBookTypeList);



router.get('/addBook', function(req, res, next) {
    superagent.get(url).charset('gbk').end(function(err, sres) {
        if(err) {
            return next(err)
        }
        var $ = cheerio.load(sres.text),
            title = reconvert($('#info h1').html()),   //小说标题
            author = reconvert($('#info p').eq(0).html()),    //作者
            jianjie = reconvert($('#intro p').eq(0).html()),  //小说简介
            bookid = url.split('/')[4];  
        download_img($('#fmimg img').attr('src'), bookid);
        var content = [];
        var urls = []; 
        $('#list dd').each(function(v, n) {
            var $element = $(n);
            var zhref = $element.find('a').attr('href');
            urls.push(PATH_URL + zhref);
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
        async1.mapLimit(urls, 5, function(url, callback) {
            id++
            fetchUrl(url, callback, id)
        }, function(err, results) {
            content.push(results);
            var addbook = new Books({
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


async function stfb() {
    try{
        let stfbs = await superagent.get('http://www.zwdu.com/quanben/').charset('gbk'), $ = cheerio.load(stfbs.text), $main = $('#main ul'), lenghts = $main.find('li').length;
        for(let i = 1; i < lenghts; i++) {
            let urls = $main.find('li').eq(i).find('.s2 a').attr('href');
            await fb(PATH_URL + urls)
        }
    } catch(err) {
        console.info(err);
    }
}

async function fb(url) {
    try{
        let fbs = await superagent.get(url).charset('gbk'), $ = cheerio.load(fbs.text), 
            title = reconvert($('#info h1').html()),   //小说标题
            author = reconvert($('#info p').eq(0).html()),    //作者
            jianjie = reconvert($('#intro p').eq(0).html()),  //小说简介
            types = $('.con_top a').eq(1).attr('href').split('/')[1],  //小说的类型
            bookid = url.split('/')[4];
        // download_img($('#fmimg img').attr('src'), bookid);
        var content = [];
        var urls = []; 
        $('#list dd').each(function(v, n) {
            var $element = $(n);
            var zhref = $element.find('a').attr('href');
            urls.push('http://www.zwdu.com' + zhref);
        });
        Books.findOne({
            title: title
        }).then(function(userInfo) {
            if(!userInfo) {
                async1.mapLimit(urls, 5, function(url, callback) {
                    id++
                    fetchUrl(url, callback, id)
                }, function(err, results) {
                    var addbook = new Books({
                        title: title,
                        author: author,
                        jianjie: jianjie,
                        zview: results,
                        img: bookid,
                        type: types
                    });
                    addbook.save();
                    console.info('又吃一鸡！！！');
                    // ncb(null, 'aa')
                })
            }
        })
    } catch(err) {
        console.info(err, 'woshierr');
    }
}

// stfb();

module.exports = router;
