//前端天堂之css篇代码
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var webLineAge = new Schema({
    title: String,          //字段名称
    grammar: String,        //语法
    explain: String,        //说明
    sample: String,         //示例
    thetype: String,        //所属分类名
})
export const LineAge = mongodb.mongoose.model("lineage", webLineAge);

