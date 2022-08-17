var email = document.getElementById("email");
var password = document.getElementById("psw");
var loginButton = document.getElementById("login_button");
var email_val_suggestion = document.getElementById("email_validation")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var regEx2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if (email.value.match(regEx) && password.value.match(regEx2)) {
        $(document).ready(function(){
            $("#login-success-msg").show();
            setTimeout(function() { $("#login-success-msg").hide(); }, 2000);            
        })
    }
    else if (email.value.length == 0) {
        $(document).ready(function(){
            $("#required_email").show();
            setTimeout(function() { $("#required_email").hide(); }, 2000);
        })
    }
    else if (password.value.length == 0) {
        $(document).ready(function(){
            $("#required_psw").show();
            setTimeout(function() { $("#required_psw").hide(); }, 2000);
        })
    }
    else {
        $(document).ready(function(){
            $("#login-error-msg").show();
            setTimeout(function() { $("#login-error-msg").hide(); }, 2000);           
        })
    }    
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