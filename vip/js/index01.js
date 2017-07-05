var index=0;
$(".title ul li").mouseover(function(){
	index=$(this).index();
	$(".pic").stop().animate({"left":-index*975+'px'},500);
	$(".exc").stop().animate({"left":index*190+"px"},300);
	
});


