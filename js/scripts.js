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
    
    
    
/* -------------------------------  popup section --------------------------- */

    $(".project > a").click(function(){
        console.log(this);

        var spinner = createSpinner();

        spinner.appendTo('body');

        $("#loader").animate({opacity:1},500, function(){

            var popup = $("<div />").attr('id','popup');
            popup.load('partial.html',function () {
                $('footer').after(this);
                destoySpinner();

                //registrium close
                $(".top-cross > span, .button-holder > button").click(function () {

                    $("#popup").animate({
                        opacity: 0
                    },1000,function () {
                        $(this).remove();
                    })

                });

            });//load

        });

        return false;
    });
    
    $(".top-cross > span, .button-holder > button").click(function () {

        destroyPopup();
    });




    function createSpinner(){

        var spinnerHolder = $("<div />").attr('id','loader');
        spinnerHolder.css('opacity',0);;
        var row = $("<div />").addClass('row');
        var cell = $("<div />").addClass('cell');

        var img = $("<img>").attr('src','/images/gears.gif');

        var loader = spinnerHolder.append(row.append(cell.append(img)));


        console.log(loader);
        return loader;

    }//createspinner


    function destoySpinner(){
        $("#loader").animate({
            opacity:0
        },500, function(){
            $(this).remove();
        })
    }

    function destroyPopup(){

        $("#popup").animate({
            opacity: 0
        },1000,function () {
            $(this).remove();
        })

    }




});
