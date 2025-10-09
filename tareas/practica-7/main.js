/* Ejercicio 1 – Área de triángulos múltiples
Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:

Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.

Usa un bucle for para solicitar los datos 3 veces.

Usa condicional para verificar que base y altura sean mayores que 0.

Muestra cada área en consola. */

console.log("Ejercicio 1: Area de triangulos multiples");

for (let i = 1; i <=3; i++) {
    let base = parseFloat(prompt(`Ingresa la base del triangulo ${i}`));
    let altura = parseFloat(prompt(`Ingresa la altura del triangulo ${i}`));
    if (base <= 0) {
        alert("La base debe ser mayor a 0!");
        base = parseFloat(prompt("Ingresa nuevamente la base del triangulo"));
    } 
    if (altura <= 0) {
        alert("La altura debe ser mayor a 0!");
        altura = parseFloat(prompt("Ingresa nuevamente la altura del triangulo"));
    }
    console.log(`**Triangulo ${i}**`);
    console.log(`Base: ${base}`);
    console.log(`Altura: ${altura}`);
    console.log(`Area: ${calcularAreaTriangulo(base, altura).toFixed(2)}`)
}


function calcularAreaTriangulo(base,altura) {
    let area = (base * altura) / 2
    return area;
}


/* Ejercicio 2 – Conversión de Celsius a Fahrenheit
Crea una función convertirAFahrenheit que reciba un valor en Celsius y lo convierta a Fahrenheit:
Pide al usuario 5 temperaturas mediante prompt.
Usa un bucle para hacer las 5 conversiones.
Usa un condicional para verificar que el valor ingresado sea un número.
Muestra cada resultado en consola. */

console.log("Ejercicio 2: Conversion de Celsius a Fahrenheit");

for (let j = 1; j <= 5; j++) {
    let temp = parseFloat(prompt(`Ingresa la temperatura ${j}`));
    if (isNaN(temp)) {
        alert("Ingresa un valor numerico!");
        temp = parseFloat(prompt(`Ingresa nuevamente la temperatura ${j}`))
    }
    console.log(`${j}: ${temp}°C --> ${convertirAFahrenheit(temp).toFixed(2)}°F`);
}

function convertirAFahrenheit(temp) {
let conversion = (temp * 9/5) + 32;
return conversion;
};


/* Ejercicio 3 – Contar vocales en un texto
Crea una función contarVocales que reciba un texto y devuelva el número de vocales:
Pide al usuario 3 textos mediante prompt.
Usa un bucle para recorrer cada letra del texto.
Usa condicionales para determinar si un carácter es vocal.
Muestra en consola cuántas vocales tiene cada texto. */

console.log("Ejercicio 3: Contar vocales en un texto");

for (let k = 1; k <=3; k++) {
    let texto = prompt(`Ingresa el texto No. ${k}`);
    console.log(`El texto ${texto} tiene ${contarVocales(texto)} vocales`);
}

function contarVocales(texto) {
    let contador = 0;
    let textoMinusculas = texto.toLowerCase();

    for(let letra= 0; letra < textoMinusculas.length; letra++) {
        if (textoMinusculas[letra] === "a" || textoMinusculas[letra] === "e" || textoMinusculas[letra] === "i" || textoMinusculas[letra] === "o" || textoMinusculas[letra] === "u") {
            contador ++;
        }
    }
    return contador;
}


/* Ejercicio 4 – Pares e impares en un rango
Crea una función clasificarParesImpares que reciba dos números inicio y fin y:
Use un bucle for para recorrer todos los números desde inicio hasta fin.
Use condicional para imprimir si cada número es par o impar.
Pide al usuario inicio y fin mediante prompt.
Muestra el resultado en consola. */

console.log("Ejercicio 4: Pares e impares en un rango");

let inicio = parseInt(prompt("Ingresa un numero entero de inicio"));
let fin = parseInt(prompt("Ingresa un numero entero de fin"));

clasificarParesImpares(inicio, fin);

function clasificarParesImpares(inicio, fin) {
    for (let n = inicio; n <= fin; n++) {
        if (n % 2 === 0) {
            console.log(`${n} es par`);
        } else {
            console.log(`${n} es impar`);
        }
    };
};

/* Ejercicio 5 – Número mayor y suma
Crea una función mayorYSuma que reciba 5 números separados y:
Use un bucle para comparar cada número y encontrar el mayor.
Use condicionales para verificar cuál es el mayor.
Calcula también la suma de los 5 números.
Pide al usuario los 5 números mediante prompt.
Muestra en consola el número mayor y la suma total.
 */
console.log("Ejercicio 5: Numero mayor y suma");

function mayorYSuma() {
    let sum = 0;
    let mayor;

    for (x = 1; x <= 5; x++) {
        let num = parseFloat(prompt(`Ingresa el numero ${x}`));
        if (isNaN(num)) {
            alert("Ese no es un numero!");
            num = parseFloat(prompt(`Ingresa nuevamente el numero ${x}`));
        }
        sum += num;

        if (x === 1) {
            mayor = num;
        } else if (num > mayor) {
            mayor = num;
        }
    }

    console.log(`La suma de los 5 numeros es: ${sum}`);
    console.log(`El numero mayor es: ${mayor}`);
}

mayorYSuma();

