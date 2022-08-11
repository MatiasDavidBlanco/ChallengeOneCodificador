var texto="";
var textoCifrado="";
var textoDescifrado="";

function stop(event){
    event.preventDefault()
};
function encriptar (){
    texto= document.getElementById("text-input").value
    if (texto==""){
        alert("Ingrese un texto para encriptar")
        stop();
    }
    if (texto.search(/[A-Z]/g) > -1 || texto.search(/([áéíóúü])+/g) > -1 || texto.search(/[^A-z\s\d][\\\^]?/g) > -1) {
        alert("No se aceptan letras en minuscula, acentos ni carácteres especiales");
    }else{
        textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.getElementById("text-outputOn").innerHTML = textoCifrado;
        document.getElementById("text-outputOff").style.display= "none"
        document.getElementById("copiar-btn").style.display= "block"
        document.getElementById("text-input").value= "";
    }
}
function desencriptar(){
    textoDescifrado = textoCifrado.replace(/(enter)/gi,"e").replace(/(imes)/gi,"i").replace(/(ai)/gi,"a").replace(/(ober)/gi,"o").replace(/(ufat)/gi,"u");
    document.getElementById("text-outputOn").innerHTML = textoDescifrado;
    document.getElementById("copiar-btn").style.display= "block"
}
function copiarAlPortapapeles() {
        navigator.clipboard
            .writeText(document.getElementById('text-outputOn').innerText)
            .then(
                success => alert("COPIADO!"), err => alert("error copying text")
            );
}
