var lienzo = document.getElementById("canvas1");
var papel = lienzo.getContext("2d");
var Japon = new Image();

Japon.src =
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/a6/88/con-la-primavera-in-giappone.jpg?w=700&h=-1&s=1";
Japon.addEventListener("load", dibujar);

function dibujar() {
  papel.drawImage(Japon, -10, 100);
}
