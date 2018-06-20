require(["libs/jquery","js/select","js/banner","js/register","js/login","js/enter","js/car"],function(jQuery,select,banner,register,login,enter,car){
	select.init($(".topNav").find(".nav_box"));
//	console.log($(".topNav").find(".nav_box"));
	
	car.blockcar();
	//上浮动画
	$(".effect-big").mouseover(function(){
					$(this).find(".effect-small").stop().animate({bottom:"0"})
				})
	$(".effect-big").mouseout(function(){
					$(this).find(".effect-small").stop().animate({bottom:"-56"})
				})
	$(".effect-big").mouseover(function(){
					$(this).find(".effect-small").find("span").stop().animate({top:"20"},500)
				})
	$(".effect-big").mouseout(function(){
					$(this).find(".effect-small").find("span").stop().animate({top:"100"},500)
				})
	$(".effect-big").mouseover(function(){
					$(this).find(".effect-small").find("h2").stop().animate({top:"15"},700)
				})
	$(".effect-big").mouseout(function(){
					$(this).find(".effect-small").find("h2").stop().animate({top:"100"},700)
				})
	//选项卡
	
	$(".nav_ci").find("li").mouseout(function(){
		$(".xxk").css({display:"none"})
	})
	$(".nav_ci").find("li").eq(0).mouseover(function(){
		$(".xxk1").css({background:"url(images/nmzq.jpg)",display:"block"})
	})
	$(".nav_ci").find("li").eq(1).mouseover(function(){
		$(".xxk2").css({background:"url(images/nfzq.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(2).mouseover(function(){
		$(".xxk3").css({background:"url(images/fsyy.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(3).mouseover(function(){
		$(".xxk4").css({background:"url(images/nksj.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(4).mouseover(function(){
		$(".xxk5").css({background:"url(images/wyxh.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(5).mouseover(function(){
		$(".xxk6").css({background:"url(images/wjts.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(6).mouseover(function(){
		$(".xxk7").css({background:"url(images/ccqj.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(7).mouseover(function(){
		$(".xxk8").css({background:"url(images/yefs.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(8).mouseover(function(){
		$(".xxk9").css({background:"url(images/mszq.png)",display:"block"})
	})
	$(".nav_ci").find("li").eq(9).mouseover(function(){
		$(".xxk10").css({background:"url(images/mzry.png)",display:"block"})
	})
	//轮播图
	$(".banner").banner({
			imgs:$(".banner").eq(0).find("li"),
			left:$(".banner").eq(0).find(".left"),
			right:$(".banner").eq(0).find(".right"),
			autoPlay:true,
			list:true,
			playTime:2000
	})
	$(".banner").mouseover(function(){
		$(this).find(".btns").stop().animate({opacity:"0.4"},600)
	})
	$(".banner").mouseout(function(){
		$(this).find(".btns").stop().animate({opacity:"0"},600)
	})
	
	
		
	
//注册界面
	//转换
	$("#zc").click(function(){
		$(".form1").css({display:"none"})
		$(".form2").css({display:"block"})
		$(".welc").html("欢迎注册")
	})
	$("#dl").click(function(){
		$(".form2").css({display:"none"})
		$(".form1").css({display:"block"})
		$(".welc").html("欢迎登录")
	})
	
	//注册
	$("#btn2").click(function(){
		register.init({
			user:$("#user2").val(),
			psw1:$("#psw2").val(),
			psw2:$("#psw3").val()
		})
	})
	//登录
	$("#btn1").click(function(){
		login.init({
			user:$("#user1").val(),
			psw:$("#psw1").val(),
		})
	})
	
	
//检测是否登录	
	enter.init();

//退出
	$(".out").click(function(){
		enter.removeCookie();
	})
	
//主次级菜单
	$("#nav").mouseover(function(){
		$(".nav_ci").css({display:"block",})
	})
	$("#nav").mouseout(function(){
		$(".nav_ci").css({display:"none",})
	})
	
	
	
//购物车
	//添加
	$(".detail_goods").click(function(event){
		var eve = event;
		car.add(eve);
	})
	$(".buy_g").click(function(event){
		var eve = event;
		car.add(eve);
	})
	//	进入购物车是否登录判断
	$(".car").click(function(){
		car.overcar();
		
	})
	//删除
	$(".car_data").click(function(event){
		var eve = event;
		car.reduce(eve);
	})
	
	
//商品详情
	//
	$(".top_box").find("a").eq(0).attr("href","detail.html")
	$(".detail_goods").find("li").eq(0).find("a").attr("href","goods.html")
	//图片显示
	$(".box_small").find("li").mouseover(function(){
		
		var index = $(this).index()
		var sro = $('.box_small').find('li').eq(index).find('img').attr('src');
		$(".box_big").children("img").attr("src",sro)
	})
		
})