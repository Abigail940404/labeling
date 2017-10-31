var express = require('express');
var router = express.Router();
//关联主程序
var goodlist = require('../good/goodlist.js');
var ergodic = require('./ergodic.js');
var path = require('path');

/* GET home page. */
//进入主页面信息
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html') );
});

//提交
router.post('/label_submit',function(req,res,next){
	console.log("提交！！！");
	goodlist.labelsubmit(req,res,next);
});

//显示数据库下一张
router.get('/label_next',function(req,res,next){
	goodlist.labelnext(req,res,next);
});

//预览
router.get('/label_browser',function(req,res,next){
	goodlist.labelbrowser(req,res,next);
});

//删除上一个
router.get('/label_delete',function(req,res,next){
	console.log("取消！！！");	
	goodlist.labeldelete(req,res,next);
});

//删除本imagename所有
router.get('/label_cancel',function(req,res,next){
	goodlist.labelcancel(req,res,next);
});

//本地images文件夹遍历
router.get('/label_unlable',function(req,res,next){
	ergodic.labelunlable(req,res,next);
});

module.exports = router;
