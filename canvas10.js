var lienzo = document.getElementById("canvas10");
var papel = lienzo.getContext("2d");
var Paisaje = new Image();

Paisaje.src =
  "https://www.entornoturistico.com/wp-content/uploads/2022/04/Flores-de-sakura-en-Japo%CC%81n-1024x682.jpg";
Paisaje.addEventListener("load", dibujar);

function dibujar() {
  papel.drawImage(Paisaje, 600, 0, 100, 100);
}
