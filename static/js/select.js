define(function(){
	function Select(){}
	
	Select.prototype.init = function(box){
		this.box = box;
		this.bix = this.box.parent();
//		console.log(this.bix)
		this.bix.mouseover(function(){
			$(this).find("ul").css({display:"block"})
			
		})
		this.bix.mouseout(function(){
			$(this).parent().find("ul").css({display:"none"})
		})
	}
	
	return new Select();
})