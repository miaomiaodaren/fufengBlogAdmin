var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var NewsSchema = new Schema({
    title : String,
    type : String,
    content: String,
    addtime: String,
});
module.exports = mongodb.mongoose.model("News", NewsSchema);