var http=require("http");
var fs=require("fs");

http.createServer(function(request,response){
	//创建一个可读流
	fs.readFile(__dirname+"/data.jpg",function(err,data){
		response.end(data);
	})
}).listen(8082);
console.log("Server running at http://192.168.1.113:8082/")
