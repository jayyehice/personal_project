
let switch_open = document.getElementById("switch_open");
let switch_close = document.getElementById("switch_close");
let switch_circle = document.getElementById("switch_circle");

switch_close.addEventListener("click", function(){
    switch_close.style.left = "66px";
    switch_circle.style.left = "47px";
    intro_size.style.opacity = 1;
});

switch_open.addEventListener("click", function(){
    switch_close.style.left = "-1px";
    switch_circle.style.left = "5px";
    intro_size.style.opacity = 0;
});