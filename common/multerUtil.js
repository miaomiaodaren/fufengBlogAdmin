// var muletr = require('multer');
// var storage = muletr.diskStorage({
//     destinaton: function(req, file, cb) {
//         cb(null, '../public/uploads')
//     },
//     filename: function(req, file, cb) {
//         var fileFormat = (file.originalname).split(".");
//         cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
//     }
// });

// export var upload = multer({
//     storage: storage,
//     // limits: {}
// })