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