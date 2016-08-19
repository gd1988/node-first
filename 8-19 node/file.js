var fs=require("fs");
/*fs.stat("\project\8-19 node\fileduqu.txt",function(err,stats){
	console.log(stats);
	//console.log(stats.isFile());
})*/

//写入
console.log("准备写入文件");
fs.writeFile("fileduqu.txt","权志龙",function(err){
	if(err){
		return console.error(err);
	}
	console.log("数据写入成功");
	console.log("----------------");
	console.log("读取写入的数据");
	fs.readFile("fileduqu.txt",function(err,data){
		if(err){
			return console.error(err);
		}
		console.log("异步读取文件数据:"+data.toString());
	})
})