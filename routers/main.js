/**
 * Create by Hg on 2017/12/18.
 */


var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
    console.log(req.userInfo);
    res.render('main/index',{
        userInfo: req.userInfo
    });
});
router.get('/register',function(req, res, next){
    res.render('main/register');
});
router.get('/login',function(req, res, next){
    res.render('main/login')
});

module.exports = router;
