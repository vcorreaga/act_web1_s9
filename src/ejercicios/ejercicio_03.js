const elementos = document.getElementsByClassName("item");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.color = "red";
  elementos[i].style.fontSize = "20px";
}

const resultado = document.getElementById("resultado");
resultado.textContent = "Hay " + elementos.length + " elementos con la clase 'item'.";