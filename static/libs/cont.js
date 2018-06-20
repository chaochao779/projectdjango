 //随机颜色
function randomColor(){
	var r = Math.round(Math.random()*255).toString(16);
	var g = Math.round(Math.random()*255).toString(16);
	var b = Math.round(Math.random()*255).toString(16);
	return "#"+zero(r)+zero(g)+zero(b);
}
//格式化日期
function formatDate(){
	var d = new Date()
	var year = d.getFullYear()
	var month = d.getMonth()
	var date = d.getDate()
	var day = d.getDay()
	var h = d.getHours()
	var m = d.getMinutes()
	var s = d.getSeconds()
	switch(day){
		case 0:day = "周日";break;
		case 1:day = "周一";break;
		case 2:day = "周二";break;
		case 3:day = "周三";break;
		case 4:day = "周四";break;
		case 5:day = "周五";break;
		case 6:day = "周六";break;
	}
	var str = year + "年" + zero(month+1) + "月" + zero(date) + "日" + day + " " + zero(h) + ":" + zero(m) + ":" + zero(s);
	return str;
}

//十位补零
function zero(n){
	if(n.length<2 || n<10 && n>=0){
		return "0"+n;
	}else{
		return n;
	}
}

//计算两个日期之间的差值
//我只能接受一个数组，数组中有三个数据，顺序为年月日，要求必须为符合规则的数字
function getDateNum(date){
	var nowd = new Date();
	var nowTime = nowd.getTime();
	
	var oldd = new Date();
	oldd.setFullYear(date[0])
	oldd.setMonth(date[1])
	oldd.setDate(date[2])
	var oldTime = oldd.getTime();
	
	return Math.abs(oldTime - nowTime)/1000/60/60/24;
}

//获取非行内样式
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{  
		return getComputedStyle(ele,false)[attr]
	}
}

//阻止事件冒泡
function stopBubble(eve){
	if(eve.stopPropagation){
		eve.stopPropagation()
	}else{
		eve.cancelBubble = true;
	}
}

//阻止默认事件
function stopDft(eve){
	if(eve.preventDefault){
		eve.preventDefault();
	}else{
		eve.returnValue = false;
	}
}

//事件监听函数
function addEvent(ele,eveName,callback){
	if(ele.addEventListener){
		ele.addEventListener(eveName,callback)
	}else if(ele.attachEvent){
		ele.attachEvent("on"+eveName,callback)
	}else{
		ele["on" + eveName] = callback;
	}
}
//删除事件监听函数
function removeEvent(ele,eveName,callback){
	if(ele.removeEventListener){
		ele.removeEventListener(eveName,callback)
	}else if(ele.detachEvent){
		ele.detachEvent("on"+eveName,callback)
	}else{
		ele["on"+eveName] = null;
	}
}


//删除cookie
function removeCookie(key){
	setCookie(key,1212,-1);
}

//设置cookie
function setCookie(key,value,day){
	if(!day) day = 0;
	var d = new Date();
	d.setDate(d.getDate()+day);
	document.cookie = key+"="+value+";expires="+d;
}

//获取cookie
function getCookie(msg){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i=0;i<arr.length;i++){
		if(arr[i].split("=")[0] == msg){
			return arr[i].split("=")[1];
		}
	}
	return "";
}

//事件委托函数
function eventEntru(arr,fn){
	return function (eve){
		var e = eve || window.event;
		var src = e.target || e.srcElement;
		for(var i=0;i<arr.length;i++){
			if(src == arr[i]){
				fn.bind(src)()
			}
		}
	}
}

