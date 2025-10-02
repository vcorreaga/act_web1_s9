

const parrafo = document.getElementById("texto");
const boton = document.getElementById("btn");


boton.addEventListener("click", () => {
  parrafo.textContent = "Texto cambiado usando textContent.";
  parrafo.innerHTML += " <strong>Y aquí usamos innerHTML.</strong>";
});