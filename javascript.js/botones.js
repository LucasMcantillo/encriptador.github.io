let bottonEncriptar = document.querySelector(".boton-codificar");
let info = document.querySelector("#info");
// Llamamos al evento
bottonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  visible();
  encriptar();
  info.style.display = "none";
  salida.style.display = "block";
});

// Botón desencriptar
let bottonDesencriptar = document.querySelector(".boton-decodificar");
bottonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  visible();
  desencriptar();
  info.style.display = "none";
  salida.style.display = "block";
});

// Texto encriptado.
let resultado = document.querySelector("#resultado");

// Botón copiar.
let bottonCopiar = document.querySelector("#copiar");
bottonCopiar.addEventListener("click", function (event) {
  event.preventDefault();

  let copiar = document.getElementById("resultado").innerHTML;
  navigator.clipboard.writeText(copiar);
  alert("Se ha copiado el texto");

  // Borrar caracteres.
  let borrarcaracter = document.querySelector("#mensaje");
  borrarcaracter.value = "";

  // Cursor listo para escribir
  borrarcaracter.focus();
  invisible();
  info.style.display = "block";
  salida.style.display = "none";
});
