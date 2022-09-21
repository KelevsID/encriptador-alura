const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const btn = document.querySelector('.encriptar')
const btnDes =  document.querySelector('.desencriptar')
const btnCopy = document.querySelector('.copiar')
btnDes.disabled = true
btnCopy.disabled = true

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

function encriptar(texto) {
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return texto

}

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    if(textoEncriptado == "") {
        alert("texto vacio")
    } else {
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = 'none'
        inputTexto.value = ""
        btn.disabled = true
        btnCopy.disabled = false
    }
}

function desEncriptar(texto) {
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return texto

}

function btnDesencriptar() {
    const textoEncriptado = desEncriptar(inputTexto.value)
    if (textoEncriptado == ""){
        alert("No hay texto")
        
    } else {
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        inputTexto.value = ""
        btn.disabled = false 
        btnDes.disabled = true
        // btnDes.style.color = "gray"
        btnCopy.disabled = false
        
    }
}

function copiar() {
    btnDes.disabled = false
    btnCopy.disabled = true
    navigator.clipboard.writeText(mensaje.value)
    navigator.clipboard.readText(inputTexto.value)
    inputTexto.value = mensaje.value
    mensaje.value = ""
}
