const texto = document.getElementById('text');
const textoCripto = document.getElementById('text-cripto');
const segundaColEmpty = document.querySelector('.segunda-col-empty');
const segundaColText = document.querySelector('.segunda-col-text');
const btnCopiar = document.querySelector('.btn-copiar')

function cryptText() {
    textoCripto.textContent = "";
    let textoDigitado = texto.value.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    textoCripto.textContent = textoDigitado;
}

function uncryptText() {
    textoCripto.textContent = "";
    let textoDigitado = texto.value.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    textoCripto.textContent = textoDigitado;
}

texto.addEventListener('keypress', function(e) {
    if(!checkChar(e)) {
        e.preventDefault();
    }
})

function checkChar(e) {
    let char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z\u00C0-\u00FF ]';
    if(char.match(pattern)) {
        return true;
    }
}

texto.addEventListener('input', function(){
    if(this.value.length > 0) {
        segundaColEmpty.style.display = 'none';
        segundaColText.style.display = 'flex';
    }
})

btnCopiar.addEventListener('click', function(){
    textoCripto.select();
    document.execCommand('copy');
})


