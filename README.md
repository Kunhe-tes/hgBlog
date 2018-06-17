
# hgBlog
### a simple blog system based on Node.js

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


###########Deploy Steps

- install NodeJS and complete the environment variables configs

- install dependent files
```
    npm i
``` 
- modify the app.js, which is just for example.Use your personal server, username and password, as follows.
``` node
    mongoose.connect('mongodb://username:password@host:port/database',{useMongoClient: true},function(err){
        if(err){
            console.log(err);
        }else{
            console.log('succeed');
            //监听http请求
            app.listen(8081);
        }
    });
```

- run it
```
    node app
```
    
- when it dones, knock as follows.
```
    localhost:8080
```
