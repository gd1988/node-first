//当前正在执行的脚本的文件名 绝对路径
console.log( __filename );
//当前执行脚本所在的目录
console.log( __dirname );

function print(){
	console.log("hello");
}
var t=setTimeout(print,1000);
clearTimeout(t);

/*function print1(){
	console.log("world");
}
setInterval(print1,1500);*/