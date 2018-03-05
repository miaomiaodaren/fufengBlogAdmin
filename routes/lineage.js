var express = require('express');
var router = express.Router();
var { LineAge } = require('../models/weblineage');

//根据分类名获取这个属性的参数
router.all('/addlineage', async function(req, res, next) {
    var title = req.body.title || req.query.title,
        grammar = req.body.grammar || req.query.grammar,
        explain = req.body.explain || req.query.explain,
        sample = req.body.sample || req.query.sample,
        thetype = req.body.thetype || req.query.thetype;
    if(!title) {
        res.json({status: 0, type: 'ERROR_ADD_LINEAGE', message: '标题不能为空'})
        return false
    }
    var info;
    try {
        var hasData = await LineAge.find({"title": title});
        if(hasData.length) {
            info = await LineAge.update({"title": title}, {$set: { 'title': title, 'grammar': grammar, 'explain': explain, 'sample': sample, 'thetype': thetype }})
        } else {
            var add_linage = new LineAge({
                title: title,
                grammar: grammar,
                explain: explain,
                sample: sample,
                thetype: thetype,
            });
            info = await add_linage.save();
        }
    } catch(err) {
        res.json({status: 0, type: 'ERROR_ADD_LINEAGE', message: '参数有误'})
        return false
    }
    if(info) {
        res.json({status: 1, type: 'SUCCESS_ADD_LINEAGE', message: '类型添加成功'})
        return false
    }
    // var add_linage = new LineAge({
    //     title: title,
    //     grammar: grammar,
    //     explain: explain,
    //     sample: sample,
    //     thetype: thetype,
    // });
    // add_linage.save();
    // res.json({status: 0, type: 'ERROR_ADD_LINEAGE', message: '参数有误'})
});

router.get('/getlineage', async function(req, res, next) {
    var title = req.query.title;
    if(!title) { res.json({status: 0, type: 'ERROR_FIND_LINEAGE', message: '参数不能为空'}) }
    var info;
    try {
        info = await LineAge.find({'title': title});
        res.json({status: 1, type: 'SUCCESS_FIND_LINEAGE', message: '类型查找成功', data: info})
    } catch(err) {
        res.json({status: 0, type: 'ERROR_FIND_LINEAGE', message: '参数有误'})
    }
})


module.exports = router;