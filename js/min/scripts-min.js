$(function(){function o(){var o=$(window).height(),t=$(window).width(),n=window.innerWidth,i=t>440?.4:.5;console.log(t,i,n),$("header").css("height",o),768>n?$("#top-menu").css("height",o):$("#top-menu").css("height","auto"),$("header .mask > div > h2").css("margin-top",o*i)}function t(){var o=$("<div />").attr("id","loader");o.css("opacity",0);var t=$("<div />").addClass("row"),n=$("<div />").addClass("cell"),i=$("<img>").attr("src","/images/gears.gif"),a=o.append(t.append(n.append(i)));return console.log(a),a}function n(){$("#loader").animate({opacity:0},500,function(){$(this).remove()})}function i(){$("#popup").animate({opacity:0},1e3,function(){$(this).remove()})}o(),$("#id-button").click(function(){var o=$(this);o.hasClass("cross")?$("#top-menu").animate({left:"-100%"},500,function(){o.removeClass("cross")}):$("#top-menu").animate({left:0},500,function(){o.addClass("cross")})}),$(window).resize(function(){o()}),$(window).scroll(function(){var o=$(document).scrollTop();o>0?$("#top-menu-container").addClass("move"):$("#top-menu-container").removeClass("move")}),$(".project > a").click(function(){console.log(this);var o=t();return o.appendTo("body"),$("#loader").animate({opacity:1},500,function(){var o=$("<div />").attr("id","popup");o.load("partial.html",function(){$("footer").after(this),n(),$(".top-cross > span, .button-holder > button").click(function(){$("#popup").animate({opacity:0},1e3,function(){$(this).remove()})})})}),!1}),$(".top-cross > span, .button-holder > button").click(function(){i()})});