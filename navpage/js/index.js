$(document).ready(function(){
	var mySwiper = new Swiper('#swiper', {
        direction: 'horizontal',
        initialSlide: 0,
		slidesPerView : 6,
		onInit:function(swiper){
			$(".line").css("width", swiper.virtualSize / 10)
		},
		onTap: function(swiper){
			console.log("clickedIndex: " + swiper.clickedIndex);
			console.log("activeIndex:  " + swiper.activeIndex)
			console.log("translate:    " + swiper.translate)
			console.log("--------------------")
			// console.log(swiper);
			var offset = swiper.virtualSize / 10 * swiper.clickedIndex;
			mySwiper.slideTo(swiper.clickedIndex - 2);
			$(".line").css("transform", "translate(" + offset + "px, 0)");
			$(".line").css("-webkit-transform", "translate(" + offset + "px, 0)");
		}
    });
});