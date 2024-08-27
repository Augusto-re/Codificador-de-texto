
//Funcion para encriptar el texto capturado desde el input
function encriptar() {
  let texto = document.getElementById("campo_de_texto").value;

  let textoEncriptado = texto
    //Uso de expresiones regulares agregando "g" para que el uso sea global y no me cambie solo la primera vez que coincide el caracter
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    borrarMunecoYTexto();

  let mostrar = document.getElementById("parrafo_oculto");
  let contenedorOculto = document.getElementById("contenedor_oculto").style.display = "flex";
  let contenedorTexto = document.getElementsByClassName("contenedor_texto_encriptado")[0].style.justifyContent = "Flex-start";
  mostrar.style.display = "block";
  mostrar.innerHTML = textoEncriptado;
  let botonCopiado = document.getElementsByClassName("boton_copiar")[0];
  botonCopiado.style.display= "block";
}

//Funcion para encriptar el texto capturado desde el input o copiado
function desencriptar() {
  let texto = document.getElementById("campo_de_texto").value;
  let textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  let mostrar = document.getElementById("parrafo_oculto");
  let contenedorOculto = document.getElementById("contenedor_oculto").style.display = "flex";
  mostrar.style.display = "block";
  mostrar.innerHTML = textoDesencriptado;
}

function borrarMunecoYTexto(){
    let muneco= document.getElementById('muneco');
    //Probando como utilizar la funcionalidad "getElementsByClassName" descubri que me devuelve un array con todas las ocurrencias de esa clase
    let textoMuneco = document.getElementsByClassName("tarea")[0];
    let textoNoEncontrado = document.getElementById("mensaje_no_encontrado");
    muneco.style.display = 'none';
    textoMuneco.style.display = 'none';
    textoNoEncontrado.style.display = 'none';
}

function copiar(){
    let textoCopiado = document.getElementById("parrafo_oculto").innerText;
    navigator.clipboard.writeText(`${textoCopiado}`);
}


let textarea = document.getElementById('campo_de_texto');

textarea.addEventListener('input', autoAjustarAltura);

function autoAjustarAltura() {
    textarea.style.height = 'auto'; // Restablece la altura para recálculo
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura basada en el contenido
}