function goToHomePage(){
    location.href = "../index.html";
}

///dummy data on localstorage
console.log("In script 4");

var obj = {
    user_login:"253456415486431"
}
let jobj= JSON.stringify(obj);

localStorage.setItem("user_login",jobj);
