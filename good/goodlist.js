//实现与mysql交互
var mysql=require('mysql');
var $conf=require('../conf/db.js');
var $util=require('../util/util.js');
var $sql=require('./goodsql.js');
//使用连接池
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
	//提交信息
	labelsubmit: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param =  req.body || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.labelsubmit, [param.imagename, param.X,param.Y,param.Width,param.Height, param.Cartype,param.Colr], function(err, result) {
				if(err){
					console.log(err);
				}
				jsonWrite(res, result);
				// 释放连接 
				connection.release();
			});
		});
	},
	
	//显示数据库下一张
	labelnext:function (req, res, next) {
		var param = req.query ||req.params;
        var imagename = param.imagename; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.labelnext, imagename, function(err, result) {
				if(err){
				console.log(err);
				}else{
					console.log(result);
				}
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
	//预览
	labelbrowser: function (req, res, next) {
		var param = req.query ||req.params;
        var imagename = param.imagename; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.labelbrowser, imagename, function(err, result) {
				if(err){
				console.log(err);
				}else{
					console.log(result);
				}
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
	//取消上一个
	labeldelete: function (req, res, next) {
		var param = req.query ||req.params;
        var imagename = param.imagename; 
		pool.getConnection(function(err, connection) {
			connection.query($sql.labeldelete, imagename,function(err, result) {
				if(err){
				console.log(err);
				}else{
					console.log(result);
				}
				jsonWrite(res, result);
				connection.release();
			});
			});
    },
	//删除本imagename所有数据
	labelcancel: function (req, res, next) {
		var param = req.query ||req.params;
        var imagename = param.imagename; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.labelcancel, imagename, function(err, result) {
				if(err){
				console.log(err);
				}else{
					console.log(result);
				}
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
};