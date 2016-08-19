
//阻塞代码：文件读取完成之后，才执行完程序
/*var fs=require("fs");
var data=fs.readFileSync("fileduqu.txt");
console.log(data.toString());
console.log("文件读取结束");*/

//非阻塞代码：不需要等待文件读取完，可以在读取文件的同时执行接下来的代码
var fs=require("fs");
fs.readFile("fileduqu.txt",function(err,data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
});
console.log("文件读取结束！");

//文件读取完毕之后，部署服务器，把文本显示到页面中去
