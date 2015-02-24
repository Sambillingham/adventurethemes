
$(document).ready(function(){

    var instance = $('header').data("vide");
    // Get video element of the background. Do what you want.
    var videoObject = instance.getVideoObject();
    //pause the video
    videoObject.play();

    console.log( videoObject );

    videoObject.onplay = function () {
        $('header').velocity({
                        backgroundColorAlpha: 0.8,
                        colorRed: "40",
                        colorGreen: "40",
                        colorBlue: "40",
                    });
        $('.vide-wrapper').velocity({opacity : 1}, 700);

    };

    $('.js-logo-icon').delay(500).velocity({opacity : 1}, 1000, function(){
        $(this).velocity({ "margin-left": 0}, 600);
        $('.js-logo-type').velocity({opacity : 1}, 800);
    });

    function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }
    if ( getQueryVariable('submit') == 'true') {
        $('.form-message').addClass('sucess');
        $('.form-message').text('Thank You, We will email you back shortly');
    }

});


