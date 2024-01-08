const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

function toggleDisplay(elementId, buttonText) {
    var element = document.getElementById(elementId);
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    document.querySelector(buttonText).textContent = (element.style.display === 'none') ? 'Leer Más' : 'Leer Menos';
}

function mostrarMasInfo() {
    toggleDisplay('parrafoOculto', '.btn');
}

function mostrarTextoCompleto() {
    toggleDisplay('textoCompleto', '.read');
}

function verTexto() {
    toggleDisplay('txtCompleto', '.read');
}

function mostrarMas() {
    toggleDisplay('txtEntero', '.read');
}


