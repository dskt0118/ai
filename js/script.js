'use strict';

$(document).ready(function(){
//要素の取得
var header = $("#header");
var logo = $(".pageHeader");
var navi = $(".headerLogo_texmex");
//$scrollTopDistance = $(window).scrollTop();
var headerHeight = header.outerHeight(true);
  console.log(headerHeight);
//要素の操作
 $(function () {
	$(window).on('scroll', function() {
    //$scrollTopDistance = $(window).scrollTop();

    if($(window).scrollTop() >= headerHeight){
        header.addClass('is_scroll');
        logo.addClass('is_scroll');
        navi.addClass('is_scroll');
    }else if($(window).scrollTop() <= headerHeight){
        header.removeClass('is_scroll');
        logo.removeClass('is_scroll');
        navi.removeClass('is_scroll');
    }
	 });
});

////welcomeふわっと文字////
 $(function () {
  var target = $(".welcome");
  var el = target.offset().top;
  $(window).on('scroll', function() {
   // var scroll = $(this).scrollTop();
//		console.log('wel:'+el);
//		console.log('scr:'+$(this).scrollTop());
    if ($(this).scrollTop() <=  el) {
      target.removeClass('view');
    }
		else 
			{
      target.addClass('view');
    }
  });
});


////文字をスライドイン////
 $(function () {
  var targetIntro = $(".intro01");
  var elIntro = $(".intro01").offset().top;
  $(window).on('scroll', function() {
   // var scroll = $(this).scrollTop();
    if ($(this).scrollTop() > elIntro) {
      targetIntro.addClass('slidein');
    }
		else {
      targetIntro.removeClass('slidein');
    }
  });
});

 $(function () {
  var targetIntro02 = $(".intro02");
  var elIntro02 = $(".intro02").offset().top;
  $(window).on('scroll', function() {
   // var scroll = $(this).scrollTop();
    if ($(this).scrollTop() > elIntro02) {
      targetIntro02.addClass('slidein');
    }
		else {
      targetIntro02.removeClass('slidein');
    }
  });
});

 $(function () {
  var targetIntro03 = $(".intro03");
  var elIntro03 = $(".intro03").offset().top;
  $(window).on('scroll', function() {
   // var scroll = $(this).scrollTop();
    if ($(this).scrollTop() > elIntro03) {
      targetIntro03.addClass('slidein');
    }
		else {
      targetIntro03.removeClass('slidein');
    }
  });
});

});//document