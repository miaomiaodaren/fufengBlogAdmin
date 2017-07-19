var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var UserSchema = new Schema({
    name : String,
    psw : [String, Number],
    isAdmin: {
        type: Boolean,
        default: false
    }
});


module.exports = mongodb.mongoose.model("User", UserSchema);