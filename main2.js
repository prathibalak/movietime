    
    
    function logout() {
    //The signOut method is used to sign the user out of the application https://authenticationapp-60023061666.development.catalystserverless.in/__catalyst/auth/login
    var redirectURL =  "https://authenticationapp-60023061666.development.catalystserverless.in/__catalyst/auth/login";
    console.log(redirectURL)
    var auth = catalyst.auth;
    auth.signOut(redirectURL);
    window.location.href = "https://authenticationapp-60023061666.development.catalystserverless.in/__catalyst/auth/login";
    }
    function showDiv(value) {
    var value = value;
    var logindiv = document.getElementById("login");
    var signupdiv = document.getElementById("signup");
    var forgotpwddiv = document.getElementById("forgotpwd");
    var buttonsdiv = document.getElementById("buttons");
    if (value == "pwd") {
    logindiv.style.display = "none";
    signupdiv.style.display = "none";
    forgotpwddiv.style.display = "block";
    buttonsdiv.style.display = "none";
    } else if (value == "signup") {
    logindiv.style.display = "none";
    signupdiv.style.display = "block";
    forgotpwddiv.style.display = "none";
    buttonsdiv.style.display = "none";
    }
    }