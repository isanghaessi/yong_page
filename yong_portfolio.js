$(document).ready(function () {
    var check = $("input[type='checkbox']");
    check.click(function () {
        $("#day, #night").toggle();
        ToggleDark();
    });

    $('.nav_btn').hover(function(){
        $(this).css('background','gray');
    },function(){
        if($('#night').css('display')!='none'){
            $(this).css('background','black');
        }else{
            $(this).css('background','white');
        }
    });
});

function ToggleDark() {
    if($('#night').css('display')!='none'){
        $('header').css('background','white');
        $('h1, #day, #night').css('color','black');
        $('.nav_btn').css('color','white');
        $('.nav_btn').css('background','black');
        $('.nav_item').css('background','black');
        $('.nav_item').css('color','white');
    }else{
        $('header').css('background','black');
        $('h1, #day, #night').css('color','white');
        $('.nav_btn').css('color','black');
        $('.nav_btn').css('background','white');
        $('.nav_btn:hover').css('background','gray');
        $('.nav_item').css('background','white');
        $('.nav_item').css('color','black');
    }
}

function MoveTo(tag){
    var offset=$('#'+tag).offset();
        $('html, body').animate({scrollTop : offset.top-100}, 500);
}