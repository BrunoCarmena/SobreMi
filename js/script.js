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
    document.getElementById(buttonText).textContent = (element.style.display === 'none') ? 'Leer Más' : 'Leer Menos';
}

function mostrarMasInfo() {
    toggleDisplay('parrafoOculto', 'mostrarMasInfoBtn');
}

function mostrarTextoCompleto() {
    toggleDisplay('textoCompleto', 'mostrarTextoCompletoBtn');
}

function verTexto() {
    toggleDisplay('txtCompleto', 'verTextoBtn');
}

function mostrarMas() {
    toggleDisplay('txtEntero', 'mostrarMasBtn');
}



