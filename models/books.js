var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var BookTitleSchema = new Schema({
    title : String,     //小说名字
    author : String,      //作者
    jianjie: String,    //简介
    addtime: String,    //更新时间
    zview: Array,     //章节标题 + 章节内容
    type: String,        //小说属于的类别
    img: String     //头像
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