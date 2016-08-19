var fs=require("fs");
var zlib=require("zlib");
fs.createReadStream("fileduqu.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("fileduqu.txt"));

console.log("文件解压完成");