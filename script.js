const entrada = document.querySelector(".introducir-texto");
const salida = document.querySelector(".texto-desencriptado");

function btnEncriptar(){
    if(entrada.value==""){
        salida.value = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  No se encontró texto para manipular";
        salida.style.backgroundImage = "url(pictures/Muñecoimagen.png)";
    }
    else{
        salida.value = manipular(entrada.value, "encriptar");
        salida.style.backgroundImage = "none";
        entrada.value = "";
    }
}

function btnDesencriptar(){
    if(entrada.value==""){
        salida.value = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  No se encontró texto para manipular";
        salida.style.backgroundImage = "url(pictures/Muñecoimagen.png)";
    }
    else{
        salida.value = manipular(entrada.value, "desencriptar");
        salida.style.backgroundImage = "none";
        entrada.value = "";
    }
}

function btnCopiar(){
    salida.select();
    document.execCommand("copy");
}

function manipular(textoManipular, accion){
    let patron = [];

    if(accion == "encriptar"){
        patron = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    }

    if(accion == "desencriptar"){
        patron = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    }

    textoManipular = textoManipular.toLowerCase();

    for (let i = 0; i < patron.length; i++){

        if(textoManipular.includes(patron[i][0])){
            textoManipular = textoManipular.replaceAll(patron[i][0], patron[i][1]);
        }
    }

    const textoManipulado = textoManipular;

    return textoManipulado;
}