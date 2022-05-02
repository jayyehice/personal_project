
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
        if(after<199){
            scroll_x_box.scrollLeft = 199;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else if(after<418){
            scroll_x_box.scrollLeft = 418;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[2].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else if(after<637){
            scroll_x_box.scrollLeft = 637;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[2].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[3].setAttribute("style", "transform: scale(1); opacity: 1;");
        }
    }else if(after-before < 0){
        if(after>610){
            scroll_x_box.scrollLeft = 657;           
        }else if(after>418){
            scroll_x_box.scrollLeft = 418;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[2].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else if(after>199){
            scroll_x_box.scrollLeft = 199;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(0.8) perspective(1500px) rotateY(45deg);");
            prods[1].setAttribute("style", "transform: scale(1); opacity: 1;");
        }else{
            scroll_x_box.scrollLeft = 0;
            remove_style(prods);
            prods[0].setAttribute("style", "transform: scale(1); opacity: 1;");
        }

    }

    // if(after-before > 0){
    //     if(after<219){
    //         scroll_x_box.scrollLeft = 219;
    //         prods[0].removeAttribute("style");
    //         prods[1].setAttribute("style", "transform: scale(1);");
    //     }else if(after<438){
    //         scroll_x_box.scrollLeft = 438;
    //         prods[1].removeAttribute("style");
    //         prods[2].setAttribute("style", "transform: scale(1);");
    //     }else if(after<657){
    //         scroll_x_box.scrollLeft = 657;
    //         prods[2].removeAttribute("style");
    //         prods[3].setAttribute("style", "transform: scale(1);");
    //     }
    // }else if(after-before < 0){
    //     if(after>657){
    //         scroll_x_box.scrollLeft = 657;           
    //     }else if(after>438){
    //         scroll_x_box.scrollLeft = 438;
    //         prods[3].removeAttribute("style");
    //         prods[2].setAttribute("style", "transform: scale(1);");
    //     }else if(after>219){
    //         scroll_x_box.scrollLeft = 219;
    //         prods[2].removeAttribute("style");
    //         prods[1].setAttribute("style", "transform: scale(1);");
    //     }else{
    //         scroll_x_box.scrollLeft = 0;
    //         prods[1].removeAttribute("style");
    //         prods[0].setAttribute("style", "transform: scale(1);");
    //     }

    // }
    
    return scroll_x_box.scrollLeft;
};

let time_interval = null; 

scroll_x_box.addEventListener("mouseup",e => {
    // console.log(scroll_x_box.scrollLeft);
    scroll_left_before = scroll_move(scroll_left_before, scroll_x_box.scrollLeft);
    // time_interval = setInterval(function(){
    //     if(scroll_left_before_stop === scroll_x_box.scrollLeft){

            

    //         clearInterval(time_interval);
    //         console.log("stop");
    //         scroll_left_before = scroll_move(scroll_left_before, scroll_x_box.scrollLeft);

    //     }else{
    //         scroll_left_before_stop = scroll_x_box.scrollLeft;
    //     }
    // }, 100);
});

scroll_x_box.addEventListener("touchend",e => {
    // console.log(scroll_x_box.scrollLeft);
    // setTimeout(function(){
    //     scroll_left_before = scroll_move(scroll_left_before, scroll_x_box.scrollLeft);
    // },300);

    time_interval = setInterval(function(){
        if(scroll_left_before_stop === scroll_x_box.scrollLeft){

            clearInterval(time_interval);
            console.log("stop");
            scroll_left_before = scroll_move(scroll_left_before, scroll_x_box.scrollLeft);

        }else{
            scroll_left_before_stop = scroll_x_box.scrollLeft;
        }
    }, 100);
    
    // console.log(scroll_x_box.scrollLeft);
});

// scroll_x_box.addEventListener("scroll", e => {
//     // console.log('1', scroll_x_box.scrollLeft);
//     // console.log('2', scroll_left_before_stop);

//     // console.log('3', (scroll_x_box.scrollLeft - scroll_left_before_stop));
    

//     // scroll_left_before_stop = scroll_x_box.scrollLeft;

//     time_interval = setInterval(function(){
//         if(scroll_left_before_stop === scroll_x_box.scrollLeft){



//             clearInterval(time_interval);
//             console.log("stop");

//         }else{
//             scroll_left_before_stop = scroll_x_box.scrollLeft;
//         }
//     }, 100);


// });
