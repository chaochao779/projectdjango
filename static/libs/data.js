$(function(){
	var str1 = "";
	for(var i=0;i<json1.length;i++){
		str1 += `<a href="javascript:;">
					<li class="effect-big">
						<img src="${json1[i].src}"/>
						<div class="effect-small">
							<img src="${json1[i].small_src}"/>
							<span>${json1[i].name}</span>
							<h2>${json1[i].price}</h2>
						</div>
					</li>
				</a>`
		}
	 
	$(".top_box").html(str1);
	
	
	var str2 = "";
	for(var i=0;i<json2.length;i++){
		str2 += `<li class="good_s"  data-id="${json2[i].goodsId}">
						<div class="bg1""></div>
						<a href="javascript:;"><img src="${json2[i].src}"/></a>
						<p>${json2[i].state}</p>
						<div class="cost">
							<span>${json2[i].price}</span>
							<s>${json2[i].orprice}</s>
							<a href="#">满额立减 </a>
						</div>
						<em class="go">加入购物车</em>
						<div class="buy">立即购买</div>
					</li>`
		}
	 
	$(".detail_goods").html(str2);
	
	
	var str3 = "";
	for(var i=0;i<json2.length;i++){
		if(getCookie(json2[i].goodsId) == json2[i].goodsId){
			str3 += `<li class="car_list" data-id="${json2[i].goodsId}">
						<img src="${json2[i].src}"/>
						<p>${json2[i].state}</p>
						<span>价格:${json2[i].price}</span>
						<em>删除</em>
					</li>`
		}
	}
	if(str3 == ""){
		str3 = `
			<div class="no">
				<p>您的购物车是空的,继续去购物吧</p>
				<a href="detail.html">继续购物></a>
			</div>
		`
		$(".mycar_load").html(str3);
	}else{
		$(".car_data").html(str3);
	}
	
})






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