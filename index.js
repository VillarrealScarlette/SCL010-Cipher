//Ocultar ventana de trabajo
document.getElementById("windowWork").style.display="none";
//Al clickear -Acceso Clientes-
const btnCostumers = document.getElementById("costumers");
btnCostumers.addEventListener("click", costumers);
function costumers() {
    document.getElementById("identification").style.display="none";
    document.getElementById("requisite").style.display="none";
    document.getElementById("infoRequisite").style.display="none";
    document.getElementById("infoCopyRequisite").style.display="none";
    document.getElementById("btnUncode").style.display="none";
    document.getElementById("windowWork").style.display="block";
}
//Al clickear -Acceso Trabajador-
const btnSupplier = document.getElementById("supplier");
btnSupplier.addEventListener("click", supplier);
function supplier() {
    document.getElementById("identification").style.display="none";
    document.getElementById("request").style.display="none";
    document.getElementById("infoCopyText").style.display="none";
    document.getElementById("infoRequest").style.display="none";
    document.getElementById("btnCode").style.display="none";
    document.getElementById("windowWork").style.display="block";
}
//Cliente accede para Codificar
const btnCode = document.getElementById("code");
btnCode.addEventListener("click", encode);
function encode() {
        let offset = document.getElementById("offset").value;
        let number = parseInt(offset);
        let textToCode = document.getElementById("enter_text").value;
        if (offset == "") {
                alert("No se ha ingresado RUT Cliente Empresa")
        } else if (textToCode == "") {
                alert("No se ha ingresado un requerimiento")
        } else {
                document.getElementById("out_text").value=window.cipher.encode(number, textToCode);
        }        
}
//Trabajador accede para Decodificar
const btnUncode = document.getElementById("uncode");
btnUncode.addEventListener("click", decode);
function decode() {
        let offset = document.getElementById("offset").value;
        let number = parseInt(offset);
        let textToCode = document.getElementById("enter_text").value;
        if (offset == "") {
                alert("No se ha ingresado RUT Cliente Empresa")
        } else if (textToCode == "") {
                alert("No se ha ingresado un requerimiento de cliente")
        } else {
                document.getElementById("out_text").value=window.cipher.decode(number, textToCode);
        }
}
//Boton Limpiar campos de texto
const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", clear);
function clear() {
        document.getElementById("offset").value = "";
        document.getElementById("enter_text").value = "";
        document.getElementById("out_text").value = "";
}
//Boton Copiar texto
const btnCopy = document.getElementById("copy");
btnCopy.addEventListener("click", copy);
function copy() {
        let copyOutText = document.getElementById("out_text");
        copyOutText.select();
        document.execCommand("copy");
} 
