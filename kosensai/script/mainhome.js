$(function (){
     $(document).ready(function () {
        top_menu_hiddein();
        $('.top_menu li#kousensai_botton').on('click', function () {
            $('ul.kousensai_menu').toggle('slide', { direction: 'up' });
        });
        $('.top_menu li#kyuugitaikai_botton').on('click', function () {
            $('ul.kyuugitaikai_menu').toggle('slide', { direction: 'up' });
        });
        $('.top_menu li#else_botton').on('click', function () {
            $('ul.else_menu').toggle('slide', { direction: 'up' });
        });
    });
});

var top_menu_hiddein = function(){
    $('ul.kousensai_menu').hide();
    $('ul.kyuugitaikai_menu').hide();
    $('ul.else_menu').hide();
}
