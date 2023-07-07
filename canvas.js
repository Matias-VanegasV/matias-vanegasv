var lienzo1 = document.getElementById("lienzo");
var papel1 = lienzo.getContext("2d");
var lienzo2 = document.getElementById("canvas2");
var papel2 = lienzo2.getContext("2d");
var imagen1 = new Image();
imagen1.src =
  "https://as.com/futbol/2021/12/06/champions/1638802702_622263.html";
imagen1.addEventListener("load", dibujar);

function dibujar() {
  papel1.drawImage(imagen1, 200, 100, 200, 100);
  papel2.drawImage(imagen1, 300, 0, 100, 200);
}
