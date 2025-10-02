

const btnClick = document.getElementById("btnClick");
const caja = document.getElementById("caja");
const mensaje = document.getElementById("mensaje");

btnClick.addEventListener("click", () => {
  mensaje.textContent = "¡Hiciste clic en el botón!";
  mensaje.style.color = "green";
});

caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "lightblue";
  mensaje.textContent = "Estás sobre la caja 🖱️";
  mensaje.style.color = "blue";
});

caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightgray";
  mensaje.textContent = "Saliste de la caja 🚪";
  mensaje.style.color = "red";
});