var mysql = require('mysql');

var TEST_DATABASE = 'mysql'; //连接的数据库名
var TEST_TABLE = 'user';//连接的表名

//创建连接
var client = mysql.createConnection({
    user: 'hjr', //用户名
    password: 'asd456++', //数据库密码
});