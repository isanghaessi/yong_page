function MoveTo(tag){
    var offset=$('#'+tag).offset();
        $('html, body').animate({scrollTop : offset.top-100}, 500);
}