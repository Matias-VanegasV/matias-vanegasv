var lienzo1 = document.getElementById("canvas1");
var papel1 = lienzo1.getContext("2d");
var imagen1 = new Image();

var pos_x = 0;
var pos_y = 0;

imagen1.src =
  "https://img.asmedia.epimg.net/resizer/NF1bPM0YjtQCj70vFqUQrVnVaDg=/644x362/filters:focal(2107x1623:2117x1633)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/UNJXA4ZEN5H4QK3NL7POMPLDOY.jpg";

imagen1.addEventListener("load", dibujar);

function dibujar() {
  papel1.drawImage(imagen1, 0, 0);
}
setInterval(mover_der, 30);

function mover_der() {
  pos_x = pos_x + 5;
  if (pos_x == 500) {
    pos_x = 0;
  }
  papel1.clearRect(0, 0, 500, 500);
  papel1.drawImage(imagen1, pos_x, pos_y);
}
