const bar = document.getElementById('bar');
const tutup = document.getElementById('tutup');
const a = document.getElementById('menu');

if (bar){
    bar.addEventListener('click',()=>{
        a.classList.add('active');
    })
}

if (tutup){
    tutup.addEventListener('click',()=>{
        a.classList.remove('active');
    })
}

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const country = document.querySelector("#country");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){

     clearMessages();
     let errorFlag= false;

     if(nameInput.value.length < 1){
         errorNodes[0].innerText = "Name cannot be blank";
         nameInput.classList.add("error-border");
         errorFlag = true;
     }
     if(!emailvalid(email.value)){
         errorNodes[1].innerText = "Invalid email address";
         email.classList.add("error-border");
         errorFlag = true;
     }
     if(phone.value.length < 1){
        errorNodes[2].innerText = "Phone cannot be blank";
        phone.classList.add("error-border");
        errorFlag = true;
    }
    if(country.value == 0){
        errorNodes[3].innerText = "Select a country";
        country.classList.add("error-border");
        errorFlag = true;
    }
    if(!agree.checked){
      alert("You have to agree with the Privacy & Cookie Policy and Terms & Conditions.");
      errorFlag = true;
    }
    
    if(!errorFlag){
        document.getElementById("submit").addEventListener("click", Submitted);
        if(submit.value == "SUBSCRIBE"){
            Submitted();
        }
     }
}

function Submitted() {
    window.location.href="subscribed.html";
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText="";
    }
    success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
    country.classList.remove("error-border");
 }

function emailvalid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
