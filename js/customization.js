

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
                    input_word_show_1.style.top = '5px';
                    input_word_show_2.style.top = '35px';
                    input_word_show_3.style.top = '65px';
                }else{
                    input_word_show_1.style.top = '20px';
                    input_word_show_2.style.top = '50px';
                }
            }else{
                if(input_word3.value.length >0){
                    input_word_show_1.style.top = '20px';
                    input_word_show_3.style.top = '50px';
                }else{
                    input_word_show_1.style.top = '35px';
                }
            }
        }else{
            if(input_word2.value.length >0){
                if(input_word3.value.length >0){
                    input_word_show_2.style.top = '20px';
                    input_word_show_3.style.top = '50px';
                }else{
                    input_word_show_2.style.top = '35px';
                }
            }else{
                if(input_word3.value.length >0){
                    input_word_show_3.style.top = '35px';
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

file_upload.addEventListener("change", function(){
    
    let reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load", function(){
        //console.log(this.result);
        show_logo.src = this.result;
    });

    show_logo_up.style.opacity = 1;
    show_logo_down.style.opacity = 1;
    show_logo_left.style.opacity = 1;
    show_logo_right.style.opacity = 1;

});


show_logo_up.addEventListener("click", function(){

    if(file_upload.files.length !== 0){
        //console.log(file_upload.files.length)
        if(Number(show_logo.offsetTop) > 137 ){
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
        //console.log(show_logo.offsetTop)
        if(Number(show_logo.offsetTop) < 178 ){
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
        // console.log(show_logo.offsetLeft)
        if(Number(show_logo.offsetLeft) > 65 ){
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
        // console.log(show_logo.offsetLeft)
        if(Number(show_logo.offsetLeft) < 112 ){
            show_logo.style.left = (Number(show_logo.offsetLeft) + show_logo_move) + 'px';
            if(show_logo_left.style.opacity === '0.5'){
                show_logo_left.style.opacity = 1;
            }
        }else{
            this.style.opacity = .5;
        }
    }
});