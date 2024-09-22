let strOriginal = "BOOM!";

function inverter(frase) {
    let strInvertida = "";

    for (let i = frase.length - 1; i >= 0; i--) {
        strInvertida += frase[i];
    }

    return strInvertida;
}

let resultado = inverter(strOriginal);
console.log("String original:", strOriginal);
console.log("String invertida:", resultado);