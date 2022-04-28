
if(window.innerWidth<1200){
    //console.log(window.innerWidth);
    
    let slider_ul = document.getElementById("slider_ul");
    let slider_ul_li = slider_ul.querySelectorAll("li");

    let slider_ol = document.getElementById("slider_ol");
    let slider_ol_li = slider_ol.querySelectorAll("li");


    let silder_i = 1; //從第二張開始切換
    let silder_j;
    let silder_k=slider_ul_li[0].scrollWidth;
    //console.log(k);
    
    
    setInterval(e => {
        
        silder_j=silder_i-1;

        if(silder_i === 0){
            silder_j = (slider_ul_li.length - 1);
        }
        

        if(silder_i === slider_ul_li.length){
            silder_i=0;
        }

        slider_ul_li[silder_i].style.right = 0;
        slider_ul_li[silder_i].style.opacity = 1;
        slider_ol_li[silder_i].style.opacity = 1;

        slider_ul_li[silder_j].style.opacity = 0;
        slider_ul_li[silder_j].style.right = silder_k + 'px';
        slider_ol_li[silder_j].removeAttribute("style")
        

        setTimeout(e => {
            slider_ul_li[silder_j].removeAttribute("style");
        },1000)
        
        silder_i++

        for(let i=0; i<slider_ol_li.length; i++){
            slider_ol_li[i].addEventListener("click", e => {

                console.log(i);

                for(let k=0; k<slider_ol_li.length; k++){
                    slider_ol_li[k].removeAttribute("style")
                    slider_ul_li[k].style.opacity = 0;
                    slider_ul_li[k].removeAttribute("style");
                }

                let j = i-1;

                if(i === 0){
                    j=(slider_ol_li.length-1);
                }


                slider_ul_li[i].style.right = 0;
                slider_ul_li[i].style.opacity = 1;
                slider_ol_li[i].style.opacity = 1;

                silder_i = i;

            });
        }

    },5000);
    
}
