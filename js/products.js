
let switch_open = document.getElementsByClassName("switch_open");
let switch_close = document.getElementsByClassName("switch_close");
let switch_circle = document.getElementsByClassName("switch_circle");

let prods = document.getElementsByClassName("prod");
let checks = document.getElementsByClassName("check");



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


// -------------------- width < 767px --------------------

let scroll_x_box = document.getElementById("scroll_x_box");

let scroll_left_before = 0;
let scroll_left_before_stop = 0;

function remove_style(element_list){
    for(let i=0; i<element_list.length; i++){
        element_list[i].removeAttribute("style");
    }
};


let scroll_x_next = document.getElementById("scroll_x_next");
let scroll_x_prev = document.getElementById("scroll_x_prev");
let scroll_index = 0;
let scroll_interval_id;
let win_width = window.innerWidth;


function scroll_interval(interval_step){

    let t = 0;

    scroll_interval_id = setInterval(function(){
            
        scroll_x_box.scrollLeft += interval_step;
        
        t ++

        // console.log(scroll_x_box.scrollLeft);

        if(t === 11){
            remove_style(prods);
            clearInterval(scroll_interval_id);
            scroll_index = Math.ceil(scroll_x_box.scrollLeft/220);
            prods[scroll_index].setAttribute("style", "transform: scale(1); opacity: 1;");
        }

    }, 15);

}


scroll_x_next.addEventListener("click", e => {
    if(scroll_index !== (prods.length-2)){
        scroll_interval(20);       
    }
});

scroll_x_prev.addEventListener("click", e => {
    if(scroll_index !== 0){
        scroll_interval(-20);
    }
});