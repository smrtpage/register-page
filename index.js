const hideBtn = document.getElementById("hide-btn");
const removeTextBtn= document.getElementById("cancel-text");
const input = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const signInBtn = document.getElementById("sign-in-btn");

removeTextBtn.addEventListener("click",() =>{
    if(input.value){
        input.value = "";
    }
});

signInBtn.addEventListener("click", ()=>{
    if(input.value && passwordInput.value){
        alert("Registration was successfull");
    }else{
        alert("fill in your info!");
    }
});


hideBtn.addEventListener("click", toggle);
var state = false;
function toggle(){
    if(state){
        passwordInput.setAttribute("type", "password");
        state = false;
        hideBtn.style.color = "#000";
    }
    else{
        passwordInput.setAttribute("type", "text");
        state = true;
        hideBtn.style.color = "blue";
    }
}
// hideBtn.addEventListener("click", ()=>{
//     if(passwordInput.value){
//         passwordInput.value = passwordInput.value;
//     }
// });