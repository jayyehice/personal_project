let show_img = document.getElementById("show_img");
let small_product1 = document.getElementById("small_product1");
let small_product2 = document.getElementById("small_product2");
let small_product3 = document.getElementById("small_product3");
let small_product4 = document.getElementById("small_product4");


// loading pages content
let page_products={
    "1":["旋轉碟", "./img/page01.jpg", "./img/page02.jpg", "./img/page03.jpg", "./img/page04.jpg"],
    "2":["鋁管碟", "./img/products02.jpg", "", "", ""],
    "3":["迷你碟", "./img/products03.jpg", "", "", ""],
    "4":["小夜燈", "./img/products04.jpg", "./img/products04-02.jpg", "", ""]
};


var search_obj = new URLSearchParams(location.search);
//console.log(page_products[search_obj.get("pages")][0]);

let pages_title = document.getElementsByClassName("pages_title");

for(let i=0; i<pages_title.length; i++){
    pages_title[i].innerHTML = page_products[search_obj.get("pages")][0];
};

show_img.src = page_products[search_obj.get("pages")][1];
small_product1.src = page_products[search_obj.get("pages")][1];
small_product2.src = page_products[search_obj.get("pages")][2];
small_product3.src = page_products[search_obj.get("pages")][3];
small_product4.src = page_products[search_obj.get("pages")][4];




// show big pic

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
let intro_size = document.getElementById("intro_size");
let intro_size_button = document.getElementById("intro_size_button");

intro_size_button.addEventListener("mouseover",function(){
    intro_size.style.opacity = 1;
})

intro_size_button.addEventListener("mouseout",function(){
    intro_size.style.opacity = 0;
})


// intro_print_range
let intro_print_range = document.getElementById("intro_print_range");
let intro_print_range_button = document.getElementById("intro_print_range_button");

intro_print_range_button.addEventListener("mouseover",function(){
    intro_print_range.style.opacity = 1;
})

intro_print_range_button.addEventListener("mouseout",function(){
    intro_print_range.style.opacity = 0;
})