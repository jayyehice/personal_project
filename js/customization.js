

let show_btn = document.getElementById("show_btn");
let show_box = document.getElementById("show_box");

show_btn.addEventListener("click", function(){
    show_box.insertAdjacentHTML("beforeend", '<img id="show_logo" src="./img/customization-logo.png" alt="">');
});