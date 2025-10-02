
const hijo2 = document.getElementById("hijo2");
const info = document.getElementById("info");

const padre = hijo2.parentElement;

const hijos = padre.children;

const hermano = hijo2.nextElementSibling;

info.innerHTML = `
  Padre: ${padre.tagName} con id="${padre.id}" <br>
  Total de hijos: ${hijos.length} <br>
  Hermano siguiente: ${hermano.textContent}
`;