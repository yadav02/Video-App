var loginForm = document.getElementById('login-form')
loginForm.onsubmit = function(e){
    e.preventDefault()
    // console.log(e.target.username.value);
    // console.log(e.target.password.value);
var loginData= {
    "username":e.target.username.value,
    "password":e.target.password.value
} 
    
var xhttp = new XMLHttpRequest()
    xhttp.open('POST', 'http://5dfb77ac0301690014b8fbce.mockapi.io/user', true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4){
        alert("Login Successfull!!");
        var responce = JSON.parse(this.responseText)
        localStorage.setItem('userId', responce.id)
        localStorage.setItem('isUserLoggedIn', true)
        location.assign("./index.html")
        }
    }
    xhttp.send(JSON.stringify(loginData));     
}