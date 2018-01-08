$(function(){
	$(".firsta").mouseenter(function(){
		$(".triangle-up").css("border-bottom-color","#4185fa");
	}).mouseleave(function(){
		$(".triangle-up").css("border-bottom-color","#fff");
	});
	
	$(".btn").mouseenter(function(){
		$(".btn").next().slideUp();
		$(this).stop().next().slideDown(200);
	});
	
	$(".btn_sel").mouseleave(function(){
		$(this).stop().slideUp(200);
	});
	
	$(".nav li a").click(function(){
		$(".nav li a").removeClass("a-sel");
		$(this).addClass("a-sel");
	});

});