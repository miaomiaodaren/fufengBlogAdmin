//用来项目分类，类似js,css,html,正则等等，把项目的一些推荐放上去。
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var TypeInfoSchema = new Schema({
    name : String,
    sorts : {
        type: Number,
        default: 0
    },
});

module.exports = mongodb.mongoose.model("TypeInfo", TypeInfoSchema);