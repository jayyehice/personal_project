

let show_btn = document.getElementById("show_btn");
let show_box = document.getElementById("show_box");
let show_logo = document.getElementById("show_logo");

// show_btn.addEventListener("click", function(){
//     show_box.insertAdjacentHTML("beforeend", '<img id="show_logo" src="./img/customization-logo.png" alt="">');
// });





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


let input_word_show_box_height = input_word_show_box.scrollHeight;
// console.log(input_word_show_box_height*0.5);
// console.log((input_word_show_box_height*0.22).toFixed(1));

// font-size 0.22   interval 0.33   half 0.5

let input_word_show_top = [
    (input_word_show_box_height*0.0545).toFixed(1) + 'px',
    (input_word_show_box_height*0.22).toFixed(1) + 'px',
    (input_word_show_box_height*0.38).toFixed(1) + 'px',
    (input_word_show_box_height*0.54).toFixed(1) + 'px',
    (input_word_show_box_height*0.72).toFixed(1) + 'px'
];

//console.log(input_word_show_top);

for(let i=0; i<3; i++){

    input_word[i].addEventListener("keyup", function(){
        //console.log(this.value.length);
    
        if(this.value.match(reg)){
            this.setAttribute("maxlength","7");
        }else if(this.value.match(notReg)){
            this.setAttribute("maxlength","10");
        }
    
        input_word_show[i].innerHTML = this.value;

        if(input_word1.value.length >0){
            if(input_word2.value.length >0){
                if(input_word3.value.length >0){
                    input_word_show_1.style.top = input_word_show_top[0];
                    input_word_show_2.style.top = input_word_show_top[2];
                    input_word_show_3.style.top = input_word_show_top[4];
                }else{
                    input_word_show_1.style.top = input_word_show_top[1];
                    input_word_show_2.style.top = input_word_show_top[3];
                }
            }else{
                if(input_word3.value.length >0){
                    input_word_show_1.style.top = input_word_show_top[1];
                    input_word_show_3.style.top = input_word_show_top[3];
                }else{
                    input_word_show_1.style.top = input_word_show_top[2];
                }
            }
        }else{
            if(input_word2.value.length >0){
                if(input_word3.value.length >0){
                    input_word_show_2.style.top = input_word_show_top[1];
                    input_word_show_3.style.top = input_word_show_top[3];
                }else{
                    input_word_show_2.style.top = input_word_show_top[2];
                }
            }else{
                if(input_word3.value.length >0){
                    input_word_show_3.style.top = input_word_show_top[2];
                }
            }
        }
    });

}

let input_word_left1 = document.getElementById("input_word_left1");
let input_word_center1 = document.getElementById("input_word_center1");
let input_word_right1 = document.getElementById("input_word_right1");
let input_word_left2 = document.getElementById("input_word_left2");
let input_word_center2 = document.getElementById("input_word_center2");
let input_word_right2 = document.getElementById("input_word_right2");
let input_word_left3 = document.getElementById("input_word_left3");
let input_word_center3 = document.getElementById("input_word_center3");
let input_word_right3 = document.getElementById("input_word_right3");

let input_word_align = {
    0 : [input_word_left1, input_word_center1, input_word_right1],
    1 : [input_word_left2, input_word_center2, input_word_right2],
    2 : [input_word_left3, input_word_center3, input_word_right3]
};

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        input_word_align[i][j].addEventListener("click", function(){
            if(j === 0){
                input_word_show[i].style.textAlign = "left";

                for(let k=0;k<3;k++){
                    if(k===j){
                        input_word_align[i][k].style.opacity = 1;
                    }else{
                        input_word_align[i][k].style.opacity = .5;
                    }
                }

            
            }else if(j === 1){
                input_word_show[i].style.textAlign = "center";
                for(let k=0;k<3;k++){
                    if(k===j){
                        input_word_align[i][k].style.opacity = 1;
                    }else{
                        input_word_align[i][k].style.opacity = .5;
                    }
                }
            }else{
                input_word_show[i].style.textAlign = "right";
                for(let k=0;k<3;k++){
                    if(k===j){
                        input_word_align[i][k].style.opacity = 1;
                    }else{
                        input_word_align[i][k].style.opacity = .5;
                    }
                }
            }
        });
    }
}






let show_logo_up = document.getElementById("show_logo_up");
let show_logo_down = document.getElementById("show_logo_down");
let show_logo_left = document.getElementById("show_logo_left");
let show_logo_right = document.getElementById("show_logo_right");

let show_logo_move = 2;

let file_upload = document.getElementById("file_upload");

let limit_offsetTop;
let limit_offsetLeft;
let limit_offsetTop_t;
let limit_offsetLeft_t;


file_upload.addEventListener("change", function(){
    
    let reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load", function(){
        show_logo.src = this.result;
    });

    show_logo_up.style.opacity = 1;
    show_logo_down.style.opacity = 1;
    show_logo_left.style.opacity = 1;
    show_logo_right.style.opacity = 1;

    limit_offsetTop_t = 0;
    limit_offsetLeft_t = 0;

    show_logo.removeAttribute("style")

});


show_logo_up.addEventListener("click", function(){

    if(file_upload.files.length !== 0){
        
        if(Number(show_logo.offsetTop) > 0 ){
            show_logo.style.top = (Number(show_logo.offsetTop) - show_logo_move) + 'px';
            if(show_logo_down.style.opacity === '0.5'){
                show_logo_down.style.opacity = 1;
            }
        }else{
            this.style.opacity = .5;
        }
    }
});

show_logo_down.addEventListener("click", function(){

    if(file_upload.files.length !== 0){

        if(limit_offsetTop_t === 0){
            limit_offsetTop = Number(input_word_show_box.scrollHeight)-Number(show_logo.scrollHeight);
            console.log(limit_offsetTop);
            limit_offsetTop_t = 1;
        }

        if(Number(show_logo.offsetTop) < limit_offsetTop ){
            show_logo.style.top = (Number(show_logo.offsetTop) + show_logo_move) + 'px';
            if(show_logo_up.style.opacity === '0.5'){
                show_logo_up.style.opacity = 1;
            }
        }else{
            this.style.opacity = .5;
        }
    }
});

show_logo_left.addEventListener("click", function(){

    if(file_upload.files.length !== 0){

        if(Number(show_logo.offsetLeft) > 0 ){
            show_logo.style.left = (Number(show_logo.offsetLeft) - show_logo_move) + 'px';
            if(show_logo_right.style.opacity === '0.5'){
                show_logo_right.style.opacity = 1;
            }
        }else{
            this.style.opacity = .5;
        }
    }
});

show_logo_right.addEventListener("click", function(){

    if(file_upload.files.length !== 0){

        if(limit_offsetLeft_t === 0){
            limit_offsetLeft = Number(input_word_show_box.scrollWidth)-Number(show_logo.scrollWidth);
            limit_offsetLeft_t = 1;
        }

        if(Number(show_logo.offsetLeft) < limit_offsetLeft ){
            show_logo.style.left = (Number(show_logo.offsetLeft) + show_logo_move) + 'px';
            if(show_logo_left.style.opacity === '0.5'){
                show_logo_left.style.opacity = 1;
            }
        }else{
            this.style.opacity = .5;
        }
    }
});