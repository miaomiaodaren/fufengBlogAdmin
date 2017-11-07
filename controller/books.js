// var books = require('../models/books');
import { Books, BooksType } from '../models/books';
var superagent = require('superagent');
const ObjectID = require('mongodb').ObjectID;  

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

    //根据章节的id获取小说内容
    async GetContentById(req, res, next) {
        try{
            const ids = req.body.id;
            const vids = req.body._id;
            if(ids && vids) {
                let infos = await Books.aggregate([
                    {$unwind: "$zview"},  //$unwind：将数组元素拆分为独立字段
                    {$match: { _id: ObjectID(vids), "zview.id": parseInt(ids)}},      //不转换成类型会出错   滤波操作，筛选符合条件文档，作为下一阶段的输入
                    {$project: {_id: 1, "zview": 1}}  //$project 数据投影，主要用于重命名、增加和删除字段  http://www.cnblogs.com/shanyou/p/3494854.html
                    // $limit:  限制经过管道的文档数量   $skip: 从待操作集合开始的位置跳过文档的数目 $group 对数据进行分组  $sort : 对文档按照指定字段排序
                ]);
                res.json(infos);
                return
                // Books.find({_id: vids}, {"zview.$": 1, _id: 1})
                    // .then(function(info) {
                    // console.info(info, '123123123');
                    // res.json(info)
                    // return
                // }).catch(function(err) {
                //     console.log(err)
                // })
            }
        } catch(err) {
            res.json(err)
        }
    }

}

export default new anBooks()