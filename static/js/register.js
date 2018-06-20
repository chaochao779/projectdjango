define(function(){
	function Register(){}
	
	Register.prototype.init = function(option){
		this.user = option.user;
		this.psw1 = option.psw1;
		this.psw2 = option.psw2;
		var onoff = 0;
		var use_rem= /(^0{0,1}(13[0-9]|15[0-9]|18[7-9])[0-9]{8}$)|(^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$)/
		if(use_rem.test(this.user)){
			$("#user2").css({border:"none",
			backgroundPosition:"14px -110px"})
			onoff++;
		}else{
			$("#user2").css({border:"1px solid #E5004A",
				backgroundPosition:"12px 12px"
			})
			$(".ere").html("红色框信息不正确")
		}
		var psw_rem=/^[\w]{6,12}$/;
		if(psw_rem.test(this.psw1)){
			$("#psw2").css({
				border:"none",
				backgroundPosition:"14px -167px"
			})
			onoff++;
		}else{
			$("#psw2").css({
				border:"1px solid #E5004A",
				backgroundPosition:"14px -47px"
			})
			$(".ere").html("红色框信息不正确")
		}
		if(this.psw1!=this.psw2){
			$("#psw3").css({
				border:"1px solid #E5004A",
				backgroundPosition:"14px -47px"
			})
			
			$(".ere").html("两次密码不一致！")
		}else{
			$("#psw3").css({
				border:"none",
				backgroundPosition:"14px -167px"
			})
			onoff++;
		}
		if(onoff == 3){
			$(".ere").html("");
			this.regist();
		}	
	}
	Register.prototype.regist = function(){
		$.ajax({
			type:"POST",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"register",
				userID:this.user,
				password:this.psw1
			},
			success:function(res){
				switch(parseInt(res)){
					case 0:
						$(".ere").html("用户名已被注册");break;
					case 1:
						$(".ere").html("注册成功,请登录").css({color:"green"});
						$(".form2").css({display:"none"});
						$(".form1").css({display:"block"});
						$(".wel").html("欢迎登录");
						break;
					default:
						res = JSON.parse(res);
				}
			},
			error:function(xhl,status,data){
				console.error("请求错误，错误代码为"+status+",请重新刷新页面")
			}
		})
	}
	return new Register();
})