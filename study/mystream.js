var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('file/input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log('receiving data..........')
    data += chunk;
    console.log('data building end')
});

readerStream.on('end',function(){
    console.log(data);
    console.log('dataend');
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");