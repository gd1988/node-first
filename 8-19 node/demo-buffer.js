var buf=new Buffer(26);
len=buf.write("hello权志龙rrrrr","utf-8");
console.log("写入字节数:"+len);

for(var i=0;i<26;i++){
	buf[i]=i+97;
}
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",0,7));
console.log(buf.toString("utf-8",0,7));
console.log(buf.toString(undefined,0,7));

var buf1=new Buffer("hello权志龙");
var json=buf1.toJSON(buf1);
console.log(json);

var buffer1=new Buffer("权志龙");
var buffer2=new Buffer("bigbang");
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容:"+buffer3.toString())