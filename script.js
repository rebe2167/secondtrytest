window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}

//
//    document.querySelector("#menuknap").addEventListener("click", burgerMenuShow);
//}
//
//function burgerMenuShow() {
//    console.log("burgerMenuShow");
//
//    document.querySelector("#menu").classList.remove("hidden");
//
//    document.querySelector("#menuknap").addEventListener("click", hideBurgerMenu);
//}
//
//function hideBurgerMenu() {
//
//    document.querySelector("#menu").classList.add("hidden");
//}


function myFunction() {
    var element = document.getElementById("menu");
    element.classList.toggle("hidden");
}
