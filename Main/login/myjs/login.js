var email = document.getElementById("email");
var password = document.getElementById("psw");
var loginButton = document.getElementById("login_button");
var email_val_suggestion = document.getElementById("email_validation")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var regEx2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    $(document).ready(function(){
        if (email.value.match(regEx) && password.value.match(regEx2)) {
            $("#login-success-msg").show();
            setTimeout(function() { $("#login-success-msg").hide(); }, 2000);            
        }
        else if (email.value.length == 0 || password.value.length == 0) {
            $("#required_fields").show();
            setTimeout(function() { $("#required_fields").hide(); }, 2000);
        }
        else {
            $("#login-error-msg").show();
            setTimeout(function() { $("#login-error-msg").hide(); }, 2000);           
        }
    })    
})

$(document).ready(function(){
    $("#psw").mouseover(function(){
      $("#password_validation").show();
    });
  });

$(document).ready(function(){
$("#psw").mouseout(function(){
    $("#password_validation").hide();
});
});