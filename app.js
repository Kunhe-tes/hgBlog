/**
 * Create by Hg on 2017/12/14.
 * 应用程序的启动（入口）文件
 */

// 加载exprss模块
var express = require('express');
// 加载模板处理模块
var swig = require('swig');
// 加载数据库模块
var mongoose = require('mongoose');
// 加载body-parser，用来处理post提交过来的数据
var bodyParser = require('body-parser');
// 加载cookies模块
var Cookies = require('cookies');
var User = require('./models/User');
// 创建app应用 => NodeJS Http.createServer();
var app = express();
//设置静态文件托管
//当用户访问的url以public开始，那么直接返回对应__dirname + '/public'下的文件
app.use('/public',express.static(__dirname + '/public'));
// bodyparser设置
app.use( bodyParser.urlencoded({extended: true}) );

//设置cookie
app.use( function(req, res, next){
    req.cookies = new Cookies(req, res);
    //解析登录用户cookie信息
    req.userInfo = {};
    if(req.cookies.get('userInfo')){
        try{
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));
            //获取当前登录用户角色信息
            User.findById(req.userInfo._id).then(function(userInfo){
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            });
        }catch (e){
            next();
        }
    }else{
        next();
    }
});

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

/*
* 根据不同的功能划分模块
* */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

//解决mongoose已经不在内置实现promise，需要添加第三方promise插件的问题（主要针对的是mongoose4.4版本以上，否则会有警告）
mongoose.Promise = global.Promise;  
//连接数据库，请使用自己的服务器，替换掉下述用户名（username），密码（password），服务器地址（host），端口（port），数据库名（database）
mongoose.connect('mongodb://username:password@host:port/database',{useMongoClient: true},function(err){
    if(err){
        console.log(err);
    }else{
        console.log('数据库连接成功');
        //监听http请求
        app.listen(8081);
    }
});
