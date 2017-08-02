var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var BookTitleSchema = new Schema({
    title : String,     //小说名字
    author : String,      //作者
    jianjie: String,    //简介
    addtime: String,    //更新时间
    zview: Array      //章节标题 + 章节内容
});

// module.exports = mongodb.mongoose.model("News", BookTitleSchema);
module.exports = mongodb.mongoose.model("Books", BookTitleSchema);