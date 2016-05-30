$(function(){
   
    setSize();

    $('#id-button').click(function () {
        
        var button = $(this);
        
        if(button.hasClass('cross')){

            $('#top-menu').animate({
                left: '-100%'
            },500, function(){
                button.removeClass('cross');
            });

        }else{

            $('#top-menu').animate({
                left: 0
            },500, function(){
                button.addClass('cross');
            });

        }
    })

    $(window).resize(function () {
        setSize();
    });


    function setSize(){

        var screenHeight = $(window).height();
        var screenWidth = $(window).width();

        var koeff = (screenWidth > 440)? 0.4 : 0.5;
        console.log(screenHeight, koeff);
        $('header, #top-menu').css('height',screenHeight);

        $("header .mask > div > h2").css("margin-top",screenHeight * koeff);
    }
    
    
});
