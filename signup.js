var menu = document.getElementById("menu-box");
var menuButton = document.getElementById("menu-bar-button");


menuButton.addEventListener("mouseover", changeBg)
menuButton.addEventListener("click", displayMenu);
menuButton.addEventListener("mouseout", rechangeBg);

function changeBg(){
    menuButton.style.borderRadius = '25px';
    menuButton.style.background = '#97a5cc';
}
function displayMenu(){
    if(menu.style.visibility==="hidden"){
        menu.style.visibility='visible';
    }else{
        menu.style.visibility='hidden';
    }
    menuButton.style.background ='#a1bfec';
}
function rechangeBg(){
    menuButton.style.background = 'none';
}

var required = document.createElement("h6");

function requiredFName(){
    if(required === ""){
        console.log("First name is required");
    }
}