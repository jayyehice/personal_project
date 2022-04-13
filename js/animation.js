
// var t = document.documentElement.scrollTop || document.body.scrollTop;

// if (t >= 100) {
//     console.log(t);
//     }

// 參考來源：http://www.html5rocks.com/en/tutorials/speed/animations/

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   // 依據捲動位置進行某些操作
// }

// document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

let t = 0;

document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;
    //console.log(window.scrollY);
    if(t===0){
        if(window.scrollY >= animation_high){
            document.getElementById("animation").classList.add("animation");
            t=1;
        }
    }
    
});