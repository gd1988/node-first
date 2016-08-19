var fs=require("fs");
//读取文件，要复制的内容 创建一个可读流
var readStream = fs.createReadStream("fileduqu.txt");
//目标文件,被复制的内容，先建立一个空的文本文档，然后把这个被复制的内容copy进去 创建一个可写流
var writeStream=fs.createWriteStream("filecopy.txt");
//读取可读流，并写入到可写流中
readStream.pipe(writeStream);
console.log("文件复制完毕！");