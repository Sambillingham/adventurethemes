var jPM = {};

$(function() {

    jPM = $.jPanelMenu({

        menu : '#menu',
        trigger: '.menu-trigger',
        animated: false,
        beforeOpen : ( function() {

            // if (matchMedia('only screen and (min-width: 992px)').matches) {
            //     $('.sidebar').css("left", "250px");
            // }
        }),
        beforeClose : ( function() {

            // $('.sidebar').css("left", "0");
            // $('.writer-icon, .side-writer-icon').removeClass("fadeOutUp");
        })
    });

    jPM.on();

    $('.select-posts, .select-categories').on('click', function () {

        $('.home-page-posts').toggleClass("hide");
        $('.home-page-categories').toggleClass("hide");

        $('.select-posts').toggleClass("active");
        $('.select-categories').toggleClass("active");

        $('.home-footer').toggleClass("hide");
    });

    $('.writer-icon').on('click', function () {
        $(this).addClass("fadeOutUp");

    });

    var fullHeight = $(window).height();

    $('.hero-image-404').css("height", fullHeight );


    console.log("T Test");

    $('.sidebar').on('click', function(){
        return true;
    });
});