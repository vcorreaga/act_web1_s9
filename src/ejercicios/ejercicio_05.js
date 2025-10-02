
const img = document.getElementById("finca");
const enlace = document.getElementById("enlace");
const btn = document.getElementById("cambiar");

btn.addEventListener("click", () => {

  img.setAttribute("src", "../assets/images/finca-cafetera.jpg");
  img.setAttribute("alt", "Finca Cafetera en Salento");
  img.setAttribute("width", "400");

  enlace.setAttribute("href", "https://www.quindio.gov.co/");
  enlace.textContent = "Ir al sitio oficial del Quindío";
});