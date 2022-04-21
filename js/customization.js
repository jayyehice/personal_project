

let show_btn = document.getElementById("show_btn");
let show_box = document.getElementById("show_box");

show_btn.addEventListener("click", function(){
    show_box.insertAdjacentHTML("beforeend", '<img id="show_logo" src="./img/customization-logo.png" alt="">');
});


let input_word1 = document.getElementById("input_word1");
let input_word2 = document.getElementById("input_word2");
let input_word3 = document.getElementById("input_word3");
let input_word = [input_word1, input_word2, input_word3];


let input_word_show_box = document.getElementById("input_word_show_box");

let input_word_show_1 = document.getElementById("input_word_show_1");
let input_word_show_2 = document.getElementById("input_word_show_2");
let input_word_show_3 = document.getElementById("input_word_show_3");

let input_word_show = [input_word_show_1, input_word_show_2, input_word_show_3];

let reg = /[\u4e00-\u9fa5]{1}/g;
let notReg = /\w{1}/g;  




for(let i=0; i<3; i++){

    input_word[i].addEventListener("keyup", function(){
        //console.log(this.value.length);
    
        if(this.value.match(reg)){
            this.setAttribute("maxlength","7");
        }else if(this.value.match(notReg)){
            this.setAttribute("maxlength","10");
        }
    
        input_word_show[i].innerHTML = this.value;
    });

}





