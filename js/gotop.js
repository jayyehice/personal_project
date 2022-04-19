
let gotop = document.getElementById("gotop");

gotop.addEventListener("click", function(){

    let current_high = window.scrollY;
    let hight_cut = current_high / 100;

    var interval_id = setInterval(function(){

        if (current_high <= hight_cut){
            clearInterval(interval_id);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }else{
            current_high -= hight_cut;
            document.body.scrollTop = current_high;
            document.documentElement.scrollTop = current_high;
        }
        
      }, 2);

});


document.addEventListener('scroll', function(e) {

    if(window.scrollY >= 1000){
        gotop.style.display="block";
    }else{
        gotop.style.display="none";
    }

});