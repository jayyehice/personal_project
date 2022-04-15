// page_product

function change_show(small_product){
    let img_path = small_product.getAttribute("src");
    // console.log(img_path)
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