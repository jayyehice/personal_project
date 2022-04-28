
let header_ham = document.getElementById("header_ham");
let header_ul = document.getElementById("header_ul");

let switch_open = document.getElementsByClassName("switch_open");
let switch_close = document.getElementsByClassName("switch_close");
let switch_circle = document.getElementsByClassName("switch_circle");

let prods = document.getElementsByClassName("prod");
let checks = document.getElementsByClassName("check");



header_ham.addEventListener("click", e => {
    // console.log(header_ul.style.height);
    if(header_ul.style.height === '305px'){
        header_ul.removeAttribute("style");
        
    }else{
        header_ul.style.height = '305px';
        
    }
});




for(let i=0; i<switch_open.length; i++){
    switch_close[i].addEventListener("click", function(){
        switch_close[i].style.left = "66px";
        switch_circle[i].style.left = "47px";

        for(let j=0; j<prods.length; j++){
            prods[j].classList.remove("prod_h");
            
        }

        for(let k=0; k<checks.length; k++){
            checks[k].classList.add("check_1");
        }
        
    });

    switch_open[i].addEventListener("click", function(){
        switch_close[i].style.left = "-1px";
        switch_circle[i].style.left = "5px";

        for(let j=0; j<prods.length; j++){
            prods[j].classList.add("prod_h");
        }

        for(let k=0; k<checks.length; k++){
            checks[k].classList.remove("check_1");
        }
        
    });

    switch_circle[i].addEventListener("click", function(){
        if(this.style.left === "47px"){
            switch_open[i].click();
        }else{
            switch_close[i].click();
        }
    });

}