window.onload = function (){
	var list = document.getElementById("list");
	var imgs = document.getElementsByClassName('imgs')[0].children;
	var timer = setInterval(slider, 1500);
	var init = 1.6;        //初始化位置
	var offset = -2.95;    //每次滑动偏移量
	var count = 0;         
	var index = 0;         //修正值，第二轮轮播从第一张开始
	var len = imgs.length - 1;
	function slider(){
		for(var i = 0; i < 5; i++){
			list.children[i].className = "";
			imgs[i].className = "";
		}
		count++;
		list.style.transform = "translate(" + ( (count - index)*offset - init )+ "rem, 0)";
		list.style.webkitTransform = "translate(" + ( (count - index)*offset - init )+ "rem, 0)";
		imgs[count - index].className = "current";
		list.children[count - index].className = "active";
		if(count == (len + index) ){
			count = 0;
			index = 1;
		}
	}
}