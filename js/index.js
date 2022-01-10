var cantidadLikes = 1;
var texto = document.querySelector(".cantidadLikes");

function likear() {
    cantidadLikes++;
    texto.innerText = cantidadLikes + " like(s)";
}