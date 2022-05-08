


let show_box = document.getElementById("show_box");
let show_logo = document.getElementById("show_logo");
let show_logo_temp = document.getElementById("show_logo_temp");




//-------------------------------示意圖 文字部分-------------------------------

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


//文字對齊

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




//-------------------------------示意圖 圖片部分-------------------------------

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


function removeImgBg(origin_img){
              
    const rgba = [255,255,255,255];
    const tolerance = 10;

    var imgData = null;
    const [r0,g0,b0,a0] = rgba;
    var r, g, b, a;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const w = origin_img.width;
    const h = origin_img.height;

    canvas.width = w;
    canvas.height = h;
    context.drawImage(origin_img, 0, 0, w, h);
    
    imgData = context.getImageData(0, 0, w, h);

    for(let i=0; i<imgData.data.length; i+=4){
        r = imgData.data[i];
        g = imgData.data[i+1];
        b = imgData.data[i+2];
        a = imgData.data[i+3];

        if(a != 0){

            const t=Math.sqrt((r-r0)**2 + (g-g0)**2 + (b-b0)**2 + (a-a0)**2);

            if (t<=tolerance){
            for(let j=0; j<4; j++){
                imgData.data[i+j] = 0;
            }
            }else{
                // console.log(t);
                for(let j=0; j<4; j++){
                    imgData.data[i+j] = 255;
                }
            }
        } 
    }

    context.putImageData(imgData, 0, 0);
    const newBase64 = canvas.toDataURL();

    return newBase64;
}


//上傳圖片
file_upload.addEventListener("change", function(){
    
    let reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load", function(){
        show_logo_temp.src = this.result;
        //console.log(show_logo.width, show_logo.height);
        setTimeout(function(){
            show_logo.src = removeImgBg(show_logo_temp);
        },100);
        
    });

    show_logo_up.style.opacity = 1;
    show_logo_down.style.opacity = 1;
    show_logo_left.style.opacity = 1;
    show_logo_right.style.opacity = 1;

    limit_offsetTop_t = 0;
    limit_offsetLeft_t = 0;

    //回復初始值
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



//-------------------------------送出/清除 輸入內容-------------------------------

let send_btn = document.getElementById("send_btn");
let clear_btn = document.getElementById("clear_btn");

clear_btn.addEventListener("click", function(){

    for(let i=0; i<input_word.length; i++){
        input_word[i].value = "";
        input_word[i].removeAttribute("style");
        input_word_show[i].innerHTML="";
        input_word_show[i].removeAttribute("style"); 
    }

    show_logo.src = "";

});

send_btn.addEventListener("click", function(){
    let check1 = false;
    let check2 = true;

    for(let i=0; i<input_word.length; i++){
        if(input_word[i].value != ""){
            check1 = true;
        }
    }

    if(show_logo.getAttribute("src").length == 0){
        check2 = false;
    }

    // console.log(input_word[0].value);
    
    if( check1 || check2 ){
        let r = confirm("確認送出圖稿?");
    }else{
        alert("請上傳圖檔或輸入文字後，再送出。\n謝謝!");
    }
    
});