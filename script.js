/* Toggle de opciones móviles */
const mobileButton = document.getElementById("mobileOptionsBtn");
const mobileMenu = document.getElementById("mobileSidebar");

mobileButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("d-none");
});


/* --- ROTATING TEXT (REEMPLAZA CAROUSEL DE BOOTSTRAP) --- */

const frases = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus."
];

const texto = document.querySelector(".changing-line");

let pointer = 0;

function cambiarLinea() {
    texto.style.opacity = 0;

    setTimeout(() => {
        pointer = (pointer + 1) % frases.length;
        texto.textContent = frases[pointer];
        texto.style.opacity = 1;
    }, 300);
}

setInterval(cambiarLinea, 2000);
