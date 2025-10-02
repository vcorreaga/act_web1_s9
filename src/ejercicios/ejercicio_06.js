const texto = document.getElementById("texto");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");
const btnToggle = document.getElementById("btnToggle");

btnAdd.addEventListener("click", () => {
  texto.classList.add("resaltado");
});

btnRemove.addEventListener("click", () => {
  texto.classList.remove("resaltado");
});

btnToggle.addEventListener("click", () => {
  texto.classList.toggle("resaltado");
});