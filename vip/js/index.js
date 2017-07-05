var index=0;
$(".title ul li").mouseover(function(){
	index=$(this).index();
	$(".pic ul li").eq(index).fadeIn(300).siblings().fadeOut(300);
	$(".title .exc").stop().animate({"left":index*190+"px"},500);	
})
	