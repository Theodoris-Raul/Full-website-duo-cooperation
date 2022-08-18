var createButton = document.getElementById("create_button");
var email = document.getElementById("email");
var rePassword = document.getElementById("repsw");
var username = document.getElementById("uname");
var password = document.getElementById("psw");
var terms = document.getElementById("terms");

createButton.addEventListener("click", (e) => {
    e.preventDefault();

    var regExUsername = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    var regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var regExPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    $(document).ready(function(){
        if (username.value.length == 0
            || email.value.length == 0
            || password.value.length == 0
            || rePassword.value.length == 0
        )
        {
            $("#required_fields").show();
            setTimeout(function() { $("#required_fields").hide(); }, 2000);
        }
        else if (rePassword.value != password.value) {
            $("#matching_passwords").show();
            setTimeout(function() { $("#matching_passwords").hide(); }, 2000);
        }
        else if (!(username.value.match(regExUsername))
            || !(email.value.match(regExEmail))
            || !(password.value.match(regExPassword))
            )
        {
            $("#login-error-msg").show();
            setTimeout(function() { $("#login-error-msg").hide(); }, 2000);
        }
        else if ($("#terms").prop("checked") == false) {
            $("#check_div").css({"border": "2px solid red"})
            setTimeout(function() { $("#check_div").removeAttr("style"); }, 2000);
        }
        else {
            $("#login-success-msg").show();
            setTimeout(function() { $("#login-success-msg").hide(); }, 2000);
        }
    })
})