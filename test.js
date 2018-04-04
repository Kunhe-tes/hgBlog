/**
 * Create by Hg on 2017/12/14.
 * 应用程序的启动（入口）文件
 */

// 加载exprss模块
var express = require('express');
// 加载模板处理模块
var swig = require('swig');

// 创建app应用 => NodeJS Http.createServer();
var app = express();
//设置静态文件托管
//当用户访问的url以public开始，那么直接返回对应__dirname + '/public'下的文件
app.use('/public',express.static(__dirname + '/public'));

// 配置应用模板
// 定义当前模板使用的模板引擎
// 参数：1.模板引擎的名称，也为模板文件后缀；2.用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
// 定义模板存放目录，第一个参数必须是views，第二个是目录
app.set('views','./views');
// 注册所用的模板引擎，第一个参数必须为view engine，第二个参数与engine第一个参数对应
app.set('view engine', 'html');
// 在开发过程中，需要取消模板缓存
swig.setDefaults({ cache: false });

/**
 * 首页
 *  req   =>  request对象     请求
 *  res   =>  response对象    响应
 *  next  =>  下个执行的函数
 * */
app.get('/',function(req, res, next){       //根据请求路径来处理客户端发送的get请求
    //res.send('<h1>欢迎来到我的博客</h1>');

    /*
    * 读取views目录下的指定文件，解析并返回给客户端
    * 第一个参数：表示模板的文件，相当于views目录      views/index.html
    * 第二个：传递给模板使用的数据
    * */
    res.render('index')
});



//监听http请求
app.listen(8081);
