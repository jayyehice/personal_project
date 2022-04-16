

let intro_img = document.getElementById("intro_img");

function intro_img_info(){
    let intro_img_path = intro_img.getAttribute("src").split("/");
    let intro_img_name = intro_img_path[intro_img_path.length - 1];
    let intro_img_path_rest = intro_img.getAttribute("src").replace(intro_img_name,"");

    intro_img_name = intro_img_name.replace(".jpg","");
    let intro_img_id = intro_img_name.split("_");

    if(intro_img_id.length === 1){
        intro_img_id.push('');
    }else if(intro_img_id.length === 2){
        intro_img_id[1] = "_" + intro_img_id[1];
    }

    
    intro_img_id.push(intro_img_path_rest);

    return intro_img_id;
}

function intro_img_color(choose_color){

    let intro_img_id = intro_img_info();

    document.getElementById(intro_img_id[0]).classList.add("unchoose");
    choose_color.classList.remove("unchoose");

    intro_img.src = intro_img_id[2] + choose_color.id + intro_img_id[1] +'.jpg';
}

function intro_img_case(choose_case){

    let intro_img_id = intro_img_info();

    // console.log(intro_img_id);
    document.getElementById(intro_img_id[1]).classList.add("unchoose");
    choose_case.classList.remove("unchoose");

    intro_img.src = intro_img_id[2] + intro_img_id[0] + choose_case.id +'.jpg';
}


//先抓取所有color_btn
let all_color = document.getElementsByClassName("color_btn");

for(let i=0; i<all_color.length; i++){
    all_color[i].addEventListener("click",function(){

        //console.log(this.getAttribute("id")[0]);

        if(this.getAttribute("id")[0] === '_'){
            intro_img_case(this);
        }else{
            intro_img_color(this);
        }
    })
};
