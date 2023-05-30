const textArea = document.querySelector(".textarea");
const mensagem = document.querySelector(".mensagem");

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function btnCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
}

function criptografar(stringCriptografada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}

function descriptografar(stringDescriptografada) {

    let matrizCodigo = [["e", "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDescriptografada;
}

function btnCopiar() {
    const textoCopiado = mensagem.value;
    navigator.clipboard.writeText(textoCopiado);
    mensagem.value = "";
    }
