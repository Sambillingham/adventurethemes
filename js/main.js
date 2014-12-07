
$('.theme-preview').hover( function(){
    $(this).children('a').fadeIn(200);
    $(this).children('.overlay').fadeIn(200);
}, function(){
    $(this).children('a').fadeOut(200);
    $(this).children('.overlay').fadeOut(200);
});