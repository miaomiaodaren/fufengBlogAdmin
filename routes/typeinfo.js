var express = require('express');
var router = express.Router();
var typeinfo = require('../models/typeinfo');

router.get('/GetTypes', function(req, res, next) {
    typeinfo.find().then(function(info) {
        res.json(info);
        return
    })
});

router.post('/addTypes', function(req, res, next) {
    var datainfo = {};
    var name = req.body.name;
    var sort = req.body.sort || 0;
    if(!name) {
        datainfo.code = 2;
        datainfo.message = '请输入类别名';
        res.json(datainfo);
        return
    }
    typeinfo.findOne({
        name: name
    }).then(function(info) {
        if(info) {
            datainfo.code = 2;
            datainfo.message = '该类别已经存在！';
            res.json(datainfo);
            return
        };
        var type = new typeinfo({
            name: name,
            sorts: sort,
        });
        return type.save()
    }).then(function() {
        datainfo.code = 1;
        datainfo.message = '添加成功！';
        res.json(datainfo);
        return
    })
})

module.exports = router;