//BASE64
function base64() {
    var b64 = document.querySelector(".receber").value;

    if (document.querySelector(".codificar").checked) {
        event.preventDefault();
        let tradutor = btoa(b64);
        document.querySelector(".resultado").innerHTML = tradutor;
    } else if (document.querySelector(".descodificar").checked){
        event.preventDefault();
        let tradutor = atob(b64);
        console.log(tradutor);
        document.querySelector(".resultado").innerHTML = tradutor;
    }
}