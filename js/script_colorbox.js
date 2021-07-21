'use strict';

////colorbox////
$(document).ready(function(){
	$(".pop").colorbox({
		inline:true, 
		width:"70%",
		height:"88%",
//		transition:'fade',
		speed: "500",
			//popを画面中央に固定する
		fixed: true,
		rel:'pop',
		opacity: "0.75",
//		scrolling: false,
		current: false,
		previous: "<",
		next: ">",
	});

	$(".pop2").colorbox({
		inline:true, 
		width:"70%",
		height:"89%",
//		transition:'fade',
		speed: "500",
			//popを画面中央に固定する
		fixed: true,
		rel:'pop2',
		opacity: "0.75",
//		scrolling: false,
		current: false,
		previous: "<",
		next: ">",
	});
});