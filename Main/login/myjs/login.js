var email = document.getElementById("email");
var password = document.getElementById("psw");
var logErrorMsg = document.getElementById("login-error-msg");
var logSuccessMsg = document.getElementById("login-success-msg");
var loginButton = document.getElementById("login_button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.value.match(regEx)) {
        logSuccessMsg.style.opacity = 1;
        return true
    }
    else {
        logErrorMsg.style.opacity = 1;
        return false;
    }
    
})
