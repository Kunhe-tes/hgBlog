
# hgBlog
### a blog system based on Node.js

The directory structure, as follows.

```directory

├── db                      数据库存储目录
├── models                  数据库模型文件目录
├── public                  公共文件目录（css、js、image...）
├── routers                 路由文件目录
├── schemas                 数据库结构文件目录
├── views                   模板视图文件目录
├── app.js                  应用启动入口文件

```


###########部署步骤

1. 安装Node并配置运行环境

2. 安装配置文件  

    npm i
3. 修改app.js文件，使用个人的服务器地址、用户名和密码，格式如下（端口等均可自由配置）
``` node
mongoose.connect('mongodb://username:password@host:port/database',{useMongoClient: true},function(err){
    if(err){
        console.log(err);
    }else{
        console.log('数据库连接成功');
        //监听http请求
        app.listen(8081);
    }
});
```

4. 运行app.js文件

    若编辑器为webstorm，打开app.js文件，点击右键选择"Run app.js"即可
5. 打开项目

    运行成功后，根据所配置的端口（示例为8080），在浏览器输入localhost:8080，即可打开

