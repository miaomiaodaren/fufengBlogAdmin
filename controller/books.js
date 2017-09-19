// var books = require('../models/books');
import { Books, BooksType } from '../models/books';
var superagent = require('superagent');

class anBooks {
    constructor() {

    }
    //显示所有的小说数据
    async getBookList(req, res, next) {
        try {
            let booklist = await Books.find({}, {"title": 1, "_id": 1});
            if(booklist) {
                res.json(booklist);
                return
            }
        } catch(err) {
            console.info(err, '444');
            res.json(err)
        }
    }
    //显示分类列表
    async BookTypeList(req, res, next) {
        try {
            let TypeList = await BooksType.find({});
            if(TypeList) {
                res.json(TypeList);
                return
            }
        } catch(err) {
            res.json(err)
        }
    }
    //删除分类列表
    async delBookTypeList(req, res, next) {
        try {
            await BooksType.remove({}).then(res=> {
                console.info('数据删除成功');
            })
        } catch(err) {
            res.json(err)
        }
    }

}

export default new anBooks()