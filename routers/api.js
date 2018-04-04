/**
 * Create by Hg on 2017/12/18.
 */

var express = require('express');
var router = express.Router();
var User = require('../models/User');

//统一返回格式
var responseData;
router.use(function(req, res, next){
    responseData = {
        code: 0,
        message: ''
    };
    next();
});
/**
 * 注册
 * */
router.post('/user/register',function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    var repwd = req.body.repwd;
    var userphone = req.body.userphone;
    if( username == '' || password == '' || repwd == '' || userphone == ''){
        responseData.code = 1;
        responseData.message = '输入信息不能为空';
    }else if( password != repwd){
        responseData.code = 2;
        responseData.message = '两次输入密码不一致';
    }else{
        //用户名查重
        User.findOne({
            username: username
        }).then(function(userInfo){
            if(userInfo){
                responseData.code = 3;
                responseData.message = '该用户名已被注册';
                res.json(responseData);
                return;
            }
            //插入注册信息到数据库
            var user = new User({
                username: username,
                password: password,
                userphone: userphone
            });
            return user.save();
        }).then(function(newUserInfo){
            //若需注册后直接登录，则在注册成功后，自动保存用户信息，并跳转到主页即可
            /*req.cookies.set('userInfo',JSON.stringify({
                _id: newUserInfo._id,
                username: newUserInfo.username
            }));*/
            responseData.code = 200;
            responseData.message = '注册成功';
            res.json(responseData);
            //window.location.href = 'index';
        });
    }
});
/**
 * 登录
 * */
router.post('/user/login',function(req, res, next){
    var uName = req.body.username;
    var pwd = req.body.password;
    if( uName == '' || pwd == ''){
        responseData.code = 1;
        responseData.message = '用户名或密码输入错误';
    }else{
        User.findOne({
            username: uName,
            password: pwd
        }).then(function(userInfo){
            if(!userInfo){
                responseData.code = 2;
                responseData.message = '用户名或密码错误';
                res.json(responseData);
                return;
            }
            responseData.code = 200;
            responseData.message = '登录成功';
            responseData.userInfo = {
                _id: userInfo._id,
                username: userInfo.username
            };
            req.cookies.set('userInfo',JSON.stringify({
                _id: userInfo._id,
                username: userInfo.username
            }));
            res.json(responseData);
            return;
        });
    }
});
/**
*  退出
* */
router.get('/user/logout',function(req, res){
    req.cookies.set('userInfo',null);
    responseData.code = 200;
    responseData.message = '退出成功';
    res.json(responseData);
});


module.exports = router;