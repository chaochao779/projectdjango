define(function(){
	function Enter(){}
	
	Enter.prototype.init = function(){
		this.str = document.cookie;
		this.arr = this.str.split("; ");
		for(var i=0;i<this.arr.length;i++){
			if(this.arr[i].split("=")[0] == "user"){
				var bb = `Hi <a href="information.html">${this.arr[i].split("=")[1]}</a>
					欢迎来到速普商城!  <a href="login.html" class="out"> [退出]</a>
				`
				var cc = this.arr[i].split("=")[1];
				$(".wel").html(bb)
				$(".name").html(cc)
			}
		}
		return "";
	}
	//删除cookie
	Enter.prototype.removeCookie = function(){
		this.setCookie("user",1212,-1);
		var bb = `欢迎来到速普商城！ 请先[<a href="login.html"> 登录 </a>]
				`
				$(".wel").html(bb)
	}

	//设置cookie
	Enter.prototype.setCookie = function(key,value,day){
		if(!day) day = 0;
		var d = new Date();
		d.setDate(d.getDate()+day);
		document.cookie = key+"="+value+";expires="+d;
	}
	return new Enter;
})