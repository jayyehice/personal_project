
// page_product

function change_show(small_product){
    let img_path = small_product.getAttribute("src");
    console.log(img_path)
    show_img.src = img_path;
}


let show_img = document.getElementById("show_img");
let small_product1 = document.getElementById("small_product1");
let small_product2 = document.getElementById("small_product2");
let small_product3 = document.getElementById("small_product3");
let small_product4 = document.getElementById("small_product4");

small_product1.addEventListener("click", function(){
    change_show(this)
})

small_product2.addEventListener("click", function(){
    change_show(this)
})

small_product3.addEventListener("click", function(){
    change_show(this)
})

small_product4.addEventListener("click", function(){
    change_show(this)
})


// page_intro

// let color = document.getElementsByClassName("color");

// console.log(color[0].style)

// for(let i=0; i<color.length; i++){
//     console.log(color[i].id)
//     console.log(color[i].style)
// };

let intro_img = document.getElementById("intro_img");

function intro_img_info(){
    let intro_img_path = intro_img.getAttribute("src").split("/");
    let intro_img_name = intro_img_path[intro_img_path.length - 1];
    let intro_img_path_rest = intro_img.getAttribute("src").replace(intro_img_name,"");

    intro_img_name = intro_img_name.replace(".jpg","");
    let intro_img_id = intro_img_name.split("_");
    intro_img_id[1] = "_" + intro_img_id[1];
    intro_img_id.push(intro_img_path_rest);

    return intro_img_id;
}

function intro_img_color(chosse_color){

    let intro_img_id = intro_img_info();

    document.getElementById(intro_img_id[0]).classList.add("unchoose");
    chosse_color.classList.remove("unchoose");

    intro_img.src = intro_img_id[2] + chosse_color.id + intro_img_id[1] +'.jpg';
}

function intro_img_case(chosse_case){

    let intro_img_id = intro_img_info();

    console.log(intro_img_id);
    document.getElementById(intro_img_id[1]).classList.add("unchoose");
    chosse_case.classList.remove("unchoose");

    intro_img.src = intro_img_id[2] + intro_img_id[0] + chosse_case.id +'.jpg';
}

document.getElementById("red").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("orange").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("yellow").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("green").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("blue").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("pink").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("purple").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("black").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("silver").addEventListener("click", function(){
    intro_img_color(this);
})

document.getElementById("_white").addEventListener("click", function(){
    intro_img_case(this);
})

document.getElementById("_black").addEventListener("click", function(){
    intro_img_case(this);
})