
let pass1 = document.querySelector("#pass");
let pass2 = document.querySelector("#con_pass");
let error = document.querySelector(".error")

pass1.addEventListener("input", passCheck);
pass2.addEventListener("input", passCheck);

function passCheck(){
    if(pass1.value != pass2.value){
        error.textContent = "*Passwords do not match";
        pass1.style.borderColor = "red";
        pass2.style.borderColor = "red";
        // outline-color: skyblue;
    }
    else{
        error.textContent = "";
        pass1.style.borderColor = "#E5E7EB"
        pass2.style.borderColor = "#E5E7EB";
    }
}
