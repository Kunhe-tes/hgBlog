
# hgBlog
### A simple blog system based on Node Express

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

- Install the [Node.js](https://nodejs.org/zh-cn) and then complete the environment variables configs.

- Install dependent files
```
    npm install
``` 
- If you want to use your own database online, change the app.js, as follows.
``` node
    mongoose.connect('mongodb://username:password@host:port/database',{useMongoClient: true},function(err){
        if(err){
            console.log(err);
        }else{
            console.log('succeed');
            app.listen(8081);
        }
    });
```

- Run it
```
    node app
```
