
    let email = document.querySelector(".email");
let password = document.querySelector(".password");
let btn = document.querySelector(".button");

email.addEventListener("input", checkinputs);
password.addEventListener("input", checkinputs);

function checkinputs() {
    console.log("function chal raha hai");

    if (email.value === "" || password.value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

checkinputs();
let form = document.querySelector(".login");
btn.addEventListener("click",function(){
    alert("submit");
    email.value ="";
    password.value ="";
})
  
