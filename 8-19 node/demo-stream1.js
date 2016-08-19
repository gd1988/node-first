var fs=require("fs");
var data="hello world";
var writerStream=fs.createWriteStream("output.txt");
writerStream.write(data,"UTF8");
//标记文件末尾
writerStream.end();
//处理流事件
writerStream.on("finish",function(){
	console.log("写入完成");
});
writerStream.on("error",function(err){
	console.log(err.stack);
});
console.log("程序执行完毕");