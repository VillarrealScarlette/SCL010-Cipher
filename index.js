//Ocultar ventana de trabajo
document.getElementById("windowWork").style.display="none";
//Al clickear -Acceso Clientes-
const btnCostumers = document.getElementById("costumers");
btnCostumers.addEventListener("click", costumers);
function costumers() {
    document.getElementById("identification").style.display="none";
    document.getElementById("requisite").style.display="none";
    document.getElementById("btnUncode").style.display="none";
    document.getElementById("windowWork").style.display="block";
}
//Al clickear -Acceso Colaborador-
const btnSupplier = document.getElementById("supplier");
btnSupplier.addEventListener("click", supplier);
function supplier() {
    document.getElementById("identification").style.display="none";
    document.getElementById("request").style.display="none";
    document.getElementById("btnCode").style.display="none";
    document.getElementById("windowWork").style.display="block";
}
//Cliente accede para Codificar
const btnCode = document.getElementById("code");
btnCode.addEventListener("click", encode);
function encode() {  
        let number = parseInt(document.getElementById("offset").value);
        let textToCode = document.getElementById("enter_text").value;
        console.log(number);
        console.log(textToCode); 
        document.getElementById("out_text").value=window.cipher.encode(number, textToCode);
}
//Colaborador accede para Decodificar
const btnUncode = document.getElementById("uncode");
btnUncode.addEventListener("click", decode);
function decode() {
        let number = parseInt(document.getElementById("offset").value);
        let textToCode = document.getElementById("enter_text").value;
        console.log(number);
        console.log(textToCode);
/*        if (number == "") {
                alert("Ingresa un número de cliente");
            } else if (textToCode === "") {
                    alert("Ingresa un mensaje");
                } else {
                        decode().addEventListener()*/
        document.getElementById("out_text").value=window.cipher.decode(number, textToCode);
}
//Boton limpiar campos de texto
const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", clear);
function clear() {
        document.getElementById("offset").value = "";
        document.getElementById("enter_text").value = "";
        document.getElementById("out_text").value = "";
}
//Boton copiar texto 
