function escolhaCriptografia(){
    if (document.querySelector(".select").value != "cifraCesar") {
        document.querySelector(".rotacao").style.visibility = "hidden";
    } else if (document.querySelector(".select").value == "cifraCesar"){
        document.querySelector(".rotacao").style.visibility = "visible";
        document.querySelector(".rotacao").style.width = "15%";
        document.querySelector(".rotacao").style.background = "rgba(0, 0, 0, 0.76)";
        document.querySelector(".rotacao").style.border = "1px solid #fff";
        document.querySelector(".rotacao").style.borderRadius = "10px";
        document.querySelector(".rotacao").style.margin = "0 10px";
        document.querySelector(".rotacao").style.padding = "5px";
        document.querySelector(".rotacao").style.color = "greenyellow";
    }
}

function decisao() {
    if (document.querySelector(".select").value == "base64") {  
        base64()
    }
    else {
        validaRotacao()
    }
}

function botaoCriptografar() {
    var botaoCode = document.querySelector ('.bparagrafo')
    botaoCode.textContent = 'Codificar';
    botaoCode.style.color = 'green';
}
function botaoDescriptografar() {
    var botaoCode = document.querySelector ('.bparagrafo')
    botaoCode.textContent = 'Decodificar';
    botaoCode.style.color = 'red'
}