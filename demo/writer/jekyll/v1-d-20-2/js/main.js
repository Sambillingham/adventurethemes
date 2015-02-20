
var s,
    app = {

        settings : {
            jpm: {}
        },
        init: function() {
            //Global settings
            s = this.settings;

            //initalize
            this.initalizers();
            this.bindUiActions();
        },
        bindUiActions: function (){
            var self = this;

            $('.select-posts,.select-categories').on('click', function () {
                self.homePostsCatSwitch();
            });

            $('.social-icon').on('click', function(){
                self.socialIconClick( $(this) );
            });

        },
        initalizers: function (){
            // JPanel Menu Plugin
            this.jpm();

            // Fast Click for Mobile - removes 300ms delay - https://github.com/ftlabs/fastclick
            FastClick.attach(document.body);

            // 404 Image error resizing
            this.error404Page();

            // Add Bg colour from Js so jPanel has time to initalize
            $('body').css({"background-color":"#333337"});
        },
        homePostsCatSwitch: function(){
            $('.home-page-posts').toggleClass("hide");
            $('.home-page-categories').toggleClass("hide");
            $('.select-posts').toggleClass("active");
            $('.select-categories').toggleClass("active");
            $('.home-footer').toggleClass("hide");
        },
        error404Page: function(){
            var fullHeight = $(window).height();
            $('.hero-image-404').css("height", fullHeight );
        },
        socialIconClick: function(el) {
            var platform = el.data('platform');
            var message = el.data('message');
            var url = el.data('url');

            if (platform == 'mail'){
                // Let mail use default browser behaviour
                return true;
            } else {
                this.popItUp(platform, message, url);
                return false;
            }
        },
        popItUp : function (platform, message, url) {

            var popUrl,
                newWindow;

            if( platform == 'twitter'){
                popUrl = 'http://twitter.com/home?status=' + encodeURI(message) + '+' + url;

            } else if(platform == 'facebook'){
                popUrl = 'http://www.facebook.com/share.php?u' + url + '&amp;title=' + encodeURI(message);
            }
            newWindow = window.open(popUrl,'name','height=500,width=600');
            if (window.focus) { newWindow.focus(); }
            return false;

        },
        jpm: function(){

            s.jpm = $.jPanelMenu({
                menu : '#menu-target',
                trigger: '.menu-trigger',
                animated: false,
                beforeOpen : ( function() {}),
                beforeClose : ( function() {
                    $('.writer-icon, .side-writer-icon').removeClass("fadeOutUp");
                })
            });

            s.jpm.on();
        }
    };

$(document).ready(function(){
    app.init();
});

