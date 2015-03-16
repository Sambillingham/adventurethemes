var s,
    app = {

    settings : {
    },
    init: function() {
        //Global settings
        s = this.settings;

        //initalize
        this.bindUiActions();
        this.pauseOnStart();
        this.waypoints();
    },

    bindUiActions: function (){

        //Slide out the project information when clicking on "view project"
        $('.project-video span').on('click', function(){

            $(this).parent().next().slideToggle();
        });
        //Slides project content back up when clicking on "x" icon
        $('.close').on('click', function() {
            $(this).parent().slideToggle();
        })
    },

    pauseOnStart: function() {
        //Pauses all videos when the pages starts, this helps performance
        $('.project-video').each( function(index, el){
            // Get instance of the video
            var instance = $(el).data("vide");
            // Get video element of the background. Do what you want.
            var videoObject = instance.getVideoObject();
            //pause the video
            videoObject.pause();
        });
    },
    waypoints: function(){
        // play the video when it comes into view
        // header videos are in view so get started straight away
        $('.project-video').waypoint(function() {
            var instance = $(this).data("vide");
            // Get video element of the background. Do what you want.
            var videoObject = instance.getVideoObject();
            videoObject.play();
        }, { offset: '80%' });

        // play the video when it comes into view
        $('.project-video').waypoint(function() {
            var instance = $(this).data("vide");
            // Get video element of the background. Do what you want.
            var videoObject = instance.getVideoObject();
            videoObject.play();
        }, { offset: '10%' });

        // stop the video when it goes out of view
        $('.project-video').waypoint(function() {
            var instance = $(this).data('vide');
            // Get video element of the background. Do what you want.
            var videoObject = instance.getVideoObject();
            videoObject.pause();
        }, { offset: function() { return -$(this).height(); } });
    }

};

$(document).ready(function(){
    // Start all of the code for the app once the DOM has loaded
    app.init();
    //stops mobile scrolling until after preloader
    $('body').bind('touchmove', function(e){e.preventDefault()})
});

$(window).load( function(){
    // Remove preolaoder screen when everything has loaded
    $('.preloader-container').fadeOut(200);
    //animates in the title after preload finished
    $('.hidden-on-load').removeClass('hidden');
    //allows scrolling again
    $('body').removeClass('stop-scrolling');
    //enable scrolling on mobile
    $('body').unbind('touchmove')
});

// $('.project-content').css("width", $(document).width());

// console.log( $(document).width())
