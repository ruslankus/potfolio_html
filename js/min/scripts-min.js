$(function(){var s=$(window).height();console.log(s),$("header, #top-menu").css("height",s),$("#id-button").click(function(){var s=$(this);s.hasClass("cross")?$("#top-menu").animate({left:"-100%"},500,function(){s.removeClass("cross")}):$("#top-menu").animate({left:0},500,function(){s.addClass("cross")})})});