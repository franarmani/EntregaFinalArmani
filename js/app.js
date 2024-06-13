let menuVisible = false;

function mostrarOcultarMenu() {
    let nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

document.addEventListener("click", function(event) {
    let nav = document.getElementById("nav");
    let iconoNav = document.getElementById("icono-nav");
    if (menuVisible && !nav.contains(event.target) && !iconoNav.contains(event.target)) {
        nav.classList.remove("responsive");
        menuVisible = false;
    }
});

function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}
