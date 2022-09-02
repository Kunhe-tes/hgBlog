
# hgBlog
### A simple blog system based on Node Express

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
