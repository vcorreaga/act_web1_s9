

const info = document.getElementById("info");

let tituloPagina = document.title;
let urlPagina = document.URL;

info.textContent = "Título: " + tituloPagina + " | URL actual: " + urlPagina;