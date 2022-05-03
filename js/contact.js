const form = document.getElementsByTagName("form")[0].children;
const submit_data = document.getElementsByClassName("submit_data")[0];
const iframe = document.getElementsByTagName("iframe")[1];
let url = 'https://script.google.com/macros/s/AKfycby28oO4pCNPV9yGsQV58koGkd8vO9nG2w9V-w1P8eWNoENaBy46aJyl1pJ9zSt1V5N1eQ/exec?';

//console.log(form);




submit_data.addEventListener("click", function(){

    let send_data = true;
    let phone_test = /^09\d{8}$/;

    if(form[0].value.trim() == ""){
        send_data = false;
        form[0].value = "";
        form[0].classList.add("-error");
    }else{
        form[0].classList.remove("-error");
    }

    if(is.email(form[1].value)){
        form[1].classList.remove("-error");
    }else{
        send_data = false;
        form[1].classList.add("-error");
    }

    phone_test.test(form[2].value)

    if(phone_test.test(form[2].value)){
        form[2].classList.remove("-error");
    }else{
        send_data = false;
        form[2].classList.add("-error");
    }

    if(form[3].value.trim() == ""){
        send_data = false;
        form[3].value = "";
        form[3].classList.add("-error");
    }else{
        form[3].classList.remove("-error");
    }


    if(send_data){
        for(let i=0; i<(form.length-1); i++){
            if(i === (form.length-2)){
                url += form[i].getAttribute("data-name") + '=' + form[i].value;
            }else{
                url += form[i].getAttribute("data-name") + '=' + form[i].value + '&';
            }
            form[i].value = '';
        }

        let r = confirm("確認送出資料?")

        if(r){
            iframe.src = url;
        }
        
        
    }else{
        alert("請填寫正確資料");
    }
});