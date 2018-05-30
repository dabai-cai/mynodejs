//同步
var fs = require("fs");

var data = fs.readFileSync('/file/input.txt');



console.log(data.toString());
console.log("程序执行结束!");

//异步回调
var fs = require("fs");
fs.readFile('',function (err,data) {
   if(err)
       return console.error(err);
   console.log(data.toString());
});


fs.readFile('file/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");