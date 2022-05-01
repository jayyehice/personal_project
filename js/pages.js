//查詢參數
let search_obj = new URLSearchParams(location.search);
let prod_num = search_obj.get("pages")

//上方圖片
let show_img = document.getElementById("show_img");
let small_product1 = document.getElementById("small_product1");
let small_product2 = document.getElementById("small_product2");
let small_product3 = document.getElementById("small_product3");
let small_product4 = document.getElementById("small_product4");

//color
let color_box = document.getElementById("color_box");
let shell_color_box = document.getElementById("shell_color_box");

// intro_size
let intro_size = document.getElementById("intro_size");
let intro_size_button = document.getElementById("intro_size_button");

// intro_print_range
let intro_print_range = document.getElementById("intro_print_range");
let intro_print_range_button = document.getElementById("intro_print_range_button");

// 標題
let pages_title = document.getElementsByClassName("pages_title");



// ------------------------- loading pages content -------------------------
let page_products={
    "1":{
        "name":"旋轉碟", 
        "up_pic":["./img/page01.jpg", "./img/page02.jpg", "./img/page03.jpg", "./img/page04.jpg"],
        "down_pic":["./img/usb/red_white.jpg", "./img/usb/intro_size.png", "./img/usb/intro_print_range.png", "./img/usb/intro_size_horizontal.png", "./img/usb/intro_print_range_horizontal.png"],
        "color":[
                    ["red", "紅"], ["orange", "橘"], ["yellow", "黃"], 
                    ["green", "綠"], ["blue", "藍"], ["pink", "粉"], 
                    ["purple", "紫"], ["black", "黑"], ["silver", "銀"]
                ],
        "shell_color":[["_white", "白"], ["_black", "黑"]],
        "size_text":["58 x 19 x 10 mm", "24 x 14 mm"]
    },
    "2":{
        "name":"鋁管碟", 
        "up_pic":["./img/products02.jpg", "", "", ""],
        "down_pic":["./img/al/black.jpg", "./img/al/intro_size.png", "./img/al/intro_print_range.png", "./img/al/intro_size_horizontal.png", "./img/al/intro_print_range_horizontal.png"],
        "color":[["black", "黑"], ["silver", "銀"], ["purple", "紫"], ["red", "紅"]],
        "shell_color":[],
        "size_text":["60 x 17 x 7.5 mm", "35 x 12 mm"]
    },
    "3":{
        "name":"迷你碟", 
        "up_pic":["./img/products03.jpg", "", "", ""],
        "down_pic":["./img/mini/black.jpg", "./img/mini/intro_size.png", "./img/mini/intro_print_range.png", "./img/mini/intro_size_horizontal.png", "./img/mini/intro_print_range_horizontal.png"],
        "color":[["black", "黑"]],
        "shell_color":[],
        "size_text":["34.5 x 12 x 4.5 mm", "10 x 28 mm"]
    },
    "4":{
        "name":"小夜燈", 
        "up_pic":["./img/products04.jpg", "./img/products04-02.jpg", "", ""],
        "down_pic":["./img/night/white.jpg", "./img/night/intro_size.png", "./img/night/intro_print_range.png", "./img/night/intro_size_horizontal.png", "./img/night/intro_print_range_horizontal.png"],
        "color":[["white", "白"]],
        "shell_color":[],
        "size_text":["47 x 26 x 14.5 mm", "20 x 30 mm"]
    }
};


// 改標題
for(let i=0; i<pages_title.length; i++){
    pages_title[i].innerHTML = page_products[prod_num]["name"];
};

//上方圖片
show_img.src = page_products[prod_num]["up_pic"][0];
small_product1.src = page_products[prod_num]["up_pic"][0];
small_product2.src = page_products[prod_num]["up_pic"][1];
small_product3.src = page_products[prod_num]["up_pic"][2];
small_product4.src = page_products[prod_num]["up_pic"][3];

//下方圖片
intro_img.src = page_products[prod_num]["down_pic"][0];
intro_size.src = page_products[prod_num]["down_pic"][1];
intro_print_range.src = page_products[prod_num]["down_pic"][2];

if(window.innerWidth < 767.98){ //螢幕寬度低於768改方向
    intro_size.src = page_products[prod_num]["down_pic"][3];
    intro_print_range.src = page_products[prod_num]["down_pic"][4];
}


//color
color_box.insertAdjacentHTML("beforeend", '<p class="color_btn" id="'+page_products[prod_num]["color"][0][0]+'">'+page_products[prod_num]["color"][0][1]+'</p>');

for(let i=1; i<page_products[prod_num]["color"].length; i++){
    color_box.insertAdjacentHTML("beforeend", '<p class="color_btn unchoose" id="'+page_products[prod_num]["color"][i][0]+'">'+page_products[prod_num]["color"][i][1]+'</p>');
};

//console.log(page_products["4"]["shell_color"].length);
if(page_products[prod_num]["shell_color"].length != 0){
    shell_color_box.insertAdjacentHTML("beforeend",'<p class="color_btn" id="'+page_products[prod_num]["shell_color"][0][0]+'">'+page_products[prod_num]["shell_color"][0][1]+'</p>');

    for(let i=1; i<page_products[prod_num]["shell_color"].length; i++){
        shell_color_box.insertAdjacentHTML("beforeend",'<p class="color_btn unchoose" id="'+page_products[prod_num]["shell_color"][i][0]+'">'+page_products[prod_num]["shell_color"][i][1]+'</p>');
    };
}else{
    shell_color_box.closest("li").remove();
}




//size text
intro_size_button.innerHTML = page_products[prod_num]["size_text"][0];
intro_print_range_button.innerHTML = page_products[prod_num]["size_text"][1];







//  ------------------------- change content -------------------------
// show big pic change

function change_show(small_product){
    let img_path = small_product.getAttribute("src");
    // console.log(img_path)
    show_img.src = img_path;
}


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




// intro_size

intro_size_button.addEventListener("mouseover",function(){
    intro_size.style.opacity = 1;
})

intro_size_button.addEventListener("mouseout",function(){
    intro_size.style.opacity = 0;
})


// intro_print_range

intro_print_range_button.addEventListener("mouseover",function(){
    intro_print_range.style.opacity = 1;
})

intro_print_range_button.addEventListener("mouseout",function(){
    intro_print_range.style.opacity = 0;
})