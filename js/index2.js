var cantidadLikes = [1,1,1];
var texto1 = document.querySelector("#likesNeil");
var texto2 = document.querySelector("#likesNichole");
var texto3 = document.querySelector("#likesJim");

function likear(elemento) {
    if (elemento.id == "btnNeil") {
        cantidadLikes[0]++;
        texto1.innerText = cantidadLikes[0] + " like(s)";
    }
    else if (elemento.id == "btnNichole") {
        cantidadLikes[1]++;
        texto2.innerText = cantidadLikes[1] + " like(s)";
    }
    else if (elemento.id == "btnJim") {
        cantidadLikes[2]++;
        texto3.innerText = cantidadLikes[2] + " like(s)";
    }
}