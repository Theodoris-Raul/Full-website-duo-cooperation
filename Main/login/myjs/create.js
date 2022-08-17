var createButton = document.getElementById("create_button");
var email = document.getElementById("email");
var rePassword = document.getElementById("repsw");

createnButton.addEventListener("click", (e) => {
    e.preventDefault();

    var regExUsername = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    var regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var regExPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if (
        $(document).ready(function() {
            $("#uname").value.match(regExUsername);
        })
        &&
        $(document).ready(function() {
            $("#email").value.match(regExEmail);
        })
        &&
        $(document).ready(function() {
            $("#psw").value.match(regExPassword);
        })
        &&
        $(document).ready(function() {
            $("psw").value.match(rePassword);
        })
    )
        {
            $(document).ready(function(){
                $("#login-success-msg").show();
                setTimeout(function() { $("#login-success-msg").hide(); }, 2000);
            })
        }
    else {
        $(document).ready(function(){
            $("#login-error-msg").show();
            setTimeout(function() { $("#login-error-msg").hide(); }, 2000);
        })
    }
})