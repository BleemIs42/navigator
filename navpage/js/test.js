$(function(){


	function init(){
		var ulWidth = 0;
		var liUnderlineOffetArr = [0];
		var liUnderlineWidthArr = [];
		var liPadding = 20;

		$(".nav ul li").each(function(){
			var w = $(this).width();
			ulWidth += w; 
			liUnderlineOffetArr.push(ulWidth);
			liUnderlineWidthArr.push(w - liPadding * 2);
		});

		$(".nav ul").width(ulWidth);
		$(".line").css("left", liPadding);

		$(".nav ul li").on("tapIscroll", function(){
			var index = $(this).index();
			$(".line").css({
				"width": liUnderlineWidthArr[index] + "px",
				"transform": "translate(" + liUnderlineOffetArr[index] + "px, 0)",
				"-webkit-transform": "-webkit-translate(" + liUnderlineOffetArr[index] + "px, 0)"
			});
			myScroll.scrollToElement($(this)[0], 150, true, false, IScroll.ease.quadratic);
		})

		var myScroll = new IScroll('#wrapper', {
			scrollX: true,
			tap: "tapIscroll"
		});
	}

	init();
});