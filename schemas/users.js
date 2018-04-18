/**
 * Create by Hg on 2017/12/18.
 */

var mongoose = require('mongoose');

//用户的表结构
module.exports = new mongoose.Schema({
    username: String,
    password: String,
    userphone: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});
