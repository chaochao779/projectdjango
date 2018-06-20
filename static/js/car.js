define(function(){
	function Car(){
		this.nim = document.getElementsByClassName("num")[0];
		this.price = document.getElementsByClassName("price")[0];
	}
	//添加
	Car.prototype.add = function(eve){
		this.e = eve;
		if(this.e.target.nodeName == "EM"){
			var index = this.e.target.parentNode.getAttribute("data-id");
//			console.log(index)
			if(!this.getCookie(index)){
				this.setCookie(index,index);
				if(!this.getCookie("num")){
					this.setCookie("num",1);
				}else{
					var num1 = this.getCookie("num");
					num1++;
					this.setCookie("num",num1);
					
				}
				
				this.nim.innerHTML = this.getCookie("num");
			}else{
				alert("已经在购物车里啦!")
			}
			
		}
	}
	//删除
	Car.prototype.reduce = function(eve){
		this.e = eve;
		if(this.e.target.nodeName == "EM"){
			var index = this.e.target.parentNode.getAttribute("data-id");
			this.removeCookie(index);
			this.e.target.parentNode.remove();
			var num1 = this.getCookie("num");
			num1--;
			this.setCookie("num",num1);
			this.blockcar();
			if(this.getCookie("num") == 0){
				var str3 = `<div class="no">
								<p>您的购物车是空的,继续去购物吧</p>
								<a href="detail.html">继续购物></a>
							</div>`
				$(".mycar_load").html(str3);
			}
		}
	}
	//显示数量
	Car.prototype.blockcar = function(){
		if(this.getCookie("num")){
			if(this.nim){
				this.nim.innerHTML = this.getCookie("num");
			}
		}
		this.money = 0;
		this.st = document.cookie;
		this.ar = this.st.split("; ");
		
		
		for(var i=0;i<this.ar.length;i++){
			for(var j=0;j<json2.length;j++){
				if(this.ar[i].split("=")[0] == json2[j].goodsId){
					this.money += parseInt(json2[j].price.substring(1));
				}
			}
		}
//		console.log(this.money)
		if(this.price){
			this.price.innerHTML = this.money;
		}
		
	}
	//登陆判断
	Car.prototype.overcar = function(){
		if(this.getCookie("user")){
			window.location.href = "car.html";
		}else{
			window.location.href = "login.html";
		}
	}
	//设置cookie
	Car.prototype.setCookie = function(key,value,day){
		if(!day) day = 0;
		var d = new Date();
		d.setDate(d.getDate()+day);
		document.cookie = key+"="+value+";expires="+d;
	}
	
	//删除cookie
	Car.prototype.removeCookie = function(key){
		this.setCookie(key,1212,-1);
	}
	//获取cookie
	Car.prototype.getCookie = function(msg){
		this.str = document.cookie;
		this.arr = this.str.split("; ");
		for(var i=0;i<this.arr.length;i++){
			if(this.arr[i].split("=")[0] == msg){
				return this.arr[i].split("=")[1];
			}
		}
		return "";
	}

	return new Car;
})
