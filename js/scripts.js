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
    });

    $(window).resize(function () {
        setSize();
    });


    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if(top > 0){
            $("#top-menu-container").addClass('move');
        }else{
            $("#top-menu-container").removeClass('move');
        }
    });



    function setSize(){

        var screenHeight = $(window).height();
        var screenWidth = $(window).width();
        var documentWidth = window.innerWidth;

        var koeff = (screenWidth > 440) ? 0.4 : 0.5;
        console.log(screenWidth, koeff, documentWidth);
        $('header').css('height', screenHeight);
        if(documentWidth < 768) {
            $('#top-menu').css('height', screenHeight);
        }else{
            $('#top-menu').css('height', 'auto');
        }
        $("header .mask > div > h2").css("margin-top", screenHeight * koeff);


    }
    
    
});
