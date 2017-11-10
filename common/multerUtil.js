const muletr = require('multer');

let storage = muletr.diskStorage({
    //设置上传文件路径, uploads文件夹会自生成
    destinaton: function(req, file, cb) {
        cb(null, './public/uploads')
    },
    //给上传文件重命名，获取添加后辍名
    filename: function(req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});

export default muletr({
    storage: storage,
    dest: './public/uploads'
    // limits: {}
})