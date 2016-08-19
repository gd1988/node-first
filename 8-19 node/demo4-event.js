/*//引用events模块
var events=require("events");
//创建eventEmitter对象
var eventEmitter=new events.EventEmitter();
//绑定事件及事件的处理程序
eventEmitter.on("eventName",eventHandler);
//触发事件
eventEmitter.emit("eventName");*/

var events=require("events");
var eventEmitter=new events.EventEmitter();
//创建事件处理程序
var connectHandler=function connected(){
	console.log("连接成功");
	//触发data_received事件
	eventEmitter.emit("data_received");
}
//绑定connection事件处理程序
eventEmitter.on("connection",connectHandler);
//使用匿名函数绑定data_received事件
eventEmitter.on("data_received",function(){
	console.log("数据接收成功");
});
//触发connection事件
eventEmitter.emit("connection");
console.log("程序执行完毕");


eventEmitter.on("some_event",function(){
	console.log("some_event事件触发");
});
setTimeout(function(){
	eventEmitter.emit("some_event");
},1000);


eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener1",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.emit("someEvent","arg1参数","arg2参数");