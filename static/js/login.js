define(function(){
	function Login(){}
	
	Login.prototype.init = function(option){
		this.user = option.user;
		this.psw = option.psw;
		var that = this;
		$.ajax({
			type:"POST",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"login",
				userID:this.user,
				password:this.psw
			},
//			dataType:"json"
		}).success(function(res){
			
			switch(parseInt(res)){
				case 0:
					$(".ere").html("用户不存在");break;
				case 2:
					$(".ere").html("密码错误");break;
				default:
					that.setCookie("user",that.user);
					history.back();
			}	
		})
	}
	Login.prototype.setCookie = function(key,value,day){
		if(!day) day = 0;
		var d = new Date();
		d.setDate(d.getDate()+day);
		document.cookie = key+"="+value+";expires="+d;
}
	return new Login();
})










