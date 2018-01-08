$(function(){
	var iframe = $(".login-iframe")[0];
	$(".btngroup ul a").click(function(){
		if($(this).attr("pages")=="ydyy_reg" || $(this).attr("pages")=="ydyy_log"){	
			$(".login-iframe").attr("src","login_ydyy.html").show();
//			console.log($(this).attr("pages")+"...1");
			pages = $(this).attr("pages");
			addHandler();
		}else if($(this).attr("pages")=="easy_reg" || $(this).attr("pages")=="easy_log"){
			$(".login-iframe").attr("src","login_easywork.html").show();
//			console.log($(this).attr("pages")+"...1");
			pages = $(this).attr("pages");
			addHandler();
		}
	});

	function init(){
		//~ie9
		$(".login-iframe").contents().find(".login-html .sign-in-htm").attr("style","display: none;");
		$(".login-iframe").contents().find(".login-html .sign-up-htm").attr("style","display: none;");
		$(".login-iframe").contents().find(".login-html .tab").click(function(){
			if($(this).attr("pagename")=="login"){
				$(".login-iframe").contents().find(".login-html .sign-up-htm").attr("style","display: none;");
				$(".login-iframe").contents().find(".login-html .sign-in-htm").removeAttr("style");
			}else if($(this).attr("pagename")=="reg"){
				$(".login-iframe").contents().find(".login-html .sign-in-htm").attr("style","display: none;");
				$(".login-iframe").contents().find(".login-html .sign-up-htm").removeAttr("style");
				
				$(".login-iframe").contents().find(".login-html .reged:eq(0)").click(function(){
					$(".login-iframe").contents().find(".login-html .sign-up-htm").attr("style","display: none;");
					$(".login-iframe").contents().find(".login-html .sign-in-htm").removeAttr("style");
				});
			}
		});

	}
	
	function iframe_signin(){
		$(".login-iframe").contents().find(".login-html input[class='sign-in']").attr("checked","checked");
		//~ie9
		$(".login-iframe").contents().find(".login-html .sign-in-htm").removeAttr("style");		
        $(".login-iframe").contents().find(".login-wrap").css("height",430+"px");
	}
	
	function iframe_signup(){
        $(".login-iframe").contents().find(".login-html input[class='sign-up']").attr("checked","checked");
        //~ie9
        $(".login-iframe").contents().find(".login-html .sign-up-htm").removeAttr("style");		
		//reged
		$(".login-iframe").contents().find(".login-html .reged:eq(0)").click(function(){
			$(".login-iframe").contents().find(".login-html .sign-up-htm").attr("style","display: none;");
			$(".login-iframe").contents().find(".login-html .sign-in-htm").removeAttr("style");
		});
        $(".login-iframe").contents().find(".login-wrap").css("height",555+"px"); 
	}
	
	function checked(){
		init();
		if(pages=="ydyy_log" || pages=="easy_log"){
//			console.log(pages+"...3");
			iframe_signin();
		}else if(pages=="ydyy_reg" || pages=="easy_reg"){
//			console.log(pages+"...3...reg");
			iframe_signup();
		}
		$(".login-iframe").contents().find(".close").click(function(){
			$(".login-iframe").hide();
			$("body").css({"overflow-y":"visible"});
			removeHandler();
		});	
	}
	
	function addHandler(){				
		if(iframe.addEventListener){
//			console.log(pages+"...2...listener");
			iframe.addEventListener("load",checked);
		}else if(iframe.attachEvent){//ie8~
//			console.log(pages+"...2...attachEvent");
			iframe.attachEvent("onload",checked);
		}			
	}
	function removeHandler(){		
		if(iframe.removeEventListener){
//			console.log("iframe...remove...lister");
			iframe.removeEventListener("load",checked);
		}else if(iframe.detachEvent){
//			console.log("iframe...remove...attach");
			iframe.detachEvent("onload",checked);
		}
		
	}
});