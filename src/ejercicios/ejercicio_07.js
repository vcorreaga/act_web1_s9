


const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

let contador = 1;

btnAgregar.addEventListener("click", () => {

  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = `Elemento ${contador}`;
  contador++;

  lista.appendChild(nuevoElemento);
});