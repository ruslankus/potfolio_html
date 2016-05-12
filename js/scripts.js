$(function(){
   
    var screenHeight = $(window).height();
    console.log(screenHeight);
    $('header, #top-menu').css('height',screenHeight);

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
    
    
});
