var email = document.getElementById("email");
var password = document.getElementById("psw");
var logErrorMsg = document.getElementById("login-error-msg");
var logSuccessMsg = document.getElementById("login-success-msg");
var loginButton = document.getElementById("login_button");
var email_val_suggestion = document.getElementById("email_validation")
var password_val_suggestion = document.getElementById("password_validation")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var regEx2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if (email.value.match(regEx) && password.value.match(regEx2)) {
        logSuccessMsg.style.opacity = 1;
        return true
    }
    else {
        logErrorMsg.style.opacity = 1;
        return false;
    }    
})

password.addEventListener("mouseover", (e) => {
    password_val_suggestion.style.opacity = 1;
}
)

password.addEventListener("mouseout", (e) => {
    password_val_suggestion.style.opacity = 0;
}
)