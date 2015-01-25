var jPM = {};

$(document).ready( function() {

    // Initalize jPanelMenu Plugin
    jPM = $.jPanelMenu({
        menu : '#menu',
        trigge : '.menu-trigger',
        animated: false,
        direction: 'right',
        openPosition: '220px',
        beforeOpen : ( function() {}),
        beforeClose : ( function() {})
    });

    jPM.on();

    // Important for use in Home page and category page
    // These pages use a percentage value for height and
    // 100% value needs to be added to the .jPanelMenu-panel
    // div created by the plugin
    if( $('body').hasClass('full-height') ) {
        $('.jPanelMenu-panel').addClass('full');
    }
});