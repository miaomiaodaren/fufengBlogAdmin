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

async function fetchUrl(url, callback, id, bookid) {
    try {
        let res = await superagent.get(url).charset('gbk'),
            $ = cheerio.load(res.text),
            content = reconvert($("#content").html());
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
        fs.writeFileSync(`${BOOKPATH}${bookid}/${id}.json`, JSON.stringify(obj), 'utf8');
        console.info('第' + id + '章生成成功！');
        callback(null, obj)
    } catch(err) {
        console.info(err)
    }
}

router.get('/showbook', anBooks.getBookList);

//获取章节列表
router.post('/getZlist', function(req, res, next) {
    var id = req.body.id;
    if(id) {
        Books.findOne({bookid: id}, {"title": 1, "author": 1, "jianjie": 1, "chapter.title": 1, "chapter.id": 1}).then(function(info) {
            res.json(info);
            return
        })
    }
})

//获取指定章内容
router.post('/showcontent', anBooks.GetContentById);

//删除指定说
router.post('/removebook', anBooks.RemoveBookById);

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
            console.info('图片下载成功');
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



//2018-2-12 之前项目是把整本小说内容都放在数据库中，在读取数据的时候，导致速度很慢，所以是打算构思，只把章节与书名一些小的放在数据库
//中，而内容这种以txt的文件格式存储。
//2018-2-24 新记, 由于只生成一个文件的话,不方便缓存，所以打算是写成一个章节一个文件，并且打算把最章节也保存到数据库中，方便拿到上一章，下一章
router.get('/newSaveBook', async function(req, res, next) {
    const newNovel = 'https://www.zwdu.com/book/19636/';
    try {
        const book_html = await superagent.get(newNovel).charset('gbk');
        let $ = cheerio.load(book_html.text),
            title = reconvert($('#info h1').html()),        //小说的标题
            // author = reconvert($('#info p').eq(0).split(':')[1]),       //小说的作者
            about = reconvert($('#intro').html()),
            chapter = $('#list dd');
        console.info(88, $('#info p').eq(0).html().split(':'));
    } catch(err) {
        console.info(err, '223');
    }
    
    res.json({code: 1, data: '我是傻逼'})
})


const BOOKPATH = './public/books/',
    BDEMOPATH = 'https://www.zwdu.com/book/19636/',
    MODE = '0777';  //创建文件的默认权限， 读写权限
async function newsaveBook(PATH) {
    id = 0;
    const newNovel = PATH;
    try {
        const book_html = await superagent.get(newNovel).charset('gbk');
        let $ = cheerio.load(book_html.text),
            title = reconvert($('#info h1').html()),        //小说的标题
            author = reconvert($('#info p').eq(0).html()).split('：')[1],       //小说的作者
            about = reconvert($('#intro').html()),
            types = $('.con_top a').eq(1).attr('href').split('/')[1],  //小说的类型
            bookid = newNovel.split('/')[4],     //小说的独有id
            chapter_href = [];
        //如果小说已经存在数据库中了，就直接返回
        Books.findOne({ bookid: bookid }).then(info => {
            if(info) return false
            $('#list dl dd').each(function(i, v) {
                // if(i > 10) return false
                //此处v返回的是node对象，需要用$再封装一次
                let n = {}, $chapter = $(v);
                n.src = 'http://www.zwdu.com' + $chapter.find('a').attr('href');        //章节地址
                n.title = $chapter.find('a').text();            //章节名称
                chapter_href.push(n)
            });
            //新建一个文件夹(此处使用了同步创建文件夹)  fs.exists是用来检测文件夹是否存在
            fs.exists(`${BOOKPATH}${bookid}`, (exists) => {
                if(!exists) {
                    fs.mkdirSync(`${BOOKPATH}${bookid}`, '0777');
                }
                //在文件夹已经生成成功之后，生成相应的小说封面图片
                // await download_img($('#fmimg img').attr('src'), bookid);
                //mapLimit 第三个参数是把第一个参数的每一项去执行，最后执行结果返回给第四个参数
                async1.mapLimit(chapter_href, 5, function(url, callback) {
                    id++
                    fetchUrl(url['src'], callback, id, bookid)
                }, function(err, results) {
                    let newBook = {
                        title: title,
                        author: author,
                        about: about,
                        chapter: results,
                        img: bookid,
                        type: types
                    };
                    //在写入的时候，由于有中文，要使用utf8格式，不然会出现乱码
                    //往已经存在的文件里追加内容 只需要 第三个参数 options.flag 设置为 'a' 时,就会变成追加内容
                    //在最后生成一个all，也就是全本的小说
                    fs.writeFile(`${BOOKPATH}${bookid}/all.json`, JSON.stringify(newBook), 'utf8', async function(err) {
                        if(!err) {
                            var addbook = new Books({
                                title: title,
                                author: author,
                                jianjie: about,
                                img: bookid + '.jpg', 
                                type: types,
                                bookid: bookid,
                                chapter: results,
                            });
                            await addbook.save();
                        }
                    });
                    console.info('又吃一鸡！！！');
                })
            });
        })
    } catch(err) {
        console.info(err, '223');
    }
}

// var iconv = require('iconv-lite'); 
// var JsonObj = JSON.parse(fs.readFileSync(BOOKPATH + '19636.json',  {encoding: 'utf8'}));
// var buf = new Buffer(JsonObj, 'binary');
// var str = iconv.decode(buf, 'GBK'); 
// console.info(JSON.stringify(JsonObj), 889);

// newsaveBook(BDEMOPATH);
// stfb();

module.exports = router;
