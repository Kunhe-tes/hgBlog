/**
 * Create by Hg on 2017/12/18.
 */

var mongoose = require('mongoose');
var usersSchema = require('../schemas/user');

module.exports = mongoose.model('User',usersSchema);        //Mongoose会自动查找模型名称对应的复数版本。这里查找表名为users的表

