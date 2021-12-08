function validaRotacao(){
    var incremento = document.querySelector(".rotacao").value;
    incremento %= 26;
    var radioDecodificar = document.querySelector(".descodificar");
    if (radioDecodificar.checked) {
        incremento *= (-1);
    }
    cesar(incremento)
}

function cesar(incremento) {

    var textoDeEntrada = document.querySelector(".receber").value;
    var textoDeSaida = document.querySelector(".resultado");
    var trancicao = "";
    textoDeSaida.innerHTML = "";

    for (var i = 0; i < textoDeEntrada.length; i++) {
        trancicao = textoDeEntrada.charCodeAt(i);

        if (trancicao >= 65 && trancicao <= 90) {
            trancicao += incremento;
            if (trancicao > 90) {
                trancicao -= 26;
            } else if (trancicao < 65) {
                trancicao += 26;
            }
        }

        if (trancicao >= 97 && trancicao <= 122) {
            trancicao += incremento;
            if (trancicao > 122) {
                trancicao -= 26;
            } else if (trancicao < 97) {
                trancicao += 26;
            }
        }

        document.querySelector(".resultado").innerHTML += String.fromCharCode(trancicao);
    }
}