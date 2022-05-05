
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

function scroll_move(before, after){

    if(after-before > 0){

        if(after<219){
            scroll_x_box.scrollLeft = 219;//199
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else if(after<438){
            scroll_x_box.scrollLeft = 438;//418
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[2].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else if(after<657){
            scroll_x_box.scrollLeft = 657;//637
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[2].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[3].setAttribute("style", "transform: scale(1); opacity: 1;");
        }

    }else if(after-before < 0){

        if(after>657){//610
            scroll_x_box.scrollLeft = 657;           
        }else if(after>438){
            scroll_x_box.scrollLeft = 438;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[2].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else if(after>219){
            scroll_x_box.scrollLeft = 219;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else{
            scroll_x_box.scrollLeft = 0;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(1); opacity: 1;");
        }

    }

    
    return scroll_x_box.scrollLeft;
};



let scroll_x_next = document.getElementById("scroll_x_next");
let scroll_x_prev = document.getElementById("scroll_x_prev");
let scroll_index = 0;

scroll_x_next.addEventListener("click", e => {
    if(scroll_index !== (prods.length-2)){
        remove_style(prods);
        scroll_x_box.scrollLeft += 219;

        scroll_index = Math.ceil(scroll_x_box.scrollLeft/219)+1;
        //console.log(index);
        prods[scroll_index].setAttribute("style", "transform: scale(1); opacity: 1;");
        //console.log(scroll_x_box.scrollLeft);
    }
});

scroll_x_prev.addEventListener("click", e => {
    //console.log(scroll_index);

    if(scroll_index !== 0){
    
        remove_style(prods);
        scroll_x_box.scrollLeft -= 219;

        scroll_index = Math.ceil(scroll_x_box.scrollLeft/219) -1;
        //console.log(scroll_x_box.scrollLeft);
        //console.log(index);
        prods[scroll_index].setAttribute("style", "transform: scale(1); opacity: 1;");
        }
});