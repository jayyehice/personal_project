
let subtitle = document.getElementsByClassName("subtitle");



for(let i=0; i<subtitle_animation_height.length; i++){

    document.addEventListener('scroll', function(e) {

        if(window.scrollY >= subtitle_animation_height[i]){
            subtitle[i].classList.add("subtitle_animation");
        };
    });
};
