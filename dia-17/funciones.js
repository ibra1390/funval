function promedio(notasArray) {
    let resultado;
    for (let index = 0; index < notasArray.length; index++) {
        resultado += notasArray[index];
    }
    resultado /= notasArray.length;
    return resultado.toFixed(2);
};

function suma() {
    return 2;
}

kev = 322;

export {promedio, suma, kev}