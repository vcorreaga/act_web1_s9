
const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

  if (usuario.value.trim() === "" || contrasena.value.trim() === "") {
    mensaje.textContent = "Todos los campos son obligatorios";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = `Bienvenido, ${usuario.value}`;
    mensaje.style.color = "green";

    usuario.value = "";
    contrasena.value = "";
  }
});