var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
//2018-2-23新增 去掉了章节的字段，改为从json文件读取
var BookTitleSchema = new Schema({
    title : String,     //小说名字
    author : String,      //作者
    jianjie: String,    //简介
    addtime: String,    //更新时间
    type: String,        //小说属于的类别
    img: String,     //头像
    bookid: Number,     //bookid
    chapter: Array,     //章节列表
});

var BookType = new Schema({
    title: String,      //类别名称
    introduce: String   //类别简介
})

// module.exports = mongodb.mongoose.model("News", BookTitleSchema);
// module.exports = mongodb.mongoose.model("Books", BookTitleSchema);
// module.exports = mongodb.mongoose.model('BookType', BookType);

export const Books = mongodb.mongoose.model("Books", BookTitleSchema);
export const BooksType = mongodb.mongoose.model('BookType', BookType);


//如果new Scheme({xx},  { collection: 'user'}) 不带第二个参数，他会在后面加一个s, 比如这个会生成成books, 所以要带上第二个参数