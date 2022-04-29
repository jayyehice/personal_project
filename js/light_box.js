
$(document).ready(function(){
    $('#small_imgs li img').click(function(){
        //console.log(this.getAttribute("src"));

        let img_src = $(this).attr('src');

        $('#light_box').css("display", "block");

        $('#light_box img').attr('src', img_src)

        

    });

    $('#light_box').click(function(){
        $(this).css("display", "none");
    });

    $('#light_box img').click(function(e){
        e.stopPropagation();
    });

});