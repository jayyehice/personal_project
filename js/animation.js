
let t = 0;

document.addEventListener('scroll', function(e) {

    if(t===0){
        if(window.scrollY >= animation_high){
            document.getElementById("animation").classList.add("animation");
            t=1;
        }
    }
    
});

