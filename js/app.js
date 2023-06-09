let inputUser = document.getElementById("input-check");
let inputPassword = document.getElementById("input-check");
let buttonSubmit = document.getElementById("submit-button");

if(inputUser.oninput.contains("admin@a.com")){
    console.log("hola")
}

buttonSubmit.addEventListener("submit", verificar())

