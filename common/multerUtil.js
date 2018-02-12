const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    //设置上传文件路径, uploads文件夹会自生成
    destination: function(req, file, cb) {
        console.info(path.resolve(__dirname, '../public/uploads'), 99, cb);
        cb(null, path.resolve(__dirname, '../public/uploads'))
    },
    //给上传文件重命名，获取添加后辍名
    filename: function(req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});

export const uploads = multer({
    storage: storage,
    // limits: {}
})