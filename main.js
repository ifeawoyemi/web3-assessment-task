const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("error_message");

const submitBtn = document.getElementById("submitBtn");


/*username validate*/
username.addEventListener("input", 
 ()=> {
    userInput();
});


function userInput() {
    for(let i = 0; i<username.value.length; i++){
        if(username.value.[i].match(/[a-zA-Z]/g)){
            username.value = "";
            document.getElementById("error_message").style.visibility = "visible";
        }
    }
}


/*email validate */
email.addEventListener("input", ()=>{
    emailInput();
})

function emailInput(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.value.match(validRegex)){
        document.getElementById("error_message").style.visibility = "hidden";
    }else{
        document.getElementById("error_message").style.visibility = "visible";
    }

}

/*password validate */
password.addEventListener("input", ()=>{
    passwordInput();
});

function passwordInput(){
    if(password.value < 8){
        document.getElementById("error_message").style.visibility = "visible"
    }
}

/*confirmpassword validate */
passwordConfirm.addEventListener("input", ()=>{
    confirmInput();
})

function confirmInput(){
    if(password != confirmPassword)
    return false;
}

submitBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    username.ariaChecked;
    email.ariaChecked;
    password.ariaChecked;
    confirmPassword.checked;
    alert("registration successful");
})