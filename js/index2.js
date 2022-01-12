function likear(elemento) {
    let componente = elemento.parentElement.querySelector('.cantidadLikes').querySelector('span')
    let valor = componente.innerText;
    valor = Number(valor);
    valor++;
    componente.innerText = valor;
}