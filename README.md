# labeling

一个简单的标注系统，可以将标注的图片和位置甚至其他属性保存到数据库中……just like LabelMe~

1、根据代码自己写个数据库，数据库名nodesample，表名：user
数据库的Column name为：
`id`, `imagename`, `X`, `Y`,`Width`,`Height`,`Cartype`,`Colr`
2、直接run：npm start就能使用了！

3、目前在chrome下面是可以的，在edge下面还有一点bug

4、最好自己重新建一遍，才能更好适配自己的需求！

/bin: 用于应用启动

/public: 静态资源目录

/routes：可以认为是controller（控制器）目录

/views: 我这里实际只使用了index.html

app.js 程序main文件

通过localhost:8090就可以访问了
---------------------------------------------------------------------
