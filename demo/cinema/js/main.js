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

    },

    pauseOnStart: function() {
    },
    waypoints: function(){

    }

};

$(document).ready(function(){
    // Start all of the code for the app once the DOM has loaded
    app.init();
});

