/* Ejercicio 1 – Área de triángulos múltiples
Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:

Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.

Usa un bucle for para solicitar los datos 3 veces.

Usa condicional para verificar que base y altura sean mayores que 0.

Muestra cada área en consola. */

/* console.log("Ejercicio 1: Area de triangulos multiples");

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
} */


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


/* let resultado = 0;

let opcion = parseInt(prompt
    (`Selecciona el numero de la conversion que deseas realizar
        OPCIONES
    (1) Convertir de Celsius a Fahrenheit
    (2) Convertir de Fahrenheit a Celsius
    (3) Convertir de Metros a Kilómetros
    (4) Convertir de Kilómetros a Metros 
    `));
let valor = parseFloat(prompt("Escribe el valor a convertir"));

switch (opcion) {
    case 1:
        resultado = (valor * 9/5) + 32;
        console.log(`${valor}°C equivale a ${resultado.toFixed(2)}°F`);
        break;
    case 2:
        resultado = (valor -32) * 5/9;
        console.log(`${valor}°F equivale a ${resultado.toFixed(2)}°C`);
        break;
    case 3:
        resultado = valor / 1000;
        console.log(`${valor}m equivale a ${resultado.toFixed(2)}km`);
        break;
    case 4:
        resultado = valor * 1000;
        console.log(`${valor}km equivale a ${resultado.toFixed(2)}m`);
        break;
    default:
        console.log("valor no reconocido");
        break;
}
 */