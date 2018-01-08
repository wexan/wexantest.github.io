$(function(){
	$(".page-sel label").click(function(){
		if($(this).attr("contentname")=="ct-p"){
			$(".ct-d").hide();
			$(".ct-p").show();
		}else{
			$(".ct-p").hide();
			$(".ct-d").show();
		}
	});
	
	$(".ct-d-01 label").click(function(){
		if($(this).attr("imgname")=="dialog_gy"){
			$(".ct-d-01 .img").css('background-image','url(v0.1/img/dialog_gy.png)');
		}else{
			$(".ct-d-01 .img").css('background-image','url(v0.1/img/dialog_zx.png)');
		}
	});
	
});


