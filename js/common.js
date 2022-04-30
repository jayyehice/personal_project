
let header_ham = document.getElementById("header_ham");
let header_ul = document.getElementById("header_ul");



header_ham.addEventListener("click", e => {
    // console.log(header_ul.style.height);
    if(header_ul.style.height === '305px'){
        header_ul.removeAttribute("style");
        
    }else{
        header_ul.style.height = '305px';
        
    }
});

