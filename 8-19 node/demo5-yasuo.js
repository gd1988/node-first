var fs=require("fs");
var zlib=require("zlib");
//压缩文件为gz格式
fs.createReadStream("fileduqu.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("fileduqu.txt.gz"));
   console.log("文件压缩完成")

 