
// let switch_open_size = document.getElementById("switch_open_size");
// let switch_close_size = document.getElementById("switch_close_size");
// let switch_circle_size = document.getElementById("switch_circle_size");

// switch_close_size.addEventListener("click", function(){
//     switch_close_size.style.left = "66px";
//     switch_circle_size.style.left = "47px";
//     intro_size.style.opacity = 1;
// });

// switch_open_size.addEventListener("click", function(){
//     switch_close_size.style.left = "-1px";
//     switch_circle_size.style.left = "5px";
//     intro_size.style.opacity = 0;
// });



let switch_open = document.getElementsByClassName("switch_open");
let switch_close = document.getElementsByClassName("switch_close");
let switch_circle = document.getElementsByClassName("switch_circle");

let switch_show = [intro_size, intro_print_range]

for(let i=0; i<switch_show.length; i++){
    switch_close[i].addEventListener("click", function(){
        switch_close[i].style.left = "66px";
        switch_circle[i].style.left = "47px";
        switch_show[i].style.opacity = 1;
    });

    switch_open[i].addEventListener("click", function(){
        switch_close[i].style.left = "-1px";
        switch_circle[i].style.left = "5px";
        switch_show[i].style.opacity = 0;
    });

    switch_circle[i].addEventListener("click", function(){
        if(this.style.left === "47px"){
            switch_open[i].click();
        }else{
            switch_close[i].click();
        }
    });

}

