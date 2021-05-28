$('.menu-icon').click(function () {       
    if ($(this).hasClass('active')) {
        $('.menu-icon').removeClass('active');
        $('.header_nav').css('right','-60%');
    } else {
        $(this).addClass('active');
        $('.header_nav').css('right',0);
    }
});
$('.close-menu').click(function () {
    $('.header_nav').fadeOut('fast');
    $('.header_nav').css('right',"-60%");
});