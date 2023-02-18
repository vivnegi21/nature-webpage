var userName = document.getElementById('uName');
var loginForm = document.getElementById('login-Form');
userName.addEventListener('input',function (event) {
    var userValue  = event.target.value;
    userValue = userValue.toUpperCase();
    //console.log(userValue);
    userName.value = userValue;
});

userName.addEventListener('focus',function (){
    console.log("element focused");

});

loginForm.addEventListener('submit', function() {
    console.log("event Licked");
});