var good={
	//提交
	labelsubmit: 'INSERT INTO `user` (`imagename`, `X`, `Y`,`Width`,`Height`,`Cartype`,`Colr`) VALUES(?,?,?,?,?,?,?)',
	//浏览
	labelbrowser: 'select * from user where imagename=?',
	//取消
	labeldelete: 'delete from user where imagename=? order by id desc limit 1 ',
	//撤销
	labelcancel: 'delete from user where imagename=?',
	//下一张
	labelnext:'select * from user where imagename<>?'
}

module.exports=good;