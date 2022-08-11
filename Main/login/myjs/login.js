function validate()
{
    var username=document.getElementById("email").value;
    var password=document.getElementById("psw").value;
    if (!username.includes("@"))
    {
        alert("Invalid Email / Password");
    }
}