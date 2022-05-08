function ocultarBoton() {
  // Oculta botón copiar.
  bottonCopiar.style.display = "none";
}

function visible() {
  // Muestra boton copiar
  bottonCopiar.style.display = "block";
}

function encriptar() {
  let palabra = document.getElementsByTagName("textarea")[0].value;
  let palabra_codificada = palabra
    .replaceAll("a", "xxa")
    .replaceAll("e", "xxe")
    .replaceAll("i", "xxi")
    .replaceAll("o", "xxo")
    .replaceAll("u", "xxu");
  let palabra_codificada1 = palabra_codificada
    .replaceAll("xxa", "ai")
    .replaceAll("xxe", "enter")
    .replaceAll("xxi", "imes")
    .replaceAll("xxo", "ober")
    .replaceAll("xxu", "ufat");

  // Mostrar datos en pantalla.
  document.getElementById("resultado").innerHTML = palabra_codificada1;

  //Area vacía?
  while (palabra_codificada1 == "") {
    alert("No válido, ingrese el texto");
    palabra.remove("resultado");
    invisible();
    break;
  }
  if (!palabra_codificada == "") {
    alert("Encriptado");
  }
}

function desencriptar() {
  // Recibiendo informacion.
  let palabra = document.getElementsByTagName("textarea")[0].value;
  let palabra_codificada = palabra
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.getElementById("resultado").innerHTML = palabra_codificada;

  while (palabra_codificada == "") {
    alert("No válido, ingrese el texto");
    palabra.remove("resultado");
    break;
  }
  if (!palabra == "") {
    alert("Desencriptado");
  }
}

// Validando datos.
function esValido(c) {
  c = c.charCodeAt(0);
  return (c >= 97 && c <= 122) || (c >= 32 && c <= 64); // [a-z ]
}

function validarEntrada(cadena) {
  for (var i = 0; i < cadena.length; i++) {
    if (!esValido(cadena[i])) {
      break;
    }
  }
  return i == cadena.length;
}

function validarTextarea(elem) {
  var txt = elem.value;
  if (!validarEntrada(txt)) {
    elem.classList.add("invalido");

    // Mensaje de alerta.
    document.getElementsByClassName("invalido").innerHTML =
      alert("Caracter no válido");

    // Borrando datos.
    var borrarcaracter = document.querySelector("#texto-entrada");
    borrarcaracter.value = "";
    invisible();
  } else {
    elem.classList.remove("invalido");
  }
}
